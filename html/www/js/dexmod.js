(function(window) { 
  'use strict';
   // Login screen 
let STOP = false;
  $.each($('#page * a'),function() {
    $(document).on('click',$(this),function(e){
       e.stopPropagation();
       setTimeout(modifyMain,100);
    });
  }); 

  function displayNone(IDSelector) {
    var element = document.getElementById(IDSelector);
    if(element) element.style.display="none";
  }

  function replaceARDOR(queryAllSelector) {
    var selectors = document.querySelectorAll(queryAllSelector);
    if(!selectors.length) return;
    for(const text of selectors){
      var content = text.textContent.toUpperCase();
      if(content.includes('ARDOR') || content.includes('ARDR') || content.includes('Ardor') || content.includes('IGNIS') || content.includes('AEUR') || content.includes('BITSWIFT')) {
        content = content.replace(/ARDOR/,'BNB');
        content = content.replace(/IGNIS/,'BNB');
       // content = content.replace(/ARDR/,'BNB');
        content = content.replace(/Ardor/,'BNB');
        content = content.replace(/AEUR/,'BTC');
        content = content.replace(/BITSWIFT/,'ETH');
        text.textContent = content;
      }
    }
  }

  function replaceCurrencies(queryAllSelector) {
    var selectors = document.querySelectorAll(queryAllSelector);
    if(!selectors.length) return;
    for(const text of selectors){
      var content = text.textContent;
      if(content.includes('Currencies') || content.includes('Currency')) {
        content = content.replace(/Currencies/,'Projects');
        content = content.replace(/Currency/,'Project');
        text.textContent = content;
      }
    }
  }

  function modifyCurrencyTable(element) { 
    if(element && !STOP) {
      console.log(element.parentElement);
      const chain = element.getAttribute('data-chain');
      const currency = element.getAttribute('data-id');
      const request = 'getCurrency';
      const $descField = element.parentElement.nextSibling.nextSibling;
        NRS.sendRequest(request, {currency: currency,chain: chain}, function(res) {
          $descField.textContent = res.description;
        });
    }
  }

  $(document).on('click', '#sidebar_monetary_system',function() { 
   setTimeout(function() {
      var $reverseButton = document.querySelectorAll('#currencies_page [data-target="#reserve_currency_modal"]');
      for(var reverse of $reverseButton) {
        var content = reverse.textContent;
        reverse.textContent = content.replace(/Reserve/,'Back this Project');
      }
      var $currencyNames = document.querySelectorAll('#currencies_page [data-key="currency"]');
      for(var currencyName of $currencyNames) { 
        if(currencyName.textContent.includes('BNBY')) {
          modifyCurrencyTable(currencyName);
        } else {
          currencyName.parentElement.parentElement.style.display = "none";
        }
      }
      document.getElementById('currencies_table').style.display = "table";
    }, 500);
  });

  function modifyMain() {
//    document.querySelector('#lockscreen .chain-selector') ? document.querySelector('#lockscreen .chain-selector').style.display='none' : '';
   document.querySelector('#lockscreen .chain-selector') ? document.querySelector('#lockscreen .chain-selector select').value= '2' : '';

    replaceCurrencies('#sidebar_monetary_system .treeview-menu span');
    replaceCurrencies('#currencies_page h1');
    replaceCurrencies('#currencies_page_type span');
    replaceCurrencies('#entity_details_type');
    replaceCurrencies('#entity_details_table td');

    document.querySelector('#currencies_page [name="searchquery"]').placeholder = 'Search Projects...';

    replaceARDOR('.custom_login_warning');

    displayNone("registration_link");
//    displayNone("login_account_container_other");

    displayNone("dashboard_currencies_val_div");
    displayNone("dashboard_purchased_products_div");
    displayNone("dashboard_pending_products_div");
    displayNone("dashboard_aliases_div");
    displayNone("dashboard_blocks_div");

    //displayNone("sidebar_coin_exchange");
    displayNone("sidebar_voting_system");
    displayNone("sidebar_tagged_data");
    displayNone("sidebar_dgs_buyer");
    displayNone("sidebar_aliases");
    displayNone("sidebar_plugins");
    displayNone("sidebar_asset_exchange");
//    displayNone("chain_dropdown");


    //Login panel
    displayNone("testnet_login");
    displayNone("remem-wrap");
    try{
      document.querySelectorAll('[data-login-type="account"]')[0].style.display="none";
      document.querySelectorAll('[data-login-type="scan"]')[0].style.display="none";
      document.querySelectorAll('[data-login-type="password"]')[0].style.display="none";
      document.querySelectorAll('[data-i18n="new_q_create_account"]')[0].style.display="none";
      document.getElementById("login_password").parentElement.style.display="table";
    }catch(e){
    }
   
    if(!document.getElementById('logo-text')) { 
      document.querySelectorAll('#lockscreen .binance')[0].insertAdjacentHTML('afterend','<p id="logo-text">Connected to Trading DEX Node<br><br><span style="font-size:15px">A Project by <a href="https://xcubicle.com" target="_BLANK" >xCubicle</a>, Built with <a href="https://www.ardorplatform.org">Ardor</a></span><br>Binance Decentralized Exchange - Proof of Concept Testnet</p>')
    }


    document.getElementById("nrs_version_info").parentElement.style.display="none";


    replaceARDOR('#step_2_account');
    replaceARDOR('#welcome_panel span')

    replaceARDOR('#dashboard_table td a');

    replaceARDOR('.show_account_modal_action');
    replaceARDOR('#user_info_modal_account');
    replaceARDOR('#user_info_modal_account_balance');
    replaceARDOR('#sidebar_account_id');

    replaceARDOR('.show_chain_modal_action');
    replaceARDOR('.show_entity_modal_action');
    replaceARDOR('.coin-symbol');

    replaceARDOR('#transaction_info_details_table tr td:nth-child(2)');
    replaceARDOR('#finished_shufflings_full tbody tr td:nth-child(3)');
    replaceARDOR('#transaction_info_table tbody tr td');
    replaceARDOR('#chain_details_table tbody tr td');

    replaceARDOR('#account_balance_balance');
    replaceARDOR('#account_balance_unconfirmed_balance');
    replaceARDOR('#account_balance_guaranteed_balance');
    replaceARDOR('#account_balance_effective_balance');
    replaceARDOR('#account_balance_forged_balance');

    replaceARDOR('#buy_asset_with_nxt');
    replaceARDOR('#sell_asset_for_nxt');

    //replaceARDOR('.list-group-item-heading');

    replaceARDOR('.chain-selector option'); 
    replaceARDOR('#chain_dropdown .dropdown-menu li a'); 
    replaceARDOR('.alert-info');

    //Coin Exchange
    replaceARDOR('#buy_coin_with_nxt'); 
    replaceARDOR('#coin_name'); 
    replaceARDOR('.coin_name'); 
    replaceARDOR('.coin_exchange_base_coin'); 
    replaceARDOR('.coin_exchange_counter_coin'); 
    replaceARDOR('#coin_exchange_sidebar_content .list-group-item-heading'); 

     try {
      document.querySelectorAll('[data-i18n="monetary_system"]')[0].textContent = "Crowd Funding";
     }catch(error){
     }

    if(!document.getElementById('tradingview_0548a')){
      var tradingViewContainer = `
      <div class="tradingview-widget-container">
        <div id="tradingview_0548a"></div>
          <div class="tradingview-widget-copyright">
              <a href="https://www.tradingview.com/symbols/BITFINEX-BTCUSD/" rel="noopener" target="_blank">
                <span class="blue-text">BTCUSD chart</span>
              </a> by TradingView
        </div>
      </div>`
      document.getElementById('coin_description').insertAdjacentHTML('afterend',tradingViewContainer); 

     jQuery('body').on('click','#coin_exchange_sidebar_content a', function() {
       event.stopPropagation();
       $('#tradingview_0548a').css('height','400px');
       $('#tradingview_0548a').parent().show();
       var coinName = $(this).text().toLowerCase();
       console.log(coinName);
       if(coinName.includes('btc')){ 
         new TradingView.widget({
          "autosize": true,
          "symbol": "BITFINEX:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "save_image": false,
          "container_id": "tradingview_0548a"
        });
       } else if(coinName.includes('litecoin')) {
          new TradingView.widget(
            {
            "autosize": true,
            "symbol": "BITFINEX:LTCUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "Dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_top_toolbar": true,
            "save_image": false,
            "container_id": "tradingview_0548a"
          });
       } else if(coinName.includes('eth')) {
         new TradingView.widget({
          "autosize": true,
          "symbol": "BITFINEX:ETHUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "save_image": false,
          "container_id": "tradingview_0548a"
        });
       } else if(coinName.includes('monero')) {
          new TradingView.widget({
          "autosize": true,
          "symbol": "BITFINEX:XMRUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "save_image": false,
          "container_id": "tradingview_0548a"
        });
       } else if(coinName.includes('ardr')) {
          new TradingView.widget({
          "autosize": true,
          "symbol": "BITTREX:ARDRBTC",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "save_image": false,
          "container_id": "tradingview_0548a"
        });
       }
       else {
         $('#tradingview_0548a').parent().hide();
       } 
     });
    }

    if(!document.getElementById('custom_new_account')){
      // Generate New Account
      document.getElementById("step_2_account").style.display="none";

      var newAccountInput = document.createElement('input');
      newAccountInput.setAttribute('class','form-control');
      newAccountInput.setAttribute('type','text');
      newAccountInput.setAttribute('id','custom_new_account');
      document.getElementById('step_2_account').after(newAccountInput);

    }
    var $custom_login_input = document.getElementById('step_2_account');
    var v = $custom_login_input.value;
    v = v.replace(/^ARDOR/i,'BNB');
    document.getElementById("custom_new_account").value = v;

    if(!document.getElementById('custom_login_input')){
      // New Input LOGIN field:
      document.getElementById("login_account_other").style.display="none";

      var newLoginInput = document.createElement('input');
      newLoginInput.setAttribute('class','form-control');
      newLoginInput.setAttribute('type','text');
      newLoginInput.setAttribute('id','custom_login_input');
      newLoginInput.setAttribute('placeholder','Your Account');
      document.getElementById('login_account_other').after(newLoginInput);

      var $custom_login_input = document.getElementById('custom_login_input');
      $custom_login_input.addEventListener('focusout',function(event) {
        var v = this.value;
        v = v.replace(/^BNB/i,'ARDOR');
        document.getElementById("login_account_other").value = v;
      });

      const paramValue = window.location.search ? window.location.search.split('?')[1].split('walletacct=')[1] : '';
      if(paramValue) {
        document.getElementById('custom_login_input').value = paramValue;
        document.getElementById('custom_login_input').focus();
        console.log('yeaaa its clicked============================================-=-=-=');

      }
    }

    if(!document.getElementById('custom_message_input')){
      // New Input Message:
      document.getElementById("send_message_recipient").style.display="none";

      var newMessageInput = document.createElement('input');
      newMessageInput.setAttribute('class','form-control');
      newMessageInput.setAttribute('type','text');
      newMessageInput.setAttribute('id','custom_message_input');
      newMessageInput.setAttribute('placeholder','Recipient Account');
      document.getElementById('send_message_recipient').after(newMessageInput);

      var $custom_message_input = document.getElementById('custom_message_input');
      $custom_message_input.addEventListener('focusout',function(event) {
        var v = this.value;
        v = v.replace(/^BNB/i,'ARDOR');
        document.getElementById("send_message_recipient").value = v;
      });
    }

    if(!document.getElementById('custom_asset_transfer')) {
      // New Input asset transfer:
      document.getElementById("transfer_asset_recipient").style.display="none";

      var newInput = document.createElement('input');
      newInput.setAttribute('class','form-control');
      newInput.setAttribute('type','text');
      newInput.setAttribute('id','custom_asset_transfer');
      newInput.setAttribute('placeholder','Recipient Account');
      document.getElementById('transfer_asset_recipient').after(newInput);

      var $custom_money_input = document.getElementById('custom_asset_transfer');
      $custom_money_input.addEventListener('focusout',function(event) {
        var v = this.value;
        v = v.replace(/^BNB/i,'ARDOR');
        document.getElementById("send_money_recipient").value = v;
      });
    } 

    if(!document.getElementById('custom_money_input')) {
      // New Input send money:
      document.getElementById("send_money_recipient").style.display="none";

      var newMoneyInput = document.createElement('input');
      newMoneyInput.setAttribute('class','form-control');
      newMoneyInput.setAttribute('type','text');
      newMoneyInput.setAttribute('id','custom_money_input');
      newMoneyInput.setAttribute('placeholder','Recipient Account');
      document.getElementById('send_money_recipient').after(newMoneyInput);

      var $custom_money_input = document.getElementById('custom_money_input');
      $custom_money_input.addEventListener('focusout',function(event) {
        var v = this.value;
        v = v.replace(/^BNB/i,'ARDOR');
        document.getElementById("send_money_recipient").value = v;
      });
    } 
  }

  
// LOGO
var logoMarkup = `  
  <section class="binance">
    <div class="bnbContainer">
      <div class="top-row">
        <span class="top top-one"></span>
        <span class="top top-two"></span>
        <span class="top top-three"></span>
      </div>
      <div class="center-row">
        <span class="center center-one"></span>
        <span class="center center-two"></span>
        <span class="center center-three"></span>
      </div>
      <div class="bottom-row">
        <span class="bottom bottom-one"></span>
        <span class="bottom bottom-two"></span>
        <span class="bottom bottom-three"></span>
      </div>
    </div>
  </section>`;
  
  if(!document.querySelector('#lockscreen binance')) {
    document.getElementById('logo-nxt-img').style.display="none";
    var $lockscreenLOGO = document.querySelector('#lockscreen td:first-child');
    $lockscreenLOGO.insertAdjacentHTML('afterbegin',logoMarkup);
  }

  if(!document.querySelector('#logo binance')) {
    document.querySelector('#logo  .logo').innerHTML = logoMarkup; 
  }

  window.dexmod = modifyMain;

})(window);
