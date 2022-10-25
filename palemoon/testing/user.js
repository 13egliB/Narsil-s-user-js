// **********************************************************************************
// user.js | Pale Moon
// https://git.nixnet.services/Narsil/palemoon_user.js
// **********************************************************************************
//
// Author    : Narsil    : https://git.nixnet.services/Narsil
//
// Based on  : arkenfox  : https://github.com/arkenfox/user.js
//
// License   : https://git.nixnet.services/Narsil/palemoon_user.js/raw/branch/master/LICENSE
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// STARTUP
// >>>>>>>>>>>>>>>>>>>>>
// Disable about:config warning
user_pref("general.warnOnAboutConfig", false);
// -------------------------------------
// Disable about:networking warning
user_pref("network.warnOnAboutNetworking", false);
// -------------------------------------
// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);
// -------------------------------------
// Set START page
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
user_pref("browser.startup.page", 0);
// -------------------------------------
// Set HOME+NEWWINDOW page
user_pref("browser.startup.homepage", "about:blank");
// -------------------------------------
// Set NEWTAB page
// true=Activity Stream (default), false=blank page
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
// -------------------------------------
// Start Pale Moon in PB (Private Browsing) mode
// user_pref("browser.privatebrowsing.autostart", true);
// -------------------------------------
// Disable "slow startup" options
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
// -------------------------------------
// Disable "tearing off" of tabs
user_pref("browser.tabs.allowTabDetach", true);
// -------------------------------------
// Disable using the "Back" button to go back to the QuickDial page
user_pref("browser.newtabpage.add_to_session_history", false);
// -------------------------------------
// Hide tabs (only one in use)
// user_pref("browser.tabs.autoHide", true);
// -------------------------------------
// Tabs on top
// user_pref(“browser.tabs.onTop", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// GEOLOCATION
// >>>>>>>>>>>>>>>>>>>>>
// Disable Location-Aware Browsing
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.logging.enabled", false); // [HIDDEN PREF]
user_pref("browser.geolocation.warning.infoURL", "");
// -------------------------------------
// Set search region
user_pref("browser.search.region", "US"); // [HIDDEN PREF]
user_pref("browser.search.countryCode", "US"); // [HIDDEN PREF]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// LANGUAGE / LOCALE
// >>>>>>>>>>>>>>>>>>>>>
// Set preferred language for displaying web pages
user_pref("intl.accept_languages", "en-US, en");
// -------------------------------------
// Disable using OS locale, force APP locale
user_pref("intl.locale.matchOS", false);
// -------------------------------------
// Enforce US English locale regardless of the system locale
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
// -------------------------------------
// Set APP locale
user_pref("general.useragent.locale", "en-US");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUIET PALE MOON
// >>>>>>>>>>>>>>>>>>>>>
// Disable auto-CHECKING for extension and theme updates
user_pref("extensions.update.enabled", false);
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.itemURL", "");
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.url", "");
// -------------------------------------
// Disable auto-update checks
user_pref("app.update.enabled", false);
user_pref("app.update.url", "");
user_pref("app.update.url.override", ""); // [HIDDEN PREF]
// -------------------------------------
// Disable auto-INSTALLING updates [NON-WINDOWS]
user_pref("app.update.auto", false);
// -------------------------------------
// Disable background update staging
user_pref("app.update.staging.enabled", false);
// -------------------------------------
// Disable update available, downloaded, error and success information
user_pref("app.update.silent", false);
// -------------------------------------
// Disable auto-INSTALLING extension and theme updates
user_pref("extensions.update.autoUpdateDefault", false);
// -------------------------------------
// Disable extension metadata
user_pref("extensions.getAddons.cache.enabled", false);
// ------------------------------------
// Featured extensions for displaying in Get Add-ons panel
user_pref("extensions.webservice.discoverURL", "");
// -------------------------------------
// Disable search engine updates (e.g. OpenSearch)
user_pref("browser.search.update", false);
// -------------------------------------
// Disable sending Flash crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// -------------------------------------
// Disable sending the URL of the website where a plugin crashed
user_pref("dom.ipc.plugins.reportCrashURL", false);
// -------------------------------------
// Disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
// -------------------------------------
// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
// -------------------------------------
// Disable Pale Moon permission to silently opt you into tests
user_pref("network.allow-experiments", false);
// -------------------------------------
// Disable Captive Portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
// -------------------------------------
// Block unwanted connections
user_pref("app.support.baseURL", "");
user_pref("browser.feedback.url", "");
// -------------------------------------
// Disable auto updating of personas (themes)
user_pref("lightweightThemes.update.enabled", false);
// -------------------------------------
// Disable Tracking Protection in all windows
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.trackingprotection.enabled", false);
// -------------------------------------
// Disable detailed error reporting of media errors for debugging purposes
user_pref("media.sourceErrorDetails.enabled", false);
// -------------------------------------
// Disable handler urls
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on]
// >>>>>>>>>>>>>>>>>>>>>
// Disable link prefetching
user_pref("network.prefetch-next", false);
// -------------------------------------
// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [HIDDEN PREF]
// -------------------------------------
// Disable predictor / prefetching
user_pref("network.predictor.enabled", false);
// user_pref("network.predictor.enable-prefetch", false);
// -------------------------------------
// Disable link-mouseover opening connection to linked server
user_pref("network.http.speculative-parallel-limit", 0);
// -------------------------------------
// Enforce no "Hyperlink Auditing" (click ng)
// user_pref("browser.send_pings", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HTTP* / TCP/IP / DNS / PROXY / SOCKS etc
// >>>>>>>>>>>>>>>>>>>>>
// Disable IPv6
user_pref("network.dns.disableIPv6", true);
// -------------------------------------
// Disable HTTP2
// user_pref("network.http.spdy.enabled", false);
// user_pref("network.http.spdy.enabled.deps", false);
// user_pref("network.http.spdy.enabled.http2", false);
// -------------------------------------
// Enforce the proxy server to do any DNS lookups when using SOCKS
user_pref("network.proxy.socks_remote_dns", true);
// -------------------------------------
// Disable SSL False Start for HTTPS/WebSockets/SPDY connections
user_pref("security.ssl.enable_false_start", false);
// -------------------------------------
// Disable GIO as a potential proxy bypass vector
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
// >>>>>>>>>>>>>>>>>>>>>
// Disable location bar using search
// user_pref("keyword.enabled", false);
// -------------------------------------
// Disable location bar domain guessing
user_pref("browser.fixup.alternate.enabled", false);
// -------------------------------------
// Display all parts of the url in the location bar
user_pref("browser.urlbar.trimURLs", false);
// -------------------------------------
// Disable displaying javascript in history URLs
user_pref("browser.urlbar.filter.javascript", true);
// -------------------------------------
// Disable coloring of visited links - CSS history leak
user_pref("layout.css.visited_links_enabled", false);
// -------------------------------------
// Disable live search suggestions
user_pref("browser.search.suggest.enabled", false);
// -------------------------------------
// Disable location bar suggestion types
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
// -------------------------------------
// Disable location bar dropdown
// user_pref("browser.urlbar.maxRichResults", 0);
// -------------------------------------
// Disable location bar autofill
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.autocomplete.enabled", false);
// -------------------------------------
// Disable search and form history
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.saveHttpsForms", false);
// -------------------------------------
// Disable browsing and download history
user_pref("places.history.enabled", false);
// -------------------------------------
// Enable immediately showing the edit dialog for new bookmarks
// user_pref("browser.bookmarks.editDialog.showForNewBookmarks", true);
// -------------------------------------
// Allow copying the unescaped URL from the address bar
// user_pref("browser.urlbar.decodeURLsOnCopy", true);
// -------------------------------------
// Control the sizes of default smart bookmarks categories
// user_pref("browser.places.smartBookmarks.max", 1); // [HIDDEN PREF]
// -------------------------------------
// Define whether an RSS indicator is displayed in the address bar
// user_pref("browser.urlbar.rss", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PASSWORDS
// >>>>>>>>>>>>>>>>>>>>>
// Disable saving passwords and password alerts.
user_pref("signon.rememberSignons", false);
// -------------------------------------
// Use a primary password
user_pref("security.ask_for_password", 2);
// -------------------------------------
// Set how often in minutes Pale Moon should ask for the primary password
user_pref("security.password_lifetime", 5);
// -------------------------------------
// Disable auto-filling username & password form fields
user_pref("signon.autofillForms", false);
// -------------------------------------
// Disable formless login capture for Password Manager
user_pref("signon.formlessCapture.enabled", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);
// -------------------------------------
// Disable websites' autocomplete="off"
user_pref("signon.storeWhenAutocompleteOff", true);
// -------------------------------------
// Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources
user_pref("network.auth.subresource-http-auth-allow", 1);
// -------------------------------------
// Ask for the Master Password the moment the application starts
user_pref("signon.startup.prompt", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CACHE
// >>>>>>>>>>>>>>>>>>>>>
// Disable disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
// -------------------------------------
// Disable offline cache
user_pref("browser.cache.offline.enable", false);
// -------------------------------------
// Disable memory cache
// user_pref("browser.cache.memory.enable", false);
// -------------------------------------
// Control from which source restored tabs pull their page content
// 0 = load restored tab data from cache (current behavior, default)
// 1 = refresh restored tab data from the network
// 2 = refresh stored tab data from the network and bypass any cached data.
user_pref("browser.sessionstore.cache_behavior", 0);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SESSIONS & SESSION RESTORE
// >>>>>>>>>>>>>>>>>>>>>
// Exclude "Undo Closed Tabs" in Session Restore
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.max_windows_undo", 0);
// -------------------------------------
// Disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 2);
// -------------------------------------
// Disable deferred level of storing extra session data 0=all 1=http-only 2=none
user_pref("browser.sessionstore.privacy_level_deferred", 2);
// -------------------------------------
// Disable resuming session from crash
// user_pref("browser.sessionstore.resume_from_crash", false);
// -------------------------------------
// Set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 30000);
// -------------------------------------
// Hide pinned tabs in CtrlTab/AllTab panes
// user_pref("browser.ctrlTab.hidePinnedTabs", true);
// user_pref("browser.allTabs.hidePinnedTabs", true);
// -------------------------------------
// Change the browser's behavior when restoring tabs from previous sessions
user_pref("browser.sessionstore.cache_behavior", 0);
// -------------------------------------
// Control of the number of concurrent tabs to be restored from a session (accepted values 1-10)
// user_pref("browser.sessionstore.max_concurrent_tabs", 1);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// FAVICONS
// >>>>>>>>>>>>>>>>>>>>>
// Disable favicons in shortcuts
user_pref("browser.shell.shortcutFavicons", false);
// -------------------------------------
// Disable favicons in history and bookmarks
user_pref("browser.chrome.site_icons", false);
user_pref("browser.chrome.favicons", false);
// -------------------------------------
// Disable favicons in web notifications
user_pref("alerts.showFavicons", false);
// -------------------------------------
// Disable processing favicons
user_pref("browser.chrome.favicons.process", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SSL (Secure Sockets Layer) / TLS (Transport Layer Security)
// >>>>>>>>>>>>>>>>>>>>>
// Require safe negotiation
user_pref("security.ssl.require_safe_negotiation", true);
// -------------------------------------
// Control TLS versions with min and max
// user_pref("security.tls.version.min", 3);
// user_pref("security.tls.version.max", 4);
// -------------------------------------
// Disable SSL session tracking
user_pref("security.ssl.disable_session_identifiers", true); // [HIDDEN PREF]
// -------------------------------------
// Block rc4 fallback
user_pref("security.tls.unrestricted_rc4_fallback", false);
// -------------------------------------
// Disable TLS1.3 0-RTT (round-trip time)
user_pref("security.tls.enable_0rtt_data", false);
// -------------------------------------
// Disable TLS 1.3 draft support
// user_pref("security.tls.version.max", 4);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// OCSP (Online Certificate Status Protocol)
// >>>>>>>>>>>>>>>>>>>>>
// Disable OCSP Stapling
user_pref("security.ssl.enable_ocsp_stapling", false);
// -------------------------------------
// Disable using OCSP fetching (to confirm current validity of certificates)
user_pref("security.OCSP.enabled", 0);
user_pref("services.sync.prefs.sync.security.OCSP.enabled", false);
user_pref("security.OCSP.GET.enabled", false);
// -------------------------------------
// Set OCSP fetch failures (non-stapled) to hard-fail
user_pref("security.OCSP.require", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CERTS / HPKP (HTTP Public Key Pinning)
// >>>>>>>>>>>>>>>>>>>>>
// Disable or limit SHA-1 certificates
user_pref("security.pki.sha1_enforcement_level", 0);
// -------------------------------------
// Disable Windows 8.1's Microsoft Family Safety cert
user_pref("security.family_safety.mode", 0);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MIXED CONTENT
// >>>>>>>>>>>>>>>>>>>>>
// Enforce no insecure active content on https pages
user_pref("security.mixed_content.block_active_content", true);
// -------------------------------------
// Enable Mixed-Content-Blocker to use the HSTS cache but disable the HSTS Priming requests
user_pref("security.mixed_content.use_hsts", true);
user_pref("security.mixed_content.send_hsts_priming", false);
// -------------------------------------
// Disable insecure passive content (such as images) on https pages
user_pref("security.mixed_content.block_display_content", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CIPHERS [WARNING: do not meddle with your cipher suite]
// >>>>>>>>>>>>>>>>>>>>>
// Disable 3DES (effective key size < 128 and no PFS)
// user_pref("security.ssl3.rsa_des_ede3_sha", false);
// -------------------------------------
// Disable the remaining non-modern cipher suites
// user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
// user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // no PFS
// user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // no PFS
// user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
// user_pref("security.ssl3.rsa_aes_256_sha", false); // no PFS
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// UI (User Interface)
// >>>>>>>>>>>>>>>>>>>>>
// Display warning on the padlock for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// -------------------------------------
// Control "Add Security Exception" dialog on SSL warnings
user_pref("browser.ssl_override_behavior", 1);
// -------------------------------------
// Display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// FONTS
// >>>>>>>>>>>>>>>>>>>>>
// Disable websites choosing fonts
user_pref("browser.display.use_document_fonts", 0);
// -------------------------------------
// Disable icon fonts (glyphs) and local fallback rendering
// user_pref("gfx.downloadable_fonts.enabled", false);
// user_pref("gfx.downloadable_fonts.fallback_delay", -1);
// -------------------------------------
// Disable WOFF2 (Web Open Font Format)
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
// -------------------------------------
// Disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// -------------------------------------
// Disable graphite
user_pref("gfx.font_rendering.graphite.enabled", false);
// -------------------------------------
// Disabling fonts can uglify the web a fair bit
user_pref("layout.css.font-loading-api.enabled", false);
// -------------------------------------
// Disable special underline handling for a few fonts which you will probably never use.
user_pref("font.blacklist.underline_offset", "");
// -------------------------------------
// Limit system font exposure to a whitelist
// user_pref("font.system.whitelist", ""); // [HIDDEN PREF]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HEADERS / REFERERS
// >>>>>>>>>>>>>>>>>>>>>
// Control when images/links send a referer
// user_pref("network.http.sendRefererHeader", 2);
// -------------------------------------
// Control the amount of information to send
// user_pref("network.http.referer.trimmingPolicy", 0);
// -------------------------------------
// Control when to send a referer
user_pref("network.http.referer.XOriginPolicy", 2);
// -------------------------------------
// Control the amount of information to send
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// -------------------------------------
// Disable spoofing a referer
// user_pref("network.http.referer.spoofSource", false);
// -------------------------------------
// Disable Global Privacy Control feature
user_pref("privacy.GPCheader.enabled", false);
// -------------------------------------
// Block authentication-locked cross-origin image subresources by default to prevent spurious auth prompts
// user_pref("network.auth.subresource-http-img-XO-auth", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PLUGINS
// >>>>>>>>>>>>>>>>>>>>>
// Set default plugin state (i.e. new plugins on discovery) to never activate
user_pref("plugin.default.state", 0);
// -------------------------------------
// Enable click to play and set to 0 minutes
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
// -------------------------------------
// Disable plugins using external/untrusted scripts with XPCOM or XPConnect
user_pref("security.xpconnect.plugin.unrestricted", false);
// -------------------------------------
// Disable all GMP (Gecko Media Plugins)
user_pref("media.gmp-manager.url", ""); // [HIDDEN PREF]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MEDIA / CAMERA / MIC
// >>>>>>>>>>>>>>>>>>>>>
// Disable WebRTC (Web Real-Time Communication)
user_pref("media.peerconnection.enabled", false);
// -------------------------------------
// Disable camera stuff
user_pref("camera.control.face_detection.enabled", false);
// -------------------------------------
// Disable canvas capture stream
user_pref("canvas.capturestream.enabled", false);
// -------------------------------------
// Disable camera image capture
user_pref("dom.imagecapture.enabled", false);
// -------------------------------------
// Disable auto-play of HTML5 media
user_pref("media.autoplay.enabled", false);
// -------------------------------------
// Disable audio auto-play in non-active tabs
user_pref("media.block-autoplay-until-in-foreground", true);
// -------------------------------------
// Disable offscreen canvas
user_pref("gfx.offscreencanvas.enabled", false);
// -------------------------------------
// Disable two more webgl preferences
user_pref("webgl.dxgl.enabled", false); // [WINDOWS]
// -------------------------------------
// Disable WebGL (Web Graphics Library)
user_pref("webgl.disabled", true);
user_pref("webgl.enable-webgl2", false);
// -------------------------------------
// Limit WebGL
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// -------------------------------------
// Disable screensharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
// -------------------------------------
// Control if sound is playing the tab
// user_pref("browser.tabs.showAudioPlayingIcon", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// WINDOW MEDDLING & LEAKS / POPUPS
// >>>>>>>>>>>>>>>>>>>>>
// Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);
// -------------------------------------
// Disable [new window] scripts hiding or disabling the following
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
// -------------------------------------
// Disable [popup window] scripts hiding or disabling the following
user_pref("dom.disable_window_flip", true); // window z-order
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.allow_scripts_to_close_windows", false);
// -------------------------------------
// Open links targeting new windows in a new tab instead
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
// -------------------------------------
// Disable Fullscreen API (requires user interaction) to prevent screen-resolution leaks
// user_pref("full-screen-api.enabled", false);
// -------------------------------------
// Block popup windows
user_pref("dom.disable_open_during_load", true);
// -------------------------------------
// Limit events that can cause a popup
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
// -------------------------------------
// Control whether content can be scrolled if a context menu is open
user_pref("ui.menu.allow_content_scroll", true);
// -------------------------------------
// Define whether the restored browser session window is displayed at the same location when it was terminated in the last session
user_pref("browser.sessionstore.exactPos", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// WEB WORKERS
// >>>>>>>>>>>>>>>>>>>>>
// Disable service workers
user_pref("dom.serviceWorkers.enabled", false);
// -------------------------------------
// Disable Web Notifications
// user_pref("dom.webnotifications.enabled", false);
// user_pref("dom.webnotifications.serviceworker.enabled", false);
// -------------------------------------
// Disable Push Notifications
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
// -------------------------------------
// Disable AbortController
user_pref("dom.abortController.enabled", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DOM (DOCUMENT OBJECT MODEL) & JAVASCRIPT
// >>>>>>>>>>>>>>>>>>>>>
// Disable website control over browser right-click context menu
// user_pref("dom.event.contextmenu.enabled", false);
// -------------------------------------
// Disable website access to clipboard events/content
user_pref("dom.event.clipboardevents.enabled", false);
// -------------------------------------
// Set max popups from a single non-click event - default is 20!
user_pref("dom.popup_maximum", 3);
// -------------------------------------
// Disable idle observation
user_pref("dom.idle-observers-api.enabled", false);
// -------------------------------------
// Disable Intersection Observer API
user_pref("dom.intersectionObserver.enabled", false);
// -------------------------------------
// Enforce websites to ask to store data for offline use
user_pref("offline-apps.allow_by_default", false);
// -------------------------------------
// Display a notification when websites ask to store data for offline use
user_pref("browser.offline-apps.notify", true);
// -------------------------------------
// Disable asm.js
user_pref("javascript.options.asmjs", false);
// -------------------------------------
// Disable Ion and baseline JIT to harden against JS exploits
// user_pref("javascript.options.ion", false);
// user_pref("javascript.options.baselinejit", false);
// user_pref("javascript.options.native_regexp", false);
// -------------------------------------
// Disable WebAssembly
user_pref("javascript.options.wasm", false);
// -------------------------------------
// Disable Google WebComponents (CustomElements and Shadow DOM)
// user_pref("dom.webcomponents.enabled", false);
// -------------------------------------
// Enable/Disable the page visibility Web API
// user_pref("dom.visibilityAPI.enabled", true);
// -------------------------------------
// Disable the way URL hashes are handled
user_pref("dom.url.getters_decode_hash", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HARDWARE FINGERPRINTING
// >>>>>>>>>>>>>>>>>>>>>
// Disable Web Audio API
user_pref("dom.webaudio.enabled", false);
// -------------------------------------
// Disable keyboard fingerprinting
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.keyboardevent.code.enabled", false);
// -------------------------------------
// Randomize Canvas
user_pref("canvas.poisondata", true);
// -------------------------------------
// Disable Presentation API
// user_pref("dom.presentation.enabled", false);
// user_pref("dom.presentation.controller.enabled", false);
// user_pref("dom.presentation.discoverable", false);
// user_pref("dom.presentation.discovery.enabled", false);
// user_pref("dom.presentation.receiver.enabled", false);
// user_pref("dom.presentation.session_transport.data_channel.enable", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MISCELLANEOUS
// >>>>>>>>>>>>>>>>>>>>>
// Prevent accessibility services from accessing your browser [RESTART]
user_pref("accessibility.force_disabled", 1);
// -------------------------------------
// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
// -------------------------------------
// Remove temp files opened with an external application
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// -------------------------------------
// Disable page thumbnail collection
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
// -------------------------------------
// Disable various developer tools in browser context
user_pref("devtools.chrome.enabled", false);
// -------------------------------------
// Disable MathML (Mathematical Markup Language)
user_pref("mathml.disabled", true);
// -------------------------------------
// Disable middle mouse click opening links from clipboard
user_pref("middlemouse.contentLoadURL", false);
// -------------------------------------
// Remove special permissions for certain domains
user_pref("permissions.manager.defaultsUrl", "");
// -------------------------------------
// Enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);
// -------------------------------------
// Enforce no system colors; they can be fingerprinted
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false]
// -------------------------------------
// Disable the 4th and 5th mouse buttons (Windows)
// user_pref("mouse.button4.enabled", false);
// user_pref("mouse.button4.enabled", false);
// -------------------------------------
// Use the mousewheel for horizontal scrolling (mouse action value 4)
// (e.g. setting mousewheel.with_shift.action to 4 makes Shift+wheel scroll horizontally)
// user_pref("mousewheel.with_shift.action", 2);
// -------------------------------------
// Disable tab switching when a modal dialog is presented in a page.
// user_pref("prompts.tab_modal.focusSwitch", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DOWNLOADS
// >>>>>>>>>>>>>>>>>>>>>
// Discourage downloading to desktop
// user_pref("browser.download.folderList", 2);
// -------------------------------------
// Enforce user interaction for security by always asking where to download
user_pref("browser.download.useDownloadDir", false);
// -------------------------------------
// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);
// -------------------------------------
// Disable hiding mime types (Options>General>Applications) not associated with a plugin
user_pref("browser.download.hide_plugins_without_extensions", false);
// -------------------------------------
// Disable "open with" in download dialog
// user_pref("browser.download.forbid_open_with", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SECURITY
// >>>>>>>>>>>>>>>>>>>>>
// Enforce CSP (Content Security Policy)
user_pref("security.csp.enable", true);
// -------------------------------------
// Disable CSP reports
user_pref("security.csp.speccompliant", false);
user_pref("security.signed_content.CSP.default", "");
// -------------------------------------
// Disable JAR from opening Unsafe File Types
user_pref("network.jar.open-unsafe-types", false);
// -------------------------------------
// Disable WebIDE to prevent remote debugging and extension downloads
user_pref("devtools.debugger.remote-enabled", false);
// -------------------------------------
// Disable SimpleServiceDiscovery
user_pref("gfx.layerscope.enabled", false);
// -------------------------------------
// Enable Strict File Origin Policy on local files
user_pref("security.fileuri.strict_origin_policy", true);
// -------------------------------------
// Enable Subresource Integrity
user_pref("security.sri.enable", true);
// -------------------------------------
// Disable DNS requests for hostnames with a .onion TLD
user_pref("network.dns.blockDotOnion", true);
// -------------------------------------
// Disable remote JAR files being opened, regardless of content type
user_pref("network.jar.block-remote-files", true);
// -------------------------------------
// Disable DeviceStorage API
user_pref("device.storage.enabled", false);
// -------------------------------------
// Disable HTTP Alternative Services
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
// -------------------------------------
// Remove paths when sending URLs to PAC scripts
user_pref("network.proxy.autoconfig_url.include_path", false);
// -------------------------------------
// Disable "image/" mime types bypassing CSP
user_pref("security.block_script_with_wrong_mime", true);
// -------------------------------------
// Block top level window data: URIs
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);
// -------------------------------------
// Enforce a security delay on some confirmation dialogs such as install, open/save
user_pref("security.dialog_enable_delay", 700);
// -------------------------------------
// Allow users to relax the behavior of file: URIs to treat each URI as a unique origin
// user_pref("security.fileuri.unique_origin", false);
// -------------------------------------
// Exit to a no-content page after encountering a network or security error
user_pref("browser.escape_to_blank", true);
// -------------------------------------
// Display punycode domain for IDN websites to combat phishing
// 0 = Display IDN name in identity panel (previous behavior)
// 1 = Display punycode name for DV SSL domains (default)
// 2 = Also display punycode for HTTP sites if IDN name used
user_pref("browser.identity.display_punycode", 1);
// -------------------------------------
// Enable the use of HSTS (HTTP Strict Transport Security)
user_pref("network.stricttransportsecurity.enabled", true);
// -------------------------------------
// Define whether a padlock icon is shown on secure sites
user_pref("browser.padlock.shown", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PERSISTENT STORAGE
// >>>>>>>>>>>>>>>>>>>>>
// Clear localStorage and UUID when an extension is uninstalled
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);
// -------------------------------------
// Disable HTTP sites setting cookies with the "secure" directive
user_pref("network.cookie.leave-secure-alone", true);
// -------------------------------------
// Disable 3rd-party cookies and site-data
user_pref("network.cookie.cookieBehavior", 1);
// -------------------------------------
// Set third-party cookies (i.e ALL) (if enabled) to session-only
user_pref("network.cookie.thirdparty.sessionOnly", true);
// -------------------------------------
// Delete cookies and site data on close
user_pref("network.cookie.lifetimePolicy", 2);
// -------------------------------------
// Disable DOM (Document Object Model) Storage
// user_pref("dom.storage.enabled", false);
// -------------------------------------
// Disable service worker cache and cache storage
// user_pref("dom.caches.enabled", false);
// -------------------------------------
// Disable Storage API
// user_pref("dom.storageManager.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SHUTDOWN
// >>>>>>>>>>>>>>>>>>>>>
// Enable Pale Moon to clear items on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// -------------------------------------
// Set what items to clear on shutdown
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.connectivityData", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.passwords", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
// -------------------------------------
// Reset default items to clear with Ctrl-Shift-Del
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.connectivityData", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", true);
// -------------------------------------
// Reset default 'Time range to clear' for 'Clear Recent History'
user_pref("privacy.sanitize.timeSpan", 0);
// -------------------------------------
// Disable "Confirm you want to leave" dialog on page close
user_pref("dom.disable_beforeunload", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// RFP ALTERNATIVES
// >>>>>>>>>>>>>>>>>>>>>
// Spoof number of CPU cores
user_pref("dom.maxHardwareConcurrency", 2);
// -------------------------------------
// Disable resource/navigation timing
user_pref("dom.enable_resource_timing", false);
// -------------------------------------
// Disable timing attacks
// user_pref("dom.enable_performance", false);
// -------------------------------------
// Disable device sensor API
user_pref("device.sensors.enabled", false);
// -------------------------------------
// Disable site specific zoom
user_pref("browser.zoom.siteSpecific", false);
// -------------------------------------
// Disable giving away network info
user_pref("dom.netinfo.enabled", false);
// -------------------------------------
// Disable the SpeechSynthesis (Text-to-Speech) part of the Web Speech API
user_pref("media.webspeech.synth.enabled", false);
// -------------------------------------
// Disable video statistics - JS performance fingerprinting
user_pref("media.video_stats.enabled", false);
// -------------------------------------
// Disable touch events
// user_pref("dom.w3c_touch_events.enabled", 0);
// -------------------------------------
// Disable MediaDevices change detection
user_pref("media.ondevicechange.enabled", false);
// -------------------------------------
// Disable WebGL debug info being available to websites
user_pref("webgl.enable-debug-renderer-info", false);
// -------------------------------------
// Disable PointerEvents
user_pref("dom.w3c_pointer_events.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// RFP ALTERNATIVES (NAVIGATOR / USER AGENT SPOOFING)
// >>>>>>>>>>>>>>>>>>>>>
// Navigator DOM object overrides
user_pref("general.buildID.override", ""); // (HIDDEN PREF)
user_pref("browser.startup.homepage_override.buildID", ""); // (HIDDEN PREF)
user_pref("network.http.useragent.global_override", ""); // (HIDDEN PREF)
user_pref("general.appname.override", ""); // (HIDDEN PREF)
user_pref("general.appversion.override", ""); // (HIDDEN PREF)
user_pref("general.platform.override", ""); // (HIDDEN PREF)
user_pref("general.oscpu.override", ""); // (HIDDEN PREF)
user_pref("general.useragent.updates.url", "");
// -------------------------------------
// Site Specific User Agent Overrides
user_pref("general.useragent.override.1chan.net", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.4chan.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.alcatelfirmware.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.altibox.dk", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.altibox.no", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.aol.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.app.codility.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.arnewsline.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.artixlinux.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.axios.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.bell-labs.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.binarytides.com", "Mozilla/5.0 (Windows NT 10.0; rv:68.0) Gecko/20100101 Firefox/68.0");
user_pref("general.useragent.override.bing.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.borgbackup.readthedocs.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.budsgunshop.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.calendar.yahoo.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.chase.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.citi.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.crates.io", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.dailymotion.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.deviantart.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.deviantart.net", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.dropbox.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.e621.net", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.facebook.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.fafsa.ed.gov", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.fafsa.ed.gov", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.fbcdn.net", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.firefox.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.forum.palemoon.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.forums.hak5.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.gaming.youtube.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.getvoip.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.ghostbymcafee.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.gitlab.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.google.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.googlevideos.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.gstatic.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.hcaptcha.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.hitbox.tv", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.humblebundle.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.infowars.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.installgentoo.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.jitsi.free.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.live.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.login.linode.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.macrumors.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.meet.jit.si", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.meet.jit.si", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.msafes.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.msn.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.netflix.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.netflximg.net", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.outlook.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.override.arxiv.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.phoronix.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.phpbuilder.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.players.brightcove.net", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.privat24.ua", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.readthedocs.io", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.rtl-sdr.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.signin.ebay.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.soundcloud.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.stackexchange.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.stackoverflow.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.store.ui.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.take.indeedassessments.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.take.indeedassessments.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.tools.ietf.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.w3resource.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.web.archive.org", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.web.de", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.web.whatsapp.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.www.amazon.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.www.ebay.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.www.isa-arbor.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.www.samsclub.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.www.toast.net", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.yahoo.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.youtube.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
user_pref("general.useragent.override.yuku.com", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0");
// -------------------------------------
// Set a preferred language for spellchecking, overrides document/element languages
user_pref("spellchecker.dictionary.override", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PERSONAL
// >>>>>>>>>>>>>>>>>>>>>
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_override_url", "");
user_pref("services.sync.prefs.sync.browser.startup.homepage", "about:blank");
// -------------------------------------
// Enable ctrl-tab previews
user_pref("browser.ctrlTab.previews", true);
// -------------------------------------
// Control urlbar click behaviour (with defaults)
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
// -------------------------------------
// Control tab behaviours (with defaults)
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
// -------------------------------------
// Switch to the parent tab (if it has one) on close
user_pref("browser.tabs.selectOwnerOnClose", true);
// -------------------------------------
// Stay on the parent tab when opening links in a new tab
user_pref("browser.tabs.loadInBackground", true);
// -------------------------------------
// Set behavior of pages normally meant to open in a new window
user_pref("browser.tabs.loadDivertedInBackground", false);
// -------------------------------------
// Disable new search panel UI
// user_pref("browser.search.showOneOffButtons", false);
// -------------------------------------
// Enable/disable MSE (Media Source Extensions)
// user_pref("media.mediasource.enabled", false);
// user_pref("media.mediasource.mp4.enabled", false);
// user_pref("media.mediasource.webm.audio.enabled", false);
// user_pref("media.mediasource.webm.enabled", false);
// -------------------------------------
// Enable/disable various media types
// user_pref("media.mp4.enabled", false);
// user_pref("media.flac.enabled", false);
// user_pref("media.ogg.enabled", false);
// user_pref("media.ogg.flac.enabled", false);
// user_pref("media.opus.enabled", false);
// user_pref("media.raw.enabled", false);
// user_pref("media.wave.enabled", false);
// user_pref("media.webm.enabled", false);
// user_pref("media.wmf.enabled", false);
// user_pref("media.wmf.vp9.enabled", false);
// -------------------------------------
// Disable Archive Reader API
user_pref("dom.archivereader.enabled", false);
// -------------------------------------
// Don't set previews of the menu list of tabs
// user_pref("browser.allTabs.previews", false);
// -------------------------------------
// Resize other tabs when closing a tab
// user_pref("browser.tabs.resize_immediately", true);
// -------------------------------------
// Define whether animated lightweight themes (Personas) are allowed
user_pref("lightweightThemes.animation.enabled", false);
// -------------------------------------
// Disable summary/details html elements
// user_pref("dom.details_element.enabled", false);
// -------------------------------------
// Enable Hardware Acceleration
// user_pref("layers.acceleration.enabled", true);
// user_pref("layers.acceleration.force", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// WARNINGS
// >>>>>>>>>>>>>>>>>>>>>
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.warnOnQuit", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CONTENT BEHAVIOR
// >>>>>>>>>>>>>>>>>>>>>
user_pref("accessibility.typeaheadfind", false);
user_pref("clipboard.autocopy", false);
user_pref("layout.spellcheckDefault", 0);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// UX BEHAVIOR
// >>>>>>>>>>>>>>>>>>>>>
// user_pref("browser.backspace_action", 2);
// user_pref("browser.tabs.closeWindowWithLastTab", false);
// user_pref("browser.tabs.loadBookmarksInTabs", true);
// user_pref("browser.urlbar.decodeURLsOnCopy", true);
// user_pref("general.autoScroll", false);
// user_pref("ui.key.menuAccessKey", 0);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// UX FEATURES: Disable and hide the icons and menus
// >>>>>>>>>>>>>>>>>>>>>
user_pref("reader.parse-on-load.enabled", false);
user_pref("browser.tabs.animate", false);
user_pref("browser.fullscreen.animateUp", 0);
user_pref("general.smoothScroll", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// OTHER
// >>>>>>>>>>>>>>>>>>>>>
// user_pref("browser.bookmarks.max_backups", 2);
user_pref("network.manage-offline-status", false);
// user_pref("xpinstall.signatures.required", false);
user_pref("javascript.options.shared_memory", false);
// -------------------------------------
// Enable the <menuitem> html tag
// user_pref("dom.menuitem.enabled", true);
// -------------------------------------
// Control the use of node.getRootNode
user_pref("dom.getRootNode.enabled", false);
// -------------------------------------
// Disable javascript
user_pref("javascript.enabled", false);
// -------------------------------------
// Test user.js in about:config
user_pref("_config.applied", true);
//