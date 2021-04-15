window.registerErrorHandler && window.registerErrorHandler( [] );

var onReady = function() {
  campaignSource('campaignSource', '.octamarkets.net');
};

if (document.readyState != 'loading') {
  onReady();
} else {
  document.addEventListener('DOMContentLoaded', onReady);
}

(window.NREUM||(NREUM={})).loader_config={licenseKey:"0bd78bcc4a",applicationID:"233263817"};window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var i=t[n]={exports:{}};e[n][0].call(i.exports,function(t){var i=e[n][1][t];return r(i||t)},i,i.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,n){function r(){}function i(e,t,n){return function(){return o(e,[u.now()].concat(c(arguments)),t?null:this,n),t?void 0:this}}var o=e("handle"),a=e(7),c=e(8),f=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(e,t){s[t]=i(p+t,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,i="function"==typeof t;return o(l+"tracer",[u.now(),e,n],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return t.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],n),e}finally{f.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=i(l+t)}),newrelic.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,t])}},{}],2:[function(e,t,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=e(9);t.exports=r,t.exports.offset=a,t.exports.getLastTimestamp=i},{}],3:[function(e,t,n){function r(e){return!(!e||!e.protocol||"file:"===e.protocol)}t.exports=r},{}],4:[function(e,t,n){function r(e,t){var n=e.getEntries();n.forEach(function(e){"first-paint"===e.name?d("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&d("timing",["fcp",Math.floor(e.startTime)])})}function i(e,t){var n=e.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(e){e.getEntries().forEach(function(e){e.hadRecentInput||d("cls",[e])})}function a(e){if(e instanceof m&&!g){var t=Math.round(e.timeStamp),n={type:e.type};t<=p.now()?n.fid=p.now()-t:t>p.offset&&t<=Date.now()?(t-=p.offset,n.fid=p.now()-t):t=p.now(),g=!0,d("timing",["fi",t,n])}}function c(e){d("pageHide",[p.now(),e])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,s,d=e("handle"),p=e("loader"),l=e(6),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,w=["click","keydown","mousedown","pointerdown","touchstart"];w.forEach(function(e){document.addEventListener(e,a,!1)})}l(c)}},{}],5:[function(e,t,n){function r(e,t){if(!i)return!1;if(e!==i)return!1;if(!t)return!0;if(!o)return!1;for(var n=o.split("."),r=t.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}t.exports={agent:i,version:o,match:r}},{}],6:[function(e,t,n){function r(e){function t(){e(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,t,!1)}t.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],7:[function(e,t,n){function r(e,t){var n=[],r="",o=0;for(r in e)i.call(e,r)&&(n[o]=t(r,e[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],8:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,i=n-t||0,o=Array(i<0?0:i);++r<i;)o[r]=e[t+r];return o}t.exports=r},{}],9:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function i(e){function t(e){return e&&e instanceof r?e:e?u(e,f,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){e&&a&&e(n,r,i);for(var c=t(i),f=v(n),u=f.length,s=0;s<u;s++)f[s].apply(c,r);var p=d[h[n]];return p&&p.push([b,n,r,c]),c}}function o(e,t){y[e]=v(e).concat(t)}function m(e,t){var n=y[e];if(n)for(var r=0;r<n.length;r++)n[r]===t&&n.splice(r,1)}function v(e){return y[e]||[]}function g(e){return p[e]=p[e]||i(n)}function w(e,t){s(e,function(e,n){t=t||"feature",h[n]=t,t in d||(d[t]=[])})}var y={},h={},b={on:o,addEventListener:o,removeEventListener:m,emit:n,get:g,listeners:v,context:t,buffer:w,abort:c,aborted:!1};return b}function o(e){return u(e,f,a)}function a(){return new r}function c(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var f="nr@context",u=e("gos"),s=e(7),d={},p={},l=t.exports=i();t.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(e,t,n){function r(e,t,n){if(i.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[t]=r,r}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){i.buffer([e],r),i.emit(e,t,n)}var i=e("ee").get("handle");t.exports=r,r.ee=i},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!E++){var e=x.info=NREUM.info,t=l.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return u.abort();f(h,function(t,n){e[t]||(e[t]=n)});var n=a();c("mark",["onload",n+x.offset],null,"api"),c("timing",["load",n]);var r=l.createElement("script");r.src="https://"+e.agent,t.parentNode.insertBefore(r,t)}}function i(){"complete"===l.readyState&&o()}function o(){c("mark",["domContent",a()+x.offset],null,"api")}var a=e(2),c=e("handle"),f=e(7),u=e("ee"),s=e(5),d=e(3),p=window,l=p.document,m="addEventListener",v="attachEvent",g=p.XMLHttpRequest,w=g&&g.prototype;if(d(p.location)){NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:g,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var y=""+location,h={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1208.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),x=t.exports={offset:a.getLastTimestamp(),now:a,origin:y,features:{},xhrWrappable:b,userAgent:s};e(1),e(4),l[m]?(l[m]("DOMContentLoaded",o,!1),p[m]("load",r,!1)):(l[v]("onreadystatechange",i),p[v]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var E=0}},{}],"wrap-function":[function(e,t,n){function r(e,t){function n(t,n,r,f,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,f],s],e)}c(n+"start",[o,a,f],s,u);try{return p=t.apply(a,o)}catch(m){throw c(n+"err",[o,a,m],s,u),m}finally{c(n+"end",[o,a,p],s,u)}}return a(t)?t:(n||(n=""),nrWrapper[p]=t,o(t,nrWrapper,e),nrWrapper)}function r(e,t,r,i,o){r||(r="");var c,f,u,s="-"===r.charAt(0);for(u=0;u<t.length;u++)f=t[u],c=e[f],a(c)||(e[f]=n(c,s?f+r:r,i,f,o))}function c(n,r,o,a){if(!m||t){var c=m;m=!0;try{e.emit(n,r,o,t,a)}catch(f){i([f,n,r,o],e)}m=c}}return e||(e=s),n.inPlace=r,n.flag=p,n}function i(e,t){t||(t=s);try{t.emit("internal-error",e)}catch(n){}}function o(e,t,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(e);return r.forEach(function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){return e[n]=t,t}})}),t}catch(o){i([o],n)}for(var a in e)l.call(e,a)&&(t[a]=e[a]);return t}function a(e){return!(e&&e instanceof Function&&e.apply&&!e[p])}function c(e,t){var n=t(e);return n[p]=e,o(e,n,s),n}function f(e,t,n){var r=e[t];e[t]=c(r,n)}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;++n)t[n]=arguments[n];return t}var s=e("ee"),d=e(8),p="nr@original",l=Object.prototype.hasOwnProperty,m=!1;t.exports=r,t.exports.wrapFunction=c,t.exports.wrapInPlace=f,t.exports.argsToArray=u},{}]},{},["loader"]);

window.captchaFunctionObject = window.captchaFunctionObject || {}

window.captchaFunctionObject['widget_registration_captcha'] = function () {
  widget_registration_captcha = grecaptcha.render('registration_captcha', {'sitekey' : '6LdBYSETAAAAAEeB2T2VPgWd_xpXtqeCKhJ8nZ4R'});
}

window.captchaFunctionObject = window.captchaFunctionObject || {}

window.captchaFunctionObject['widget_login_captcha'] = function () {
  widget_login_captcha = grecaptcha.render('login_captcha', {'sitekey' : '6LdBYSETAAAAAEeB2T2VPgWd_xpXtqeCKhJ8nZ4R'});
}

window.__vueComponentsLoaders = [];
window.__vueApps = {};

function __vueComponentLoad (loader, store) {
  require([loader.jsUrl], function(Component) {

    var componentId = loader.uniqComponentId;

    if (!Component) {
      console && console.warn('Vue component not loaded from ' + loader.jsUrl + ' #' + componentId);
      return;
    }

    var i18n = new window.VueI18n({
      locale: loader.locale,
      fallbackLocale: 'en',
      messages: loader.i18nMessagesJson,
      formatter:  {
        interpolate: function (message, values) {
          for (var key in values) {
            message = message.replace('%'+key+'%', values[key]);
          }
          return [ message ];
        }
      },
      missing: function (lang, variable, vm) {
        window.axios.post(loader.translationsUrl, {
          method: 'translations.get',
          params: {
            pageId: loader.pageId,
            language: loader.locale,
            variable: variable
          },
          "jsonrpc": "2.0",
          "id": Date.now()
        })
          .then(function(response){
            var message = {};

            if (response.data.error) {
              console.warn('Undefined variable: ', variable);
              message[variable] = variable;
              vm.$i18n.mergeLocaleMessage(lang, message); // merge it for prevent extra requests
              return;
            }
            message[variable] = response.data.result.translation;
            vm.$i18n.mergeLocaleMessage(lang, message);
            vm.$forceUpdate();
          })
          .catch(function(err) {
            throw err;
          })
        return variable;
      }
    })

    Component.default.getAsyncDataIfExists = ! loader.asyncData;
    Component.default.name = componentId;

    window.__vueApps[componentId] = new window.Vue({
      i18n: i18n,
      store: store,
      // name: componentId,
      el: '#' + componentId,
      render: function (h) {
        return h(
          Component.default,
          { props: loader.propsJson },
          [ h('div', {attrs: { id: componentId + '-content' }}) ]
        );
      },
      mounted: function () {
        var el = document.getElementById(componentId + '-content');
        if (el) {
          el.innerHTML = loader.slotHtml;
        }
      }
    });
  }, function(err) {
    throw err;
  });
}

document.addEventListener("DOMContentLoaded", function(){
  var getScript = function (url, cb) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = cb;
    script.onreadystatechange = cb;
    document.head.appendChild(script);
  }

  getScript('https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.js', function() {
    require.config({
      waitSeconds: 0
    });
    require(
      ['https://static-markup.octaglobal.com/libs/bundle.js'],
      function () {
        if ( ! window.Vue.prototype.$eventBus) {
          window.Vue.prototype.$eventBus = new window.Vue();
        }

        window.Vue.use(window.Vuex);
        if ( window.Vuelidate ) {
          window.Vue.use(window.Vuelidate);
        }

        var store = window.__vueStore = new window.Vuex.Store(window.getStoreParams({
          axiosBaseURL: 'https://www.octafx.com'
        }));

        window.__vueComponentsLoaders.forEach(function (loader) {
          if (loader.asyncData) {

            var loaderAsyncData = {};
            loaderAsyncData[loader.uniqComponentId] = loader.asyncData;

            var componentsData = Object.assign({},
              store.state.componentsData,
              loaderAsyncData
            );

            store.replaceState(Object.assign({},
              store.state,
              { componentsData: componentsData }
            ));
          }

          setTimeout(__vueComponentLoad.bind(window, loader, store), 0);
        })
      }
    )
  })
});

window.__vueComponentsLoaders.push({
  asyncData: null,
  uniqComponentId: 'vue-2793b',
  pageId: 'msLandings.landing.emirateslanding',
  jsUrl: 'https://static-markup.octaglobal.com/common/components-frontsite/aside-right.v1.js',
  locale: 'en',
  i18nMessagesJson: {"en":{"l_emirates_we_provide_worry_free":"We provide worry-free trading. If your account ever goes negative, don't despair! We'll replenish the&#160;account and bring it back to zero.","l_emirates_worthwhile_seasonal":"Worthwhile seasonal giveaways","l_emirates_we_provide_customers":"We want to&#160;provide our customers with outstanding Forex trading experience. That's why we never cease trying to&#160;improve our services and make sure that it\u2019s the&#160;best on&#160;the &#160;market. There is still plenty of room for progress, but we work hard to achieve our goal.","l_emirates_nav_what_is_octa":"What is OctaFX?","l_emirates_nav_advantages":"Advantages","l_emirates_awards_copytrading_platform2020":"BEST COPYTRADING PLATFORM 2020","aside_new_acc_resend_email_tip_wait":"Check again in a few moments, sometimes there's a short delay.","err_password_length_wrong_symbol":"Use only Roman letters, digits, and these characters: ~-+=_^#@$(){}.,:!","l_emirates_swap_free_option":"Swap-free option","l_emirates_we_provide_tools_enhance":"We provide you with the&#160;tools to enhance your abilities and prosper.","aside_new_acc_or_signup_with":"Or sign up with","l_emirates_footer_copyright":"2021 Octa Markets Incorporated","l_emirates_nav_islamic_acc":"Islamic accounts","l_emirates_promotional_deposite":"Promotional deposit bonuses up&#160;to&#160;100%, and an&#160;everyday 50%&#160;bonus","l_emirates_account_types":"Account types","l_emirates_trading_app":"Trading app","l_emirates_footer_return_policy":"Return policy","aside_new_acc_open":"Open new account","l_emirates_we_offer_three_acconts":"We offer three accounts: \n<span class=\"offers__article-platforms\">\nMetaTrader&#160;4, MetaTrader&#160;5, and cTrader.\n<\/span>","l_emirates_open_now":"Open now","l_emirates_footer_aml_policy":"AML Policy","aside_registration_title":"Registration","l_emirates_all_compliant_eliminated":"All non-Shariah compliant fees are eliminated.","aside_new_acc_resend_email_tip_check":"Check your junk or spam email folder.","l_emirates_awards_best_islamic2020":"BEST ISLAMIC FX ACCOUNT 2020","l_emirates_title":"OctaFX overview","l_emirates_our_islamic_accounts_unique":"Our Islamic accounts are a&#160;unique offer designed specifically for Muslim traders.","l_emirates_awards_fx_broker2019":"BEST FX BROKER 2019","aside_new_acc_descr":"By pressing open account, you confirm <br>that you have read and agree with our <a href=\"%url%\">Customer Agreement<\/a>.","l_emirates_utilise_one_variety":"Utilise one of a&#160;variety of methods to deposit and withdraw your profit.","aside_new_acc_resend_email_link":"Haven't received an email from us?","l_emirates_islamic_accounts":"Islamic accounts","aside_new_acc_last_name":"Last name","l_emirates_this_why_regarded":"This is why we\u2019re regarded as Asia\u2019s top broker.","err_password_required":"Please enter password","err_firstname_is_required":"Please enter your first name","l_emirates_award_winning_spreads":"Award-winning spreads","l_emirates_awards_ecn_broker2020":"BEST ECN BROKER 2020","l_emirates_metatrader4_mobile":"MetaTrader&#160;\n<span class=\"offers__platform-name__label\">\n 4\n<\/span>","err_password_length_between":"Make it between 6 and 32 characters long","aside_new_acc_resend_email_tip_change":"Check that your email is correct, or enter a different address:","err_firstname_too_long":"First name is too long. Maximum number of characters is 64.","l_emirates_negative_balance_protection":"Negative balance protection","l_emirates_create_accounts":"Create account","l_emirates_lcrative_contests":"Lucrative contests (16&#160;Cars contest, and Demo contests)","l_emirates_metatrader5":"<span class=\"offers-desktop__item-label\">\nMetaTrader&#160;\n<b>\n 5\n<\/b><\/span> \n- It's a&#160;platform used by advanced users seeking to trade contracts for difference (CFD), stocks, and futures.","err_email_required":"Please enter your email address","l_emirates_by_offering_ndustries":"By offering the&#160;industry's tightest spreads on MT4\/MT5 trading platforms, we are putting you on&#160;the&#160;fast track for success.","aside_sign_in_title":"Log in","l_emirates_educaton":"Education","l_emirates_awards_fx_broker_asia2020":"BEST FOREX BROKER ASIA 2020","err_lastname_is_required":"Please enter your last name","l_emirates_transfer_options":"Transfer options","l_emirates_footer_trading_app":"<div class=\"footer-box__apps-name\">\nTrading app.\n<\/div> <p class=\"footer-box__apps-label\">\nGet it on Google Play\n<\/p>","aside_new_acc_resend_email_btn":"Send again","l_emirates_useful_webinars_and_video":"Useful webinars and<br\/> video tutorials","l_emirates_footer_follow_us":"Follow us","l_emirates_footer_company":"Company","l_emirates_description":"Learn about OctaFX, Islamic accounts, our competitive advantages, and discover whether MT4 or MT5 is better for you, located all on one convenient page.","l_emirates_or_mobile":"or","aside_new_acc_email":"Email","err_email_not_valid":"Please enter a valid email address.","err_lastname_too_long":"Last name is too long. Maximum number of characters is 64.","l_emirates_nav_trading_platform":"Trading Platforms","l_emirates_3_cryptocurrencies":"<div class=\"offers__platform-item__val\">\n3\n<\/div> <p class=\"offers__platform-item__text\">\ncryptocurrencies\n<\/p>","l_emirates_ctrader":"<span class=\"offers-desktop__ctrader-name\"><b>\nc\n<\/b>\nTrader\n<\/span>\n - This platform offers many sophisticated functionalities, but the&#160;programming is different than MetaTrader, which may be&#160;difficult for nuanced traders.","l_emirates_get_started":"Get Started","aside_new_acc_complete_registration":"To complete registration click the link in the email that we sent to %email%","aside_sign_in_btn":"Log in","l_emirates_beneficial_trading_conditions":"Beneficial trading<br\/> conditions","l_emirates_footer_risk_disclousure":"Risk disclosure","l_emirates_28_pairs":"<div class=\"offers__platform-item__val\">\n28\n<\/div> <p class=\"offers__platform-item__text\">\ncurrency pairs\n<\/p>","l_emirates_or_choose_our_mobile":"or choose our","aside_new_acc_or_signin_with":"Or sign in with","l_emirates_2_metals":"<div class=\"offers__platform-item__val\">\n2\n<\/div> <p class=\"offers__platform-item__text\">\nmetals\n<\/p>","aside_new_acc_first_name":"First name","l_emirates_education_trading":"Education in trading","l_emirates_meta5_mobile":"MetaTrader 5","l_emirates_advantageous_status_program":"Advantageous status program<br\/> available to all clients","aside_new_acc_join":"Join more than 3,500,000 traders!","l_emirates_competitive_advantages":"Competitive advantages","l_emirates_4_indices":"<div class=\"offers__platform-item__val\">\n4\n<\/div> <p class=\"offers__platform-item__text\">\nindices\n<\/p>","l_emirates_footer_customer_agreement":"Customer agreement","l_emirates_footer_privacy_policy":"Privacy policy","aside_new_acc_password":"Password","aside_forgot_password":"Forgot password?","aside_password":"Password","l_emirates_nav_education":"Education","aside_new_acc_resend_email_confirmation":"A confirmation email has been resent to %email%","l_emirates_google_get_it_on":"Get it on","l_emirates_your_well_being_top":"Your well-being is our top priority; that is what makes us the \r\n<span class=\"intro__article-label\">\r\n\u00a0people's broker.\r\n<\/span>","l_emirates_accounts_will_never_go_negative":"Your account will never go negative, cause in this case we will bring it back to zero","err_firstname_invalid_chars":"Your first name can only contain Roman letters, hyphen, apostrophe, and spaces.","l_emirates_footer_contact":"Contact us","l_emirates_download_our_award_winning":"Download our award-winning app, where you can fund, manage, and execute trades anywhere, anytime with ease!","l_emirates_see_what_makes_peoples":"See what makes us a \n<span class=\"intro__article-label\">\n&#160;people's broker\n<\/span>","l_emirates_fund_manage_execute_trades":"Fund, manage, and execute trades anywhere, anytime with ease!","aside_email":"Email","l_emirates_awards_mobile_trading_app2019":"BEST MOBILE TRADING APP 2019","l_emirates_by_enabling_option":"By enabling this option with one click, you are eliminating non-Shariah complaint fees.","l_emirates_metatrader4":"<span class=\"offers-desktop__item-label\">\nMetaTrader&#160;\n<b> \n 4\n<\/b><\/span> \n- It\u2019s a&#160;platform that offers built-in tools, simplicity, and flexibility while enabling reduced spreads to generate passive income.","l_emirates_footer_get_the_app":"Get the app","aside_new_acc_open_btn":"Open account","aside_new_acc_check_email":"Check your email","err_lastname_invalid_chars":"Your last name can only contain Roman letters, hyphen, apostrophe, and spaces.","l_emirates_1500_maximum_leverage":"<div class=\"offers__platform-item__val\">\n1:500\n<\/div> <p class=\"offers__platform-item__text\">\nmaximum leverage ratio\n<\/p>","l_emirates_header_open_account":"Open account","l_emirates_header_log_in":"log in","l_emirates_awards":"Awards","l_emirates_ctrader_mobile":"cTrader","l_emirates_footer_copytrading_app":"<div class=\"footer-box__apps-name\">\nCopytrading app.\n<\/div> <p class=\"footer-box__apps-label\">\nGet it on Google Play\n<\/p>","l_emirates_daily_market":"Daily market analysis","l_emirates_profitable_referal":"Profitable referral programs","l_emirates_footer_about":"About us","landing_common_logo_octafx_alt":"landing_common_logo_octafx_alt"}},
  translationsUrl: '//translations.octaglobal.com/api/',
  propsJson: {"loginAction":"https:\/\/my.octafx.com\/auth\/login\/","registrationAction":"https:\/\/my.octafx.com\/user\/create\/","checkEmailAction":"https:\/\/my.octafx.com\/user\/resend-email-verification-code\/","restorePasswordUrl":"https:\/\/my.octafx.com\/password-restore\/","captchaUrl":"https:\/\/my.octafx.com\/captcha\/registration\/","loginCaptchaUrl":"https:\/\/my.octafx.com\/captcha\/login\/","loginCaptchaTransform":"0.8","googleLink":"https:\/\/my.octafx.com\/oauth\/google\/","facebookLink":"https:\/\/my.octafx.com\/oauth\/facebook\/","backPath":"https:\/\/my.octafx.com\/","fromFront":false,"disableFakeFocus":false,"webinarTag":null},
  slotHtml: ""
});

startup_scripts.default({"browserMessagingOptions":{"config":[]},"gtm":{"siteId":"GTM-KXHHP2","dataLayerParameters":[],"dataLayerEvents":[],"gaDomain":"analytics.octaglobal.com","cookieDomain":".octamarkets.net","saveClientIdUrl":"https:\/\/my.octafx.com\/user\/save-client_id\/"},"analyticsMsOptions":{"scriptUrl":"https:\/\/analytics.octaglobal.com\/send-touch.min.js","touchParams":{"siteLanguage":"en"}}});

window.USER_HITS_ENDPOINT = 'https://user-hits.octaglobal.com/save';
window.USER_HITS_PREDEFINED_USER_ID = null;

// send pageview
window.userHitsStorage = window.userHitsStorage || [];
window.userHitsStorage.push({ type: "PageView" })

__export.default({
  wsUrl: 'wss://websocket.octafx.space:443/quotes/mt4',
  isTradingActive: !!1
});

window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","licenseKey":"0bd78bcc4a","applicationID":"233263817","transactionName":"ZFBWYEJTV0BYBRVQW10aYUZZHVBdXQMZF0RbRQ==","queueTime":0,"applicationTime":106,"atts":"SBdVFgpJRE4=","errorBeacon":"bam-cell.nr-data.net","agent":""}

(function(a,b){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date})(window,"ga");ga("create","UA-29447587-1","auto",{page:location.pathname,name:"octa",allowLinker:!0,cookieDomain:"auto",clientId:google_tag_manager["GTM-KXHHP2"].macro(2)});

if("")(function(){var cxApiTag=function(w,d,s,i){var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j["src"]="//www.google-analytics.com/cx/api.js?experiment\x3d"+i;f.parentNode.insertBefore(j,f);return j}(window,document,"script","");ga("octa.require","GTM-PQSFQTX");cxApiTag.onload=function(){var gaExperiments=[];for(experimentName in optimize_experiments){var content_variations=optimize_experiments&&optimize_experiments[experimentName]?optimize_experiments[experimentName]:
  null;var experimentId="";if(typeof cxApi!="undefined"&&cxApi.getChosenVariation&&cxApi.getChosenVariation(experimentId)!=cxApi.NOT_PARTICIPATING&&content_variations&&content_variations.length>0){var variation=cxApi.chooseVariation();var variationToRun=cxApi.getChosenVariation()>=0&&variation>=0?cxApi.getChosenVariation():0;try{content_variations[variationToRun]()}catch(e){console.log("Experiment "+experimentName+" not running")}}}if(gaExperiments.length>0)ga("octa.set","exp",
  gaExperiments.join("!"))}})();

ga("octa.require","octaStreaming",{domain:"analytics-147612.appspot.com"});
(function(){var h=function(f,g){var e=f.get("sendHitTask"),h=function(){var c=this;c.sendAjax=function(a){var d=!1,b;a+="\x26transport\x3dxhr";try{window.XMLHttpRequest&&"withCredentials"in(b=new XMLHttpRequest)&&(b.open("GET",c.trackerUrl(),!0),b.onprogress=function(){},b.ontimeout=function(){},b.onerror=function(){},b.onload=function(){},b.setRequestHeader("Content-Type","text/plain"),b.send(a),d=!0)}catch(k){}return d};c.sendXDomain=function(a){var d=!1,b;a+="\x26transport\x3dxdomain";try{window.XDomainRequest&&
(b=new XDomainRequest,b.open("GET",c.trackerUrl(!1,location.protocol.slice(0,-1))),b.onprogress=function(){},b.ontimeout=function(){},b.onerror=function(){},b.onload=function(){},setTimeout(function(){b.send(a)},0),d=!0)}catch(k){}return d};c.getUrlParameter=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=new RegExp("[\\?\x26]"+a+"\x3d([^\x26#]*)");a=a.exec(location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))};c.sendImage=function(a){var d=!1;a+="\x26transport\x3dimg";
  try{var b=document.createElement("img");b.onload=function(){};b.src=c.trackerUrl(!0)+"?"+a;d=!0}catch(k){}return d};c.trackerUrl=function(a,c){c||(c="https");var b=c+"://"+e.domain+"/collect";a||(b+="?tid\x3d"+encodeURIComponent(f.get("trackingId")));return b};var e={domain:g&&g.domain?g.domain:"google-analytics.bi.owox.com",debug:!1};return{send:function(a){var d=!1,b=c.getUrlParameter("gclid");b&&(a=a+"\x26gclid\x3d"+b);(b=c.getUrlParameter("afid"))&&(a=a+"\x26afid\x3d"+b);return d||2036>=a.length&&
  c.sendImage(a)||c.sendAjax(a)||c.sendXDomain(a)||c.sendImage(a)}}}();f.set("sendHitTask",function(c){c.get("buildHitTask")(c);e(c);h.send(c.get("hitPayload"))})},e=window[window.GoogleAnalyticsObject||"ga"];e&&e("provide","octaStreaming",h)})();

twttr.conversion.trackPid("l67s1",{tw_sale_amount:0,tw_order_quantity:0});

!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","323902894668932");fbq("track","PageView");

var url=window.location.href,keyToFind1="utm_source",keyToFind2="utm_campaign",keyToFind3="utm_medium";document.cookie="entranceLink\x3d"+url+";domain\x3d."+location.host.replace("www.","")+";path\x3d/;";document.cookie="externalReferrer\x3d"+document.referrer+";domain\x3d."+location.host.replace("www.","")+";path\x3d/;";
if(-1<url.indexOf(keyToFind1+"\x3d")){var valueFound=url.substr(url.indexOf(keyToFind1+"\x3d")+keyToFind1.length+1).split("\x26")[0];document.cookie=keyToFind1+"\x3d"+valueFound+";domain\x3d."+location.host.replace("www.","")+";path\x3d/;"}-1<url.indexOf(keyToFind2+"\x3d")&&(valueFound=url.substr(url.indexOf(keyToFind2+"\x3d")+keyToFind2.length+1).split("\x26")[0],document.cookie=keyToFind2+"\x3d"+valueFound+";domain\x3d."+location.host.replace("www.","")+";path\x3d/;");
-1<url.indexOf(keyToFind3+"\x3d")&&(valueFound=url.substr(url.indexOf(keyToFind3+"\x3d")+keyToFind3.length+1).split("\x26")[0],document.cookie=keyToFind3+"\x3d"+valueFound+";domain\x3d."+location.host.replace("www.","")+";path\x3d/;");

(function(a,c,e,k,b){a[b]=a[b]||[];a[b].push({projectId:"10000",properties:{pixelId:"10145857"}});var d=c.createElement(e);d.src=k;d.async=!0;d.onload=d.onreadystatechange=function(){var f=this.readyState,l=a[b];if(!f||"complete"==f||"loaded"==f)try{var g=YAHOO.ywa.I13N.fireBeacon;a[b]=[];a[b].push=function(h){g([h])};g(l)}catch(h){}};c=c.getElementsByTagName(e)[0];e=c.parentNode;e.insertBefore(d,c)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");