window.rl_widget_cfg = {
    id: "6ed58c89-809e-42e8-8e34-755189cce78c",
    globalMasterAdvertiserId: "USA_373432",
    locale: "en-US",
    lastUpdated: "2025-01-12 18:59:54 UTC",
    config: { platform: "USA" },
    products: [
        {
            name: "capturejs",
            enabled: true,
            autoload: true,
            config: {},
            class_name: "Capture",
        },
        {
            name: "capture",
            enabled: true,
            autoload: true,
            config: {},
            class_name: "Other",
        },
        {
            name: "on_click_cvt",
            enabled: true,
            autoload: true,
            config: {},
            class_name: "OnClickCvt",
        },
        {
            name: "iframe_proxy",
            enabled: true,
            autoload: true,
            config: {},
            class_name: "IframeProxy",
        },
        {
            name: "email",
            enabled: true,
            autoload: true,
            config: {},
            class_name: "Other",
        },
        {
            name: "form",
            enabled: true,
            autoload: true,
            config: {},
            class_name: "Form",
        },
        {
            name: "string_replacement",
            enabled: true,
            autoload: true,
            config: {},
            class_name: "StringReplacement",
        },
        {
            name: "email_replacement",
            enabled: true,
            autoload: true,
            config: {},
            class_name: "EmailReplacement",
        },
        {
            name: "facebook_pixel",
            enabled: true,
            autoload: true,
            config: {
                pixel_id: "1192965768762297",
                active: null,
                override_pixel: null,
                override_pixel_id: "",
                hipaa_override: "1",
            },
            class_name: "FacebookPixel",
        },
        // {
        //     name: "chat",
        //     enabled: true,
        //     autoload: true,
        //     jsFile: "/chat/rl_chat.source.js",
        //     config: {
        //         id: "",
        //         maid: "",
        //         apex_chat_id: "",
        //         apex_chat_key: 473536,
        //     },
        //     class_name: "Chat",
        // },
        {
            name: "google_gtag",
            enabled: true,
            autoload: true,
            config: {
                pixel_id: "16763979914",
                active: null,
                override_pixel: null,
                override_pixel_id: null,
            },
            class_name: "GoogleGtag",
        },
    ],
    cvts: {
        "https://#": {
            "/RL_CVT_Consult": [
                {
                    campaign_id: "USA_4740672",
                    cvtName: "*Schedule Consultation Clicked",
                    cvtType: "1",
                    cvtValue: "2",
                    cvtid: "24422798",
                    masterCampaignId: "USA_4682698",
                    value: "low",
                },
            ],
            "/RL_CVT_Shop": [
                {
                    campaign_id: "USA_4740672",
                    cvtName: "*Shop Clicked",
                    cvtType: "1",
                    cvtValue: "2",
                    cvtid: "24422799",
                    masterCampaignId: "USA_4682698",
                    value: "low",
                },
            ],
            "/thank-you/": [
                {
                    campaign_id: "USA_4740672",
                    cvtName: "*Contact Us Form Submitted",
                    cvtType: "2",
                    cvtValue: "2",
                    cvtid: "24422797",
                    masterCampaignId: "USA_4682698",
                    value: "high",
                },
                {
                    campaign_id: "USA_4744639",
                    cvtName: "*Contact Us Form Submitted",
                    cvtType: "2",
                    cvtValue: "2",
                    cvtid: "24445184",
                    masterCampaignId: "USA_4682702",
                    value: "high",
                },
            ],
        },
    },
    formAnalyticsFields: {},
    iframeProxies: [],
    onClickCvtEntries: {
        USA_4682698: [
            {
                host: "#",
                path: null,
                selector:
                    'a[href="https://go.booker.com/location/BarbaSkinLab/service-menu"]',
                cvt_url: "https://#/RL_CVT_Consult",
                form_url: "",
            },
            {
                host: "#",
                path: null,
                selector: 'a[href="https://#/"]',
                cvt_url: "https://#/RL_CVT_Shop",
                form_url: "",
            },
        ],
    },
    ignoredNetworkRequestEntries: [],
    replacements: {
        USA_4304627: {
            email: [
                { original: "", replace: "formmail" },
            ],
            phone: [
                { original: "3053631609", replace: "3053060247" },
                { original: "3054175403", replace: "3053400559" },
            ],
            script: null,
            strings: null,
        },
        USA_4304628: {
            email: [
                { original: "", replace: "formmail" },
            ],
            phone: [
                { original: "3053631609", replace: "3053060247" },
                { original: "3054175403", replace: "3053400559" },
            ],
            script: null,
            strings: null,
        },
        USA_4613090: {
            email: [
                {
                    original: "",
                    replace: "formmail",
                },
            ],
            phone: [
                { original: "3053631609", replace: "3052396364" },
                { original: "3054175403", replace: "3052394241" },
            ],
            script: null,
            strings: null,
        },
        USA_4613091: {
            email: [
                {
                    original: "",
                    replace: "formmail",
                },
            ],
            phone: [
                { original: "3053631609", replace: "3052396364" },
                { original: "3054175403", replace: "3052394241" },
            ],
            script: null,
            strings: null,
        },
        USA_4755246: {
            email: [
                {
                    original: "#",
                    replace: "formmail",
                },
            ],
            phone: [
                { original: "3053631609", replace: "3053068213" },
                { original: "3054175403", replace: "3053304154" },
            ],
            script: null,
            strings: null,
        },
        USA_4755247: {
            email: [
                {
                    original: "#",
                    replace: "formmail",
                },
            ],
            phone: [
                { original: "3053631609", replace: "3053068213" },
                { original: "3054175403", replace: "3053304154" },
            ],
            script: null,
            strings: null,
        },
        USA_4755254: {
            email: [
                {
                    original: "#",
                    replace: "formmail",
                },
            ],
            phone: [
                {
                    label: "ZLr3CL75oPwZEIqR2Lk-",
                    original: "3053631609",
                    replace: "3053060436",
                },
                {
                    label: "K-qkCKS8mOUZEIqR2Lk-",
                    original: "3054175403",
                    replace: "3053066791",
                },
            ],
            script: null,
            strings: [],
        },
        USA_4755255: {
            email: [
                {
                    original: "#",
                    replace: "formmail",
                },
            ],
            phone: [
                {
                    label: "ZLr3CL75oPwZEIqR2Lk-",
                    original: "3053631609",
                    replace: "3053060436",
                },
                {
                    label: "K-qkCKS8mOUZEIqR2Lk-",
                    original: "3054175403",
                    replace: "3053066791",
                },
            ],
            script: null,
            strings: [],
        },
        USA_4755256: {
            email: [
                {
                    original: "#",
                    replace: "formmail",
                },
            ],
            phone: [
                { original: "3053631609", replace: "3053060436" },
                { original: "3054175403", replace: "3053066791" },
            ],
            script: null,
            strings: null,
        },
        USA_4755257: {
            email: [
                {
                    original: "#",
                    replace: "formmail",
                },
            ],
            phone: [
                { original: "3053631609", replace: "3053060436" },
                { original: "3054175403", replace: "3053066791" },
            ],
            script: null,
            strings: null,
        },
        USA_4755258: {
            email: [
                {
                    original: "#",
                    replace: "formmail",
                },
            ],
            phone: [
                { original: "3053631609", replace: "3053060436" },
                { original: "3054175403", replace: "3053066791" },
            ],
            script: null,
            strings: null,
        },
        USA_4755259: {
            email: [
                {
                    original: "#",
                    replace: "formmail",
                },
            ],
            phone: [
                { original: "3053631609", replace: "3053060436" },
                { original: "3054175403", replace: "3053066791" },
            ],
            script: null,
            strings: null,
        },
        SOCIAL: {
            phone: [
                { original: "3053631609", replace: "3052043181" },
                { original: "3054175403", replace: "3053902415" },
            ],
        },
        DIRECT: {
            phone: [
                { original: "3053631609", replace: "3052045065" },
                { original: "3054175403", replace: "3055096597" },
            ],
        },
        OTHER: {
            phone: [
                { original: "3053631609", replace: "3052902527" },
                { original: "3054175403", replace: "3056004603" },
            ],
        },
        DIRECTORY: {
            phone: [
                { original: "3053631609", replace: "3053063469" },
                { original: "3054175403", replace: "3056002580" },
            ],
        },
        SEARCH: {
            phone: [
                { original: "3053631609", replace: "3053067004" },
                { original: "3054175403", replace: "3053963739" },
            ],
        },
    },
    campaign_data: {
        USA_3909983: {
            marketing_policy: "true",
            master_campaign_id: "3909983",
            referrer_type: "PAID",
            scids: ["4304157", "4304158"],
        },
        USA_3910268: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4098287: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4130896: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4151305: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4163850: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4197256: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4221543: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4229150: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4258339: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4261274: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4292332: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4294385: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4325827: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4326309: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4356570: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4356888: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4386718: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4388310: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4418769: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4420594: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4437902: {
            marketing_policy: "false",
            master_campaign_id: "4437902",
            referrer_type: "PAID",
            scids: ["4612051", "4612052"],
        },
        USA_4439467: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4450751: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4453522: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4469241: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4482536: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4486250: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4501428: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4514876: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4517603: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4532519: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4546113: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4550763: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4563837: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4577489: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4582239: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4595498: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4608977: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4616639: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4627247: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4640734: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4649183: {
            marketing_policy: "true",
            master_campaign_id: "4151305",
            referrer_type: "PAID",
            scids: [
                "4462447",
                "4462448",
                "4462449",
                "4462450",
                "4462451",
                "4462452",
                "4462453",
                "4462454",
                "4462455",
            ],
        },
        USA_4659104: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4672387: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4682698: {
            marketing_policy: "true",
            master_campaign_id: "4682698",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4682702: {
            marketing_policy: "true",
            master_campaign_id: "4682702",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4690654: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4703821: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4708227: {
            marketing_policy: "true",
            master_campaign_id: "4682702",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4721476: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: [],
        },
        USA_4734142: {
            marketing_policy: "true",
            master_campaign_id: "3910268",
            referrer_type: "PAID",
            scids: ["4304627", "4304628"],
        },
        USA_4740672: {
            marketing_policy: "true",
            master_campaign_id: "4682698",
            referrer_type: "PAID",
            scids: ["4755246", "4755247"],
        },
        USA_4744639: {
            marketing_policy: "true",
            master_campaign_id: "4682702",
            referrer_type: "PAID",
            scids: [
                "4755254",
                "4755255",
                "4755256",
                "4755257",
                "4755258",
                "4755259",
            ],
        },
        USA_4750169: {
            marketing_policy: "true",
            master_campaign_id: "4439467",
            referrer_type: "PAID",
            scids: ["4613090", "4613091"],
        },
    },
    google_conversion_labels: {
        "RL Email": "jjHPCKHBpOUZEIqR2Lk-",
        "RL High CVT": "D-3NCOfepuUZEIqR2Lk-",
        "RL Low Post CVT": "hFiOCODgpuUZEIqR2Lk-",
        "RL Medium Post CVT": "wD44CPvBpOUZEIqR2Lk-",
    },
    google_wpcids: { wpcids: ["4755254", "4755255"] },
    hipaa_client: false,
    domains: ["skinlabmiami.com"],
    nbly: false,
}; /*endconfig*/
(function capture(window, document, undefined) {
    if (window.RLCAP && window.RLCAP.version)
        console &&
            console.warn &&
            console.warn("Capture has already been loaded.");
    else {
        var CAPTURE_VERSION = "a4a16f8d671465475a78fd483363d4a84ed9341d";
        (window.RLCAP = window.RLCAP || {}),
            (window.RLCAP.version = CAPTURE_VERSION),
            (window.captureStatus = window.captureStatus || {});
        var hasInitialized = !1,
            CONSTANTS = {
                CAMPAIGN_EVENT: "campaign_event",
                CONFIG_EVENT: "config_event",
                EU_VISITOR_CHECK_EVENT: "eu_visitor_check_event",
                GOOGLE_PHONE_CONVERSION: "google_phone_conversion",
                OPT_OUT_CHECK_EVENT: "opt_out_check_event",
                OVERRIDE_ID_STORAGE_KEY: "override_site_id",
                SHOW_BANNER_EVENT: "show_banner",
                SIMPLIFI_EVENT: "simplifi_visitor_event",
                SIMPLIFI_INIT_EVENT: "simplifi_init_event",
                VISIT_EVENT: "visit_event",
            },
            BOTS = {
                ahrefs: ["AhrefsBot"],
                apple: ["Applebot"],
                barracuda: ["barracuda_vsm"],
                google: ["Google", "Lighthouse"],
                yahoo: ["Yahoo! Slurp"],
                yandex: ["yandex.com/bots"],
                pingdom: ["pingbot"],
                hubspot: [
                    "Hubspot Migration bot",
                    "Hubspot Webcrawler",
                    "HubSpot Page Screenshot Service",
                    "HubSpot Crawler",
                ],
                jobseeker: ["JobBot"],
                leadcrunch: ["CrunchBot"],
                opendi: ["Opendi Screenshot Bot"],
                phantomjs: ["Sentinel-Crawler-Bot", "PhantomJS"],
                privacyaware: ["PrivacyAwareBot"],
                pulsepoint: ["Pulsepoint XT3 web scraper"],
                similartech: ["SMTBot"],
                woobot: ["woobot/2.0"],
                bing: ["msnbot", "Bingbot", "BingPreview"],
                snapchat: ["SnapchatAds"],
                facebook: ["facebook"],
                unknown: [
                    "ASWebsnapshotsUserAgent",
                    "Bytespider",
                    "BTTAgent",
                    "Site24x7",
                    "ev-crawler",
                    "RuxitSynthetic",
                    "brightedge.com",
                ],
            },
            i18n = {
                "en-AU": {
                    rl_email: {
                        labels: {
                            cancel: "Cancel",
                            do_not_email:
                                "We use your email to respond to your query. We may also send you information about our other services. You may opt out by clicking here. We do not share your email with third parties for marketing purposes. More detail on our privacy practices see our Privacy Policy.",
                            email: "E-Mail",
                            message: "Message",
                            message_sent: "Your message has been sent",
                            name: "Name",
                            phone: "Phone",
                            send_message: "Send Message",
                        },
                        validations: {
                            invalid: "invalid",
                            required: "required",
                        },
                    },
                    rl_privacy: {
                        labels: {
                            accept: "I Accept",
                            decline: "I Decline",
                            privacy_text:
                                'We use cookies and similar tools to collect information from our website visitors to analyze our website usage and to market our products and services to you. Such information includes the referrer URL, browser type, IP address, and date, time and duration of the visit. We also share information about your use of our site with our social media, marketing and analytics partners, who may combine it with other information you’ve provided to them or they’ve collected from your use of their services. In case you do not wish to give your consent, you may nonetheless use this website without restriction. You can revoke your consent at any time. Further information may be found <a href="https://reachlocal.com.au/legal/terms-and-conditions/online-marketing-services-terms-and-conditions" target="_blank">here</a> and on the privacy policy on this website.',
                        },
                    },
                    rl_marketing_policy: {
                        labels: {
                            link_text: "Notice of Marketing Policy",
                            link: "https://reachlocal.com.au/legal/terms-and-conditions/online-marketing-services-terms-and-conditions",
                        },
                    },
                },
                "en-GB": {
                    rl_email: {
                        labels: {
                            cancel: "Cancel",
                            do_not_email:
                                "We use your email to respond to your query. We may also send you information about our other services. You may opt out by clicking here. We do not share your email with third parties for marketing purposes. More detail on our privacy practices see our Privacy Policy.",
                            email: "E-Mail",
                            message: "Message",
                            message_sent: "Your message has been sent",
                            name: "Name",
                            phone: "Phone",
                            send_message: "Send Message",
                        },
                        validations: {
                            invalid: "invalid",
                            required: "required",
                        },
                    },
                    rl_privacy: {
                        labels: {
                            accept: "I Accept",
                            decline: "I Decline",
                            privacy_text:
                                'We use cookies and similar tools to collect information from our website visitors to analyze our website usage and to market our products and services to you. Such information includes the referrer URL, browser type, IP address, and date, time and duration of the visit. We also share information about your use of our site with our social media, marketing and analytics partners, who may combine it with other information you’ve provided to them or they’ve collected from your use of their services. In case you do not wish to give your consent, you may nonetheless use this website without restriction. You can revoke your consent at any time. Further information may be found <a href="https://www.newsquest.co.uk/assets/pdf/marketing-services-cookie-policy.pdf" target="_blank">here</a> and on the privacy policy on this website.',
                        },
                    },
                    rl_marketing_policy: {
                        labels: {
                            link_text: "Notice of Marketing Policy",
                            link: "https://www.newsquest.co.uk/assets/pdf/marketing-services-cookie-policy.pdf",
                        },
                    },
                },
                "en-NZ": {
                    rl_email: {
                        labels: {
                            cancel: "Cancel",
                            do_not_email:
                                "We use your email to respond to your query. We may also send you information about our other services. You may opt out by clicking here. We do not share your email with third parties for marketing purposes. More detail on our privacy practices see our Privacy Policy.",
                            email: "E-Mail",
                            message: "Message",
                            message_sent: "Your message has been sent",
                            name: "Name",
                            phone: "Phone",
                            send_message: "Send Message",
                        },
                        validations: {
                            invalid: "invalid",
                            required: "required",
                        },
                    },
                    rl_privacy: {
                        labels: {
                            accept: "I Accept",
                            decline: "I Decline",
                            privacy_text:
                                'We use cookies and similar tools to collect information from our website visitors to analyze our website usage and to market our products and services to you. Such information includes the referrer URL, browser type, IP address, and date, time and duration of the visit. We also share information about your use of our site with our social media, marketing and analytics partners, who may combine it with other information you’ve provided to them or they’ve collected from your use of their services. In case you do not wish to give your consent, you may nonetheless use this website without restriction. You can revoke your consent at any time. Further information may be found <a href="https://www.reachlocal.com/nz/en/legal/terms-and-conditions/online-marketing-services-terms-and-conditions" target="_blank">here</a> and on the privacy policy on this website.',
                        },
                    },
                    rl_marketing_policy: {
                        labels: {
                            link_text: "Notice of Marketing Policy",
                            link: "https://www.reachlocal.com/nz/en/legal/terms-and-conditions/online-marketing-services-terms-and-conditions",
                        },
                    },
                },
                en: {
                    rl_email: {
                        labels: {
                            cancel: "Cancel",
                            do_not_email:
                                "We use your email to respond to your query. We may also send you information about our other services. You may opt out by clicking here. We do not share your email with third parties for marketing purposes. More detail on our privacy practices see our Privacy Policy.",
                            email: "E-Mail",
                            message: "Message",
                            message_sent: "Your message has been sent",
                            name: "Name",
                            phone: "Phone",
                            send_message: "Send Message",
                        },
                        validations: {
                            invalid: "invalid",
                            required: "required",
                        },
                    },
                    rl_privacy: {
                        labels: {
                            accept: "I Accept",
                            decline: "I Decline",
                            privacy_text:
                                'We use cookies and similar tools to collect information from our website visitors to analyze our website usage and to market our products and services to you. Such information includes the referrer URL, browser type, IP address, and date, time and duration of the visit. We also share information about your use of our site with our social media, marketing and analytics partners, who may combine it with other information you’ve provided to them or they’ve collected from your use of their services. In case you do not wish to give your consent, you may nonetheless use this website without restriction. You can revoke your consent at any time. Further information may be found <a href="http://localiq.com/tc" target="_blank">here</a> and on the privacy policy on this website.',
                        },
                    },
                    rl_marketing_policy: {
                        labels: {
                            link_text: "Notice of Marketing Policy",
                            link: "http://localiq.com/tc",
                        },
                    },
                },
            },
            REFERRERS = {
                "n49.com": "DIRECTORY",
                "bizvotes.com": "DIRECTORY",
                "www.1.cz": "SEARCH",
                "411.com": "DIRECTORY",
                "411.ca": "DIRECTORY",
                "1881.no": "SEARCH",
                "social.reachcodetesting.net": "SOCIAL",
                "directory.reachcodetesting.net": "DIRECTORY",
                "search.reachcodetesting.net": "SEARCH",
                "other.reachcodetesting.net": "OTHER",
                google: "SEARCH",
                "google.co": "SEARCH",
                "google.com": "SEARCH",
                "googleadservices.com": "SEARCH",
                "googlesyndication.com": "SEARCH",
                "imasdk.googleapis.com": "SEARCH",
                "android.googlequicksearchbox": "SEARCH",
                youtube: "VIDEO",
                yahoo: "SEARCH",
                "yahoo.co.jp": "SEARCH",
                bing: "SEARCH",
                "bing.com": "SEARCH",
                "r.msn.com": "SEARCH",
                "baidu.com": "SEARCH",
                "search.comcast.net": "SEARCH",
                "careerbuilder.com": "DIRECTORY",
                "whitepages.com": "DIRECTORY",
                "ebay.com": "SHOPPING",
                ebay: "SHOPPING",
                "pinterest.com": "SOCIAL",
                ask: "SEARCH",
                "kijiji.ca": "DIRECTORY",
                craigslist: "DIRECTORY",
                angieslist: "DIRECTORY",
                yellowpages: "DIRECTORY",
                "yellowpages.com": "DIRECTORY",
                yell: "DIRECTORY",
                aol: "SEARCH",
                aolsearch: "SEARCH",
                "lycos.com": "SEARCH",
                lycos: "SEARCH",
                "search.mywebsearch.com": "SEARCH",
                "plus.google": "SOCIAL",
                "plus.url.google": "SOCIAL",
                "t.co": "SOCIAL",
                twitter: "SOCIAL",
                "twitter.com": "SOCIAL",
                yelp: "DIRECTORY",
                "yelp.com": "DIRECTORY",
                "www.urbanspoon.com": "DIRECTORY",
                "citysearch.com": "DIRECTORY",
                "www.judysbook.com": "DIRECTORY",
                superpages: "DIRECTORY",
                "superpages.com": "DIRECTORY",
                digg: "SOCIAL",
                linkedin: "SOCIAL",
                "lnkd.in": "SOCIAL",
                "facebook.com": "SOCIAL",
                "facebook.nl": "SOCIAL",
                "www.alexa.com": "SEARCH",
                "all.by": "SEARCH",
                "apollo7.de": "SEARCH",
                "www.apollo.lv": "SEARCH",
                "www.arama.com": "SEARCH",
                "elmundo.es": "SEARCH",
                "libero.it": "SEARCH",
                "setooz.com": "SEARCH",
                "blekko.com": "SEARCH",
                "icerocket.com": "SEARCH",
                "terra.es": "SEARCH",
                "busca.orange.es": "SEARCH",
                "busca.uol.com.br": "SEARCH",
                "www.daemon-search.com": "SEARCH",
                "gigablast.com": "SEARCH",
                "www.dmoz.org": "SEARCH",
                "dmoz.org": "SEARCH",
                "duckduckgo.com": "SEARCH",
                "ecosia.org": "SEARCH",
                "eo.st": "SEARCH",
                "friendfeed.com": "SOCIAL",
                "fr.wedoo.com": "SEARCH",
                "go.mail.ru": "SEARCH",
                "holmes.ge": "SEARCH",
                "yandex.com": "SEARCH",
                "www.infospace.com": "SEARCH",
                "infospace.com": "SEARCH",
                "www.junglekey.com": "SEARCH",
                "search.need2find.com": "SEARCH",
                "lo.st": "SEARCH",
                "metager2.de": "SEARCH",
                "meta.rrzn.uni-hannover.de": "SEARCH",
                "meta.ua": "SEARCH",
                "nigma.ru": "SEARCH",
                "www.rambler.ru": "SEARCH",
                "delfi.lv": "SEARCH",
                "pesquisa.sapo.pt": "SEARCH",
                "poisk.ru": "SEARCH",
                "p.zhongsou.com": "SEARCH",
                "francite.com": "SEARCH",
                "aliceadsl.fr": "SEARCH",
                "hit-parade.com": "SEARCH",
                "virgilio.it": "SEARCH",
                "rpmfind.net": "SEARCH",
                "metacrawler.de": "SEARCH",
                "scour.com": "SEARCH",
                "1und1.de": "SEARCH",
                "searchalot.com": "SEARCH",
                "centrum.cz": "SEARCH",
                "babylon.com": "SEARCH",
                "bluewin.ch": "SEARCH",
                "conduit.com": "SEARCH",
                "daum.net": "SEARCH",
                "search.earthlink.net": "SEARCH",
                "excite.it": "SEARCH",
                "excite.de": "SEARCH",
                "freecause.com": "SEARCH",
                "free.fr": "SEARCH",
                "ne.jp": "SEARCH",
                "voila.fr": "SEARCH",
                "nate.com": "SEARCH",
                "naver.com": "SEARCH",
                "nifty.com": "SEARCH",
                "peoplepc.com": "SEARCH",
                "qip.ru": "SEARCH",
                "rr.com": "SEARCH",
                "myspace.com": "SOCIAL",
                "seznam.cz": "SEARCH",
                "softonic.com": "SEARCH",
                "tiscali.it": "SEARCH",
                "www.ee": "SEARCH",
                "yam.com": "SEARCH",
                "yippy.com": "SEARCH",
                "aport.ru": "SEARCH",
                "startpagina.nl": "SEARCH",
                "iplay.com": "SEARCH",
                "freenet.de": "SEARCH",
                "gmx.net": "SEARCH",
                "suche.info": "SEARCH",
                "t-online.de": "SEARCH",
                "web.nl": "SEARCH",
                "onet.pl": "SEARCH",
                "wp.pl": "SEARCH",
                "technorati.com": "SEARCH",
                "canoe.ca": "SEARCH",
                "cs.com": "SEARCH",
                "rakuten.co.jp": "SEARCH",
                "volny.cz": "SEARCH",
                "123people.com": "SEARCH",
                "dastelefonbuch.de": "SEARCH",
                "austronaut.at": "SEARCH",
                "abacho.de": "SEARCH",
                "acoon.de": "SEARCH",
                "allesklar.de": "SEARCH",
                "alltheweb.com": "SEARCH",
                "altavista.com": "SEARCH",
                "arcor.de": "SEARCH",
                "blogdigger.com": "SEARCH",
                "charter.net": "SEARCH",
                "crawler.com": "SEARCH",
                "cuil.com": "SEARCH",
                "dasoertliche.de": "SEARCH",
                "eniro.se": "SEARCH",
                "eurip.com": "SEARCH",
                "euroseek.com": "SEARCH",
                "everyclick.com": "SEARCH",
                "exalead.fr": "SEARCH",
                "fastbrowsersearch.com": "SEARCH",
                "fireball.de": "SEARCH",
                "firstsfind.com": "SEARCH",
                "flix.de": "SEARCH",
                "gnadenmeer.de": "SEARCH",
                "gomeo.com": "SEARCH",
                "interia.pl": "SEARCH",
                "goyellow.de": "DIRECTORY",
                "gulesider.no": "SEARCH",
                "hooseek.com": "SEARCH",
                "hotbot.com": "SEARCH",
                "icq.com": "SEARCH",
                "ilse.nl": "SEARCH",
                "jungle-spider.de": "SEARCH",
                "kataweb.it": "SEARCH",
                "kvasir.no": "SEARCH",
                "latne.lv": "SEARCH",
                "looksmart.com": "SEARCH",
                "maailm.com": "SEARCH",
                "mamma.com": "SEARCH",
                "meinestadt.de": "SEARCH",
                "mister-wong.com": "SEARCH",
                "monstercrawler.com": "SEARCH",
                "mysearch.com": "SEARCH",
                "najdi.si": "SEARCH",
                "neti.ee": "SEARCH",
                "paperball.de": "SEARCH",
                "picsearch.com": "SEARCH",
                "plazoo.com": "SEARCH",
                "search.pch.com": "SEARCH",
                "qualigo.at": "SEARCH",
                "searchcanvas.com": "SEARCH",
                "search.com": "SEARCH",
                "search.ch": "SEARCH",
                "searchy.co.uk": "SEARCH",
                "scoot.co.uk": "DIRECTORY",
                "sharelook.fr": "SEARCH",
                "skynet.be": "SEARCH",
                "sogou.com": "SEARCH",
                "soso.com": "SEARCH",
                "www.startsiden.no": "SEARCH",
                "suchmaschine.com": "SEARCH",
                "suchnase.de": "SEARCH",
                "talktalk.co.uk": "SEARCH",
                "teoma.com": "SEARCH",
                "tixuma.de": "SEARCH",
                "toile.com": "SEARCH",
                "toolbarhome.com": "SEARCH",
                "trouvez.com": "SEARCH",
                "trovarapido.com": "SEARCH",
                "trusted--search.com": "SEARCH",
                "twingly.com": "SEARCH",
                "url.org": "SEARCH",
                "vinden.nl": "SEARCH",
                "vindex.nl": "SEARCH",
                "walhello.info": "SEARCH",
                "weborama.fr": "SEARCH",
                "websearch.com": "SEARCH",
                "witch.de": "SEARCH",
                "x-recherche.com": "SEARCH",
                "yasni.de": "SEARCH",
                "yatedo.com": "SEARCH",
                "yougoo.fr": "SEARCH",
                "zapmeta.com": "SEARCH",
                "zoeken.nl": "SEARCH",
                "zoznam.sk": "SEARCH",
                "yellowmap.de": "SEARCH",
                "zoek.nl": "SEARCH",
                "zoohoo.cz": "SEARCH",
                "canada411.ca": "DIRECTORY",
                "truelocal.com.au": "DIRECTORY",
                "homeimprovementpages.com.au": "DIRECTORY",
                "lawyers.com.au": "DIRECTORY",
                "realestate.com.au": "DIRECTORY",
                "domain.com.au": "DIRECTORY",
                "localdirectories.com.au": "DIRECTORY",
                "plasticsurgery.org.au": "DIRECTORY",
                "ada.org.au": "DIRECTORY",
                "carsales.com.au": "DIRECTORY",
                "boatsales.com.au": "DIRECTORY",
                "redbook.com": "DIRECTORY",
                "drive.com.au": "DIRECTORY",
                "moz.com": "DIRECTORY",
                "bikesales.com.au": "DIRECTORY",
                "sdwt.com.au": "DIRECTORY",
                "www.checkatrade.com": "DIRECTORY",
                "www.ratedpeople.com": "DIRECTORY",
                "www.applegate.co.uk": "DIRECTORY",
                "directory.thesun.co.uk": "DIRECTORY",
                "www.thebestof.co.uk": "DIRECTORY",
                "abconline.de": "DIRECTORY",
                "stadtbranchenbuch.com": "DIRECTORY",
                "gelbeseiten.de": "DIRECTORY",
                "gelbe-seiten.de": "DIRECTORY",
                "gutgemacht.at": "DIRECTORY",
                "ichbinderherold.at": "DIRECTORY",
                "herold.at": "DIRECTORY",
                "europages.de": "DIRECTORY",
                "klicktel.de": "DIRECTORY",
                "telefonbuch.com": "DIRECTORY",
                "yellowmap.at": "DIRECTORY",
                "allesklar.at": "DIRECTORY",
                "ebay.de": "SHOPPING",
                "kijiji.at": "DIRECTORY",
                "susi.at": "DIRECTORY",
                "xing.com": "SOCIAL",
                "instagram.com": "SOCIAL",
                "blog.instagram.com": "SOCIAL",
                "instagram.nl": "SOCIAL",
                "telelistas.net": "DIRECTORY",
                "guiamais.com.br": "DIRECTORY",
                "ilocal.com.br": "DIRECTORY",
                "guiafacil.com.br": "DIRECTORY",
                "flickr.com": "SOCIAL",
                "foursquare.com": "SOCIAL",
                "zooomr.com": "SOCIAL",
                "yahoo.com.br": "SEARCH",
                "linkedin.com": "SOCIAL",
                "places.nl": "DIRECTORY",
                "b9.nl": "DIRECTORY",
                "goedbegin.nl": "DIRECTORY",
                "expatica.com": "DIRECTORY",
                "markt.nl": "DIRECTORY",
                "goudengids.be": "DIRECTORY",
                "linkedin.nl": "SOCIAL",
                "searchnz.co.nz": "SEARCH",
                "anzwers.com.au": "SEARCH",
                "mkiwi.com": "DIRECTORY",
                "nzs.com": "SEARCH",
                "nzdirectory.co.nz": "DIRECTORY",
                "businessme.co.nz": "DIRECTORY",
                "hotfrog.co.nz": "DIRECTORY",
                "hotfrog.com": "DIRECTORY",
                "finda.co.nz": "DIRECTORY",
                "yellow.co.nz": "DIRECTORY",
                "localist.co.nz": "DIRECTORY",
                "whitepages.co.nz": "DIRECTORY",
                "searchauckland.co.nz": "DIRECTORY",
                "nzsbdirectory.co.nz": "DIRECTORY",
                "gopher.co.nz": "DIRECTORY",
                "weibo.com": "SOCIAL",
                "thegreenbook.com": "DIRECTORY",
                "streetdirectory.com.sg": "DIRECTORY",
                "stclassifieds.sg": "DIRECTORY",
                "insing.com": "DIRECTORY",
                "hungrygowhere.com": "DIRECTORY",
                "propertyguru.com.sg": "DIRECTORY",
                "yellowpages.com.sg": "DIRECTORY",
                "trademe.co.nz": "DIRECTORY",
                "gumtree.com": "DIRECTORY",
                "gumtree.com.au": "DIRECTORY",
                "prospectportal.com": "DIRECTORY",
                "simpli.fi": "SEARCH",
                "ivision.ca": "OTHER",
                "com.pinterest": "SOCIAL",
                "live.com": "DIRECTORY",
                "android.gm": "SEARCH",
                "adsensecustomsearchads.com": "SEARCH",
                "indeed.com": "DIRECTORY",
                "indeed.ca": "DIRECTORY",
                "searchlock.com": "SEARCH",
                "doubleclick.net": "SEARCH",
                "toyota.com": "DIRECTORY",
                "cargurus.com": "DIRECTORY",
                "cars-on-line.com": "DIRECTORY",
                "searchincognito.com": "SEARCH",
                "avira.net": "SEARCH",
                "toyota.com.br": "DIRECTORY",
                "reddit.com": "SOCIAL",
                "mopub.com": "SEARCH",
                "tumblr.com": "SOCIAL",
                "choosenissan.com": "DIRECTORY",
                "wa.gov": "DIRECTORY",
                "apexchat.com": "OTHER",
                "maac.com": "OTHER",
                "vw.com": "OTHER",
                "192.com": "DIRECTORY",
                "aberdeenpages.co.uk": "DIRECTORY",
                "aberystwythpages.co.uk": "DIRECTORY",
                "andoverpages.co.uk": "DIRECTORY",
                "angleseypages.co.uk": "DIRECTORY",
                "aylesburypages.co.uk": "DIRECTORY",
                "bangorpages.co.uk": "DIRECTORY",
                "barkingpages.co.uk": "DIRECTORY",
                "barnetpages.co.uk": "DIRECTORY",
                "basildonpages.co.uk": "DIRECTORY",
                "basingstokepages.co.uk": "DIRECTORY",
                "bathpages.co.uk": "DIRECTORY",
                "bedfordpages.co.uk": "DIRECTORY",
                "belfastpages.co.uk": "DIRECTORY",
                "birkenheadpages.co.uk": "DIRECTORY",
                "birminghampages.co.uk": "DIRECTORY",
                "blackpoolpages.co.uk": "DIRECTORY",
                "bournemouthpages.co.uk": "DIRECTORY",
                "bradfordpages.co.uk": "DIRECTORY",
                "braintreepages.co.uk": "DIRECTORY",
                "brentpages.co.uk": "DIRECTORY",
                "bridlingtonpages.co.uk": "DIRECTORY",
                "brightonpages.co.uk": "DIRECTORY",
                "bristolpages.co.uk": "DIRECTORY",
                "brixtonpages.co.uk": "DIRECTORY",
                "bromleypages.co.uk": "DIRECTORY",
                "burnleypages.co.uk": "DIRECTORY",
                "camberleypages.co.uk": "DIRECTORY",
                "cambridgepages.co.uk": "DIRECTORY",
                "camdenpages.co.uk": "DIRECTORY",
                "canterburypages.co.uk": "DIRECTORY",
                "cardiffpages.co.uk": "DIRECTORY",
                "carlislepages.co.uk": "DIRECTORY",
                "chelmsfordpages.co.uk": "DIRECTORY",
                "cheltenhampages.co.uk": "DIRECTORY",
                "chesterpages.co.uk": "DIRECTORY",
                "chichesterpages.co.uk": "DIRECTORY",
                "cirencesterpages.co.uk": "DIRECTORY",
                "citipages.net": "DIRECTORY",
                "colwynbaypages.co.uk": "DIRECTORY",
                "coventrypages.co.uk": "DIRECTORY",
                "crosbypages.co.uk": "DIRECTORY",
                "dagenhampages.co.uk": "DIRECTORY",
                "darlingtonpages.co.uk": "DIRECTORY",
                "derbypages.co.uk": "DIRECTORY",
                "dorchesterpages.co.uk": "DIRECTORY",
                "dumfriespages.co.uk": "DIRECTORY",
                "dundeepages.co.uk": "DIRECTORY",
                "dunstablepages.co.uk": "DIRECTORY",
                "durhampages.co.uk": "DIRECTORY",
                "ealingpages.co.uk": "DIRECTORY",
                "eastbournepages.co.uk": "DIRECTORY",
                "edinburghpages.co.uk": "DIRECTORY",
                "enfieldpages.co.uk": "DIRECTORY",
                "exeterpages.co.uk": "DIRECTORY",
                "finchleypages.co.uk": "DIRECTORY",
                "folkestonepages.co.uk": "DIRECTORY",
                "fulhampages.co.uk": "DIRECTORY",
                "gatwickpages.co.uk": "DIRECTORY",
                "glasgowpages.co.uk": "DIRECTORY",
                "gloucesterpages.co.uk": "DIRECTORY",
                "gravesendpages.co.uk": "DIRECTORY",
                "greenwichpages.co.uk": "DIRECTORY",
                "guernseypages.co.uk": "DIRECTORY",
                "guildfordpages.co.uk": "DIRECTORY",
                "hackneypages.co.uk": "DIRECTORY",
                "hammersmithpages.co.uk": "DIRECTORY",
                "hampsteadpages.co.uk": "DIRECTORY",
                "haringeypages.co.uk": "DIRECTORY",
                "harrogatepages.co.uk": "DIRECTORY",
                "hastingspages.co.uk": "DIRECTORY",
                "haveringpages.co.uk": "DIRECTORY",
                "heathrowpages.co.uk": "DIRECTORY",
                "hemelhempsteadpages.co.uk": "DIRECTORY",
                "henleypages.co.uk": "DIRECTORY",
                "hillingdonpages.co.uk": "DIRECTORY",
                "hounslowpages.co.uk": "DIRECTORY",
                "hovepages.co.uk": "DIRECTORY",
                "hullpages.co.uk": "DIRECTORY",
                "ilfordpages.co.uk": "DIRECTORY",
                "invernesspages.co.uk": "DIRECTORY",
                "ipswichpages.co.uk": "DIRECTORY",
                "islingtonpages.co.uk": "DIRECTORY",
                "jerseypages.co.uk": "DIRECTORY",
                "johnogroatspages.co.uk": "DIRECTORY",
                "kensingtonandchelseapages.co.uk": "DIRECTORY",
                "kensingtonpages.co.uk": "DIRECTORY",
                "kingslynnpages.co.uk": "DIRECTORY",
                "kingstonuponthamespages.co.uk": "DIRECTORY",
                "kirbypages.co.uk": "DIRECTORY",
                "lambethpages.co.uk": "DIRECTORY",
                "lancasterpages.co.uk": "DIRECTORY",
                "landsendpages.co.uk": "DIRECTORY",
                "leamingtonspapages.co.uk": "DIRECTORY",
                "leedspages.co.uk": "DIRECTORY",
                "leicesterpages.co.uk": "DIRECTORY",
                "lewishampages.co.uk": "DIRECTORY",
                "lincolnpages.co.uk": "DIRECTORY",
                "liverpoolpages.co.uk": "DIRECTORY",
                "londonpages.co.uk": "DIRECTORY",
                "loughboroughpages.co.uk": "DIRECTORY",
                "maidenheadpages.co.uk": "DIRECTORY",
                "maidstonepages.co.uk": "DIRECTORY",
                "manchesterpages.co.uk": "DIRECTORY",
                "margatepages.co.uk": "DIRECTORY",
                "mertonpages.co.uk": "DIRECTORY",
                "middlesbroughpages.co.uk": "DIRECTORY",
                "morecambepages.co.uk": "DIRECTORY",
                "newcastlepages.co.uk": "DIRECTORY",
                "newhampages.co.uk": "DIRECTORY",
                "newportpages.co.uk": "DIRECTORY",
                "newquaypages.co.uk": "DIRECTORY",
                "northamptonpages.co.uk": "DIRECTORY",
                "norwichpages.co.uk": "DIRECTORY",
                "nottinghampages.co.uk": "DIRECTORY",
                "obanpages.co.uk": "DIRECTORY",
                "orkneypages.co.uk": "DIRECTORY",
                "ormskirkpages.co.uk": "DIRECTORY",
                "oxfordpages.co.uk": "DIRECTORY",
                "penzancepages.co.uk": "DIRECTORY",
                "perthpages.co.uk": "DIRECTORY",
                "peterboroughpages.co.uk": "DIRECTORY",
                "plymouthpages.co.uk": "DIRECTORY",
                "portsmouthpages.co.uk": "DIRECTORY",
                "readingpages.co.uk": "DIRECTORY",
                "redbridgepages.co.uk": "DIRECTORY",
                "richmonduponthamespages.co.uk": "DIRECTORY",
                "riponpages.co.uk": "DIRECTORY",
                "romfordpages.co.uk": "DIRECTORY",
                "rotherhampages.co.uk": "DIRECTORY",
                "salisburypages.co.uk": "DIRECTORY",
                "scunthorpepages.co.uk": "DIRECTORY",
                "sheffieldpages.co.uk": "DIRECTORY",
                "shrewsburypages.co.uk": "DIRECTORY",
                "skegnesspages.co.uk": "DIRECTORY",
                "sloughpages.co.uk": "DIRECTORY",
                "southamptonpages.co.uk": "DIRECTORY",
                "southendonseapages.co.uk": "DIRECTORY",
                "southwarkpages.co.uk": "DIRECTORY",
                "standrewspages.co.uk": "DIRECTORY",
                "stepneypages.co.uk": "DIRECTORY",
                "stirlingpages.co.uk": "DIRECTORY",
                "stoke-on-trentpages.co.uk": "DIRECTORY",
                "stratfordpages.co.uk": "DIRECTORY",
                "streetpages.co.uk": "DIRECTORY",
                "swanseapages.co.uk": "DIRECTORY",
                "swindonpages.co.uk": "DIRECTORY",
                "tauntonpages.co.uk": "DIRECTORY",
                "torquaypages.co.uk": "DIRECTORY",
                "tottenhampages.co.uk": "DIRECTORY",
                "towerhamletspages.co.uk": "DIRECTORY",
                "truropages.co.uk": "DIRECTORY",
                "tunbridgewellspages.co.uk": "DIRECTORY",
                "upminsterpages.co.uk": "DIRECTORY",
                "uxbridgepages.co.uk": "DIRECTORY",
                "walthamforestpages.co.uk": "DIRECTORY",
                "walthamstowpages.co.uk": "DIRECTORY",
                "wandsworthpages.co.uk": "DIRECTORY",
                "warwickpages.co.uk": "DIRECTORY",
                "wembleypages.co.uk": "DIRECTORY",
                "westendpages.co.uk": "DIRECTORY",
                "westhampages.co.uk": "DIRECTORY",
                "westminsterpages.co.uk": "DIRECTORY",
                "wiganpages.co.uk": "DIRECTORY",
                "wimbledonpages.co.uk": "DIRECTORY",
                "winchesterpages.co.uk": "DIRECTORY",
                "wolverhamptonpages.co.uk": "DIRECTORY",
                "worcesterpages.co.uk": "DIRECTORY",
                "worthingpages.co.uk": "DIRECTORY",
                "wrexhampages.co.uk": "DIRECTORY",
                "yarmouthpages.co.uk": "DIRECTORY",
                "yeovilpages.co.uk": "DIRECTORY",
                "yorkpages.co.uk": "DIRECTORY",
                "findit.antrimtimes.co.uk": "DIRECTORY",
                "findit.arbroathherald.co.uk": "DIRECTORY",
                "findit.bakewelltoday.co.uk": "DIRECTORY",
                "findit.ballymenatimes.com": "DIRECTORY",
                "findit.ballymoneytimes.co.uk": "DIRECTORY",
                "findit.banbridgeleader.co.uk": "DIRECTORY",
                "findit.banburyguardian.co.uk": "DIRECTORY",
                "findit.batleynews.co.uk": "DIRECTORY",
                "findit.bedfordtoday.co.uk": "DIRECTORY",
                "findit.newsletter.co.uk": "DIRECTORY",
                "findit.belpernews.co.uk": "DIRECTORY",
                "findit.berkhamstedtoday.co.uk": "DIRECTORY",
                "findit.berwick-advertiser.co.uk": "DIRECTORY",
                "findit.berwickshirenews.co.uk": "DIRECTORY",
                "findit.beverleyguardian.co.uk": "DIRECTORY",
                "findit.bexhillobserver.net": "DIRECTORY",
                "findit.biggleswadetoday.co.uk": "DIRECTORY",
                "findit.blackpoolgazette.co.uk": "DIRECTORY",
                "findit.bognor.co.uk": "DIRECTORY",
                "findit.bostonstandard.co.uk": "DIRECTORY",
                "findit.bournelocal.co.uk": "DIRECTORY",
                "findit.brechinadvertiser.co.uk": "DIRECTORY",
                "findit.bridlingtonfreepress.co.uk": "DIRECTORY",
                "findit.brighouseecho.co.uk": "DIRECTORY",
                "findit.buchanobserver.co.uk": "DIRECTORY",
                "findit.buckinghamtoday.co.uk": "DIRECTORY",
                "findit.bucksherald.co.uk": "DIRECTORY",
                "findit.burnleyexpress.net": "DIRECTORY",
                "findit.buryfreepress.co.uk": "DIRECTORY",
                "findit.businessmatterssussex.co.uk": "DIRECTORY",
                "findit.buteman.co.uk": "DIRECTORY",
                "findit.buxtonadvertiser.co.uk": "DIRECTORY",
                "findit.carlukegazette.co.uk": "DIRECTORY",
                "findit.carricktoday.co.uk": "DIRECTORY",
                "findit.carrickfergustimes.co.uk": "DIRECTORY",
                "findit.chichester.co.uk": "DIRECTORY",
                "findit.chorley-guardian.co.uk": "DIRECTORY",
                "findit.clitheroeadvertiser.co.uk": "DIRECTORY",
                "findit.colerainetimes.co.uk": "DIRECTORY",
                "findit.crawleyobserver.co.uk": "DIRECTORY",
                "findit.cumbernauld-news.co.uk": "DIRECTORY",
                "findit.daventryexpress.co.uk": "DIRECTORY",
                "findit.deesidepiper.co.uk": "DIRECTORY",
                "findit.derbyshiretimes.co.uk": "DIRECTORY",
                "findit.derryjournal.com": "DIRECTORY",
                "findit.dewsburyreporter.co.uk": "DIRECTORY",
                "findit.dinningtontoday.co.uk": "DIRECTORY",
                "findit.dissexpress.co.uk": "DIRECTORY",
                "findit.doncasterfreepress.co.uk": "DIRECTORY",
                "findit.donsidepiper.co.uk": "DIRECTORY",
                "findit.driffieldtoday.co.uk": "DIRECTORY",
                "findit.dromoreleader.co.uk": "DIRECTORY",
                "findit.dunstabletoday.co.uk": "DIRECTORY",
                "findit.eastlothiannews.co.uk": "DIRECTORY",
                "findit.eastbourneherald.co.uk": "DIRECTORY",
                "findit.eastwoodadvertiser.co.uk": "DIRECTORY",
                "findit.edinburghnews.scotsman.com": "DIRECTORY",
                "findit.ellontimes.co.uk": "DIRECTORY",
                "findit.epworthbells.co.uk": "DIRECTORY",
                "findit.falkirkherald.co.uk": "DIRECTORY",
                "findit.farminglife.com": "DIRECTORY",
                "findit.fenlandcitizen.co.uk": "DIRECTORY",
                "findit.fifetoday.co.uk": "DIRECTORY",
                "findit.fileymercury.co.uk": "DIRECTORY",
                "findit.fleetwoodtoday.co.uk": "DIRECTORY",
                "findit.forfardispatch.co.uk": "DIRECTORY",
                "findit.fraserburghherald.co.uk": "DIRECTORY",
                "findit.gainsboroughstandard.co.uk": "DIRECTORY",
                "findit.gallowaygazette.co.uk": "DIRECTORY",
                "findit.garstangcourier.co.uk": "DIRECTORY",
                "findit.glasgowsouthandeastwoodextra.co.uk": "DIRECTORY",
                "findit.goolecourier.co.uk": "DIRECTORY",
                "findit.granthamjournal.co.uk": "DIRECTORY",
                "findit.guideandgazette.co.uk": "DIRECTORY",
                "findit.halifaxcourier.co.uk": "DIRECTORY",
                "findit.harboroughmail.co.uk": "DIRECTORY",
                "findit.harrogateadvertiser.co.uk": "DIRECTORY",
                "findit.hartlepoolmail.co.uk": "DIRECTORY",
                "findit.hastingsobserver.co.uk": "DIRECTORY",
                "findit.haverhillecho.co.uk": "DIRECTORY",
                "findit.hawick-news.co.uk": "DIRECTORY",
                "findit.haylingtoday.co.uk": "DIRECTORY",
                "findit.hebdenbridgetimes.co.uk": "DIRECTORY",
                "findit.hemeltoday.co.uk": "DIRECTORY",
                "findit.hemsworthandsouthelmsallexpress.co.uk": "DIRECTORY",
                "findit.horncastlenews.co.uk": "DIRECTORY",
                "findit.houghtonstar.co.uk": "DIRECTORY",
                "findit.hucknalldispatch.co.uk": "DIRECTORY",
                "findit.ilkestonadvertiser.co.uk": "DIRECTORY",
                "findit.inverurieherald.co.uk": "DIRECTORY",
                "findit.iomtoday.co.im": "DIRECTORY",
                "findit.kenilworthweeklynews.co.uk": "DIRECTORY",
                "findit.kincardineshireobserver.co.uk": "DIRECTORY",
                "findit.kirkintilloch-herald.co.uk": "DIRECTORY",
                "findit.kirriemuirherald.co.uk": "DIRECTORY",
                "findit.lep.co.uk": "DIRECTORY",
                "findit.lancasterguardian.co.uk": "DIRECTORY",
                "findit.larnetimes.co.uk": "DIRECTORY",
                "findit.leamingtoncourier.co.uk": "DIRECTORY",
                "findit.leighreporter.co.uk": "DIRECTORY",
                "findit.leightonbuzzardonline.co.uk": "DIRECTORY",
                "findit.leylandguardian.co.uk": "DIRECTORY",
                "findit.linlithgowgazette.co.uk": "DIRECTORY",
                "findit.littlehamptongazette.co.uk": "DIRECTORY",
                "findit.londonderrysentinel.co.uk": "DIRECTORY",
                "findit.longridgenews.co.uk": "DIRECTORY",
                "findit.louthleader.co.uk": "DIRECTORY",
                "findit.lurganmail.co.uk": "DIRECTORY",
                "findit.lutontoday.co.uk": "DIRECTORY",
                "findit.lutterworthmail.co.uk": "DIRECTORY",
                "findit.lynnnews.co.uk": "DIRECTORY",
                "findit.lythamstannesexpress.co.uk": "DIRECTORY",
                "findit.maltonmercury.co.uk": "DIRECTORY",
                "findit.chad.co.uk": "DIRECTORY",
                "findit.marketrasenmail.co.uk": "DIRECTORY",
                "findit.matlockmercury.co.uk": "DIRECTORY",
                "findit.mearnsleader.co.uk": "DIRECTORY",
                "findit.meltontimes.co.uk": "DIRECTORY",
                "findit.midsussextimes.co.uk": "DIRECTORY",
                "findit.midulstermail.co.uk": "DIRECTORY",
                "findit.midhurstandpetworth.co.uk": "DIRECTORY",
                "findit.midlothianadvertiser.co.uk": "DIRECTORY",
                "findit.milngavieherald.co.uk": "DIRECTORY",
                "findit.miltonkeynes.co.uk": "DIRECTORY",
                "findit.mirfieldreporter.co.uk": "DIRECTORY",
                "findit.montrosereview.co.uk": "DIRECTORY",
                "findit.morleyobserver.co.uk": "DIRECTORY",
                "findit.morpethherald.co.uk": "DIRECTORY",
                "findit.motherwelltimes.co.uk": "DIRECTORY",
                "findit.newmarketjournal.co.uk": "DIRECTORY",
                "findit.newsguardian.co.uk": "DIRECTORY",
                "findit.newspostleader.co.uk": "DIRECTORY",
                "findit.newtownabbeytoday.co.uk": "DIRECTORY",
                "findit.northyorkshirenews.com": "DIRECTORY",
                "findit.northamptonchron.co.uk": "DIRECTORY",
                "findit.northantstelegraph.co.uk": "DIRECTORY",
                "findit.northumberlandgazette.co.uk": "DIRECTORY",
                "findit.pendletoday.co.uk": "DIRECTORY",
                "findit.peterboroughtoday.co.uk": "DIRECTORY",
                "findit.peterleestar.co.uk": "DIRECTORY",
                "findit.pocklingtonpost.co.uk": "DIRECTORY",
                "findit.pontefractandcastlefordexpress.co.uk": "DIRECTORY",
                "findit.portadowntimes.co.uk": "DIRECTORY",
                "findit.portsmouth.co.uk": "DIRECTORY",
                "findit.retfordtoday.co.uk": "DIRECTORY",
                "findit.ripleyandheanornews.co.uk": "DIRECTORY",
                "findit.ripongazette.co.uk": "DIRECTORY",
                "findit.rugbyadvertiser.co.uk": "DIRECTORY",
                "findit.stamfordmercury.co.uk": "DIRECTORY",
                "findit.rutland-times.co.uk": "DIRECTORY",
                "findit.ryeandbattleobserver.co.uk": "DIRECTORY",
                "findit.thescarboroughnews.co.uk": "DIRECTORY",
                "findit.seahamstar.co.uk": "DIRECTORY",
                "findit.selbytimes.co.uk": "DIRECTORY",
                "findit.selkirkweekendadvertiser.co.uk": "DIRECTORY",
                "findit.sheffieldtelegraph.co.uk": "DIRECTORY",
                "findit.shieldsgazette.com": "DIRECTORY",
                "findit.shorehamherald.co.uk": "DIRECTORY",
                "findit.skegnessstandard.co.uk": "DIRECTORY",
                "findit.sleafordstandard.co.uk": "DIRECTORY",
                "findit.southyorkshiretimes.co.uk": "DIRECTORY",
                "findit.thesouthernreporter.co.uk": "DIRECTORY",
                "findit.spaldingtoday.co.uk": "DIRECTORY",
                "findit.spenboroughguardian.co.uk": "DIRECTORY",
                "findit.sthelensreporter.co.uk": "DIRECTORY",
                "findit.stornowaygazette.co.uk": "DIRECTORY",
                "findit.suffolkfreepress.co.uk": "DIRECTORY",
                "findit.sunderlandecho.com": "DIRECTORY",
                "findit.sussexexpress.co.uk": "DIRECTORY",
                "findit.thametoday.co.uk": "DIRECTORY",
                "findit.scotsman.com": "DIRECTORY",
                "findit.thestar.co.uk": "DIRECTORY",
                "findit.thevisitor.co.uk": "DIRECTORY",
                "findit.thornegazette.co.uk": "DIRECTORY",
                "findit.todmordennews.co.uk": "DIRECTORY",
                "findit.tringtoday.co.uk": "DIRECTORY",
                "findit.tyronetimes.co.uk": "DIRECTORY",
                "findit.lisburntoday.co.uk": "DIRECTORY",
                "findit.wakefieldexpress.co.uk": "DIRECTORY",
                "findit.warwickcourier.co.uk": "DIRECTORY",
                "findit.washingtonstar.co.uk": "DIRECTORY",
                "findit.wscountytimes.co.uk": "DIRECTORY",
                "findit.westsussextoday.co.uk": "DIRECTORY",
                "findit.wetherbynews.co.uk": "DIRECTORY",
                "findit.whitbygazette.co.uk": "DIRECTORY",
                "findit.wigantoday.net": "DIRECTORY",
                "findit.worksopguardian.co.uk": "DIRECTORY",
                "findit.worthingherald.co.uk": "DIRECTORY",
                "findit.yorkshireeveningpost.co.uk": "DIRECTORY",
                "findit.yorkshirepost.co.uk": "DIRECTORY",
                "directory.ashbournenewstelegraph.co.uk": "DIRECTORY",
                "directory.bathchronicle.co.uk": "DIRECTORY",
                "directory.bedfordshire-news.co.uk": "DIRECTORY",
                "directory.blackcountrybugle.co.uk": "DIRECTORY",
                "directory.blackmorevale.co.uk": "DIRECTORY",
                "directory.bostontarget.co.uk": "DIRECTORY",
                "directory.bristolpost.co.uk": "DIRECTORY",
                "directory.burtonmail.co.uk": "DIRECTORY",
                "directory.cambridge-news.co.uk": "DIRECTORY",
                "directory.cannockmercury.co.uk": "DIRECTORY",
                "directory.cleethorpespeople.co.uk": "DIRECTORY",
                "directory.cornishguardian.co.uk": "DIRECTORY",
                "directory.cornishman.co.uk": "DIRECTORY",
                "directory.crawleynews.co.uk": "DIRECTORY",
                "directory.croydonadvertiser.co.uk": "DIRECTORY",
                "directory.derbytelegraph.co.uk": "DIRECTORY",
                "directory.dorkingandleatherheadadvertiser.co.uk": "DIRECTORY",
                "directory.eastgrinsteadcourier.co.uk": "DIRECTORY",
                "directory.eastlindseytarget.co.uk": "DIRECTORY",
                "directory.ely-news.co.uk": "DIRECTORY",
                "directory.essexlive.news": "DIRECTORY",
                "directory.exeterexpressandecho.co.uk": "DIRECTORY",
                "directory.gloucestershirelive.co.uk": "DIRECTORY",
                "directory.granthamtarget.co.uk": "DIRECTORY",
                "directory.greatbarrobserver.co.uk": "DIRECTORY",
                "directory.grimsbytelegraph.co.uk": "DIRECTORY",
                "directory.harlowstar.co.uk": "DIRECTORY",
                "directory.hertfordshiremercury.co.uk": "DIRECTORY",
                "directory.hertsandessexobserver.co.uk": "DIRECTORY",
                "directory.hulldailymail.co.uk": "DIRECTORY",
                "directory.kentlive.news": "DIRECTORY",
                "directory.leek-news.co.uk": "DIRECTORY",
                "directory.leicestermercury.co.uk": "DIRECTORY",
                "directory.lichfieldmercury.co.uk": "DIRECTORY",
                "directory.lincolnshireecho.co.uk": "DIRECTORY",
                "directory.luton-dunstable.co.uk": "DIRECTORY",
                "directory.northampton-news-hp.co.uk": "DIRECTORY",
                "directory.northdevonjournal.co.uk": "DIRECTORY",
                "directory.nottinghampost.com": "DIRECTORY",
                "directory.nuneaton-news.co.uk": "DIRECTORY",
                "directory.onemk.co.uk": "DIRECTORY",
                "directory.plymouthherald.co.uk": "DIRECTORY",
                "directory.retfordtimes.co.uk": "DIRECTORY",
                "directory.scunthorpetelegraph.co.uk": "DIRECTORY",
                "directory.sleafordtarget.co.uk": "DIRECTORY",
                "directory.somersetlive.co.uk": "DIRECTORY",
                "directory.southwales-eveningpost.co.uk": "DIRECTORY",
                "directory.staffordshirelife.co.uk": "DIRECTORY",
                "directory.staffordshirenewsletter.co.uk": "DIRECTORY",
                "directory.stokesentinel.co.uk": "DIRECTORY",
                "directory.surreymirror.co.uk": "DIRECTORY",
                "directory.suttoncoldfieldobserver.co.uk": "DIRECTORY",
                "directory.tamworthherald.co.uk": "DIRECTORY",
                "directory.torquayheraldexpress.co.uk": "DIRECTORY",
                "directory.uttoxeteradvertiser.co.uk": "DIRECTORY",
                "directory.walsalladvertiser.co.uk": "DIRECTORY",
                "directory.westbriton.co.uk": "DIRECTORY",
                "directory.westernmorningnews.co.uk": "DIRECTORY",
                "thomsonlocal.co.uk": "DIRECTORY",
                "directory.accringtonobserver.co.uk": "DIRECTORY",
                "directory.birminghammail.co.uk": "DIRECTORY",
                "directory.birminghampost.co.uk": "DIRECTORY",
                "directory.chesterchronicle.co.uk": "DIRECTORY",
                "directory.chroniclelive.co.uk": "DIRECTORY",
                "directory.coventrytelegraph.net": "DIRECTORY",
                "directory.crewechronicle.co.uk": "DIRECTORY",
                "directory.dailypost.co.uk": "DIRECTORY",
                "directory.dailyrecord.co.uk": "DIRECTORY",
                "directory.examiner.co.uk": "DIRECTORY",
                "directory.gazettelive.co.uk": "DIRECTORY",
                "directory.getbucks.co.uk": "DIRECTORY",
                "directory.gethampshire.co.uk": "DIRECTORY",
                "directory.getreading.co.uk": "DIRECTORY",
                "directory.getsurrey.co.uk": "DIRECTORY",
                "directory.getwestlondon.co.uk": "DIRECTORY",
                "directory.hinckleytimes.net": "DIRECTORY",
                "directory.liverpoolecho.co.uk": "DIRECTORY",
                "directory.loughboroughecho.net": "DIRECTORY",
                "directory.macclesfield-express.co.uk": "DIRECTORY",
                "directory.manchestereveningnews.co.uk": "DIRECTORY",
                "directory.mirror.co.uk": "DIRECTORY",
                "directory.osadvertiser.co.uk": "DIRECTORY",
                "directory.rossendalefreepress.co.uk": "DIRECTORY",
                "directory.runcornandwidnesweeklynews.co.uk": "DIRECTORY",
                "directory.solihullnews.net": "DIRECTORY",
                "directory.southportvisiter.co.uk": "DIRECTORY",
                "directory.thejournal.co.uk": "DIRECTORY",
                "directory.walesonline.co.uk": "DIRECTORY",
                "directory.wirralnews.co.uk": "DIRECTORY",
                "www.touchaberdeen.com": "DIRECTORY",
                "www.touchbath.com": "DIRECTORY",
                "www.touchbelfast.com": "DIRECTORY",
                "www.touchbirmingham.co.uk": "DIRECTORY",
                "www.touchblackburn.com": "DIRECTORY",
                "www.touchblackpool.com": "DIRECTORY",
                "www.touchbolton.com": "DIRECTORY",
                "www.touchbournemouth.com": "DIRECTORY",
                "www.touchbradford.com": "DIRECTORY",
                "www.touchbrighton.com": "DIRECTORY",
                "www.touchbristol.com": "DIRECTORY",
                "www.touchbromley.com": "DIRECTORY",
                "www.touchcambridge.com": "DIRECTORY",
                "www.touchcanterbury.com": "DIRECTORY",
                "www.touchcardiff.com": "DIRECTORY",
                "www.touchcarlisle.com": "DIRECTORY",
                "www.touchchelmsford.com": "DIRECTORY",
                "www.touchchester.com": "DIRECTORY",
                "www.touchcolchester.com": "DIRECTORY",
                "www.touchcoventry.com": "DIRECTORY",
                "www.touchcrewe.com": "DIRECTORY",
                "www.touchcroydon.com": "DIRECTORY",
                "www.touchdarlington.com": "DIRECTORY",
                "www.touchdartford.com": "DIRECTORY",
                "www.touchderby.com": "DIRECTORY",
                "www.touchdoncaster.com": "DIRECTORY",
                "www.touchdorchester.com": "DIRECTORY",
                "www.touchdudley.com": "DIRECTORY",
                "www.touchdumfries.com": "DIRECTORY",
                "www.touchdundee.com": "DIRECTORY",
                "www.touchdurham.com": "DIRECTORY",
                "www.touchedinburgh.com": "DIRECTORY",
                "www.touchenfield.com": "DIRECTORY",
                "www.touchexeter.com": "DIRECTORY",
                "www.touchfalkirk.com": "DIRECTORY",
                "www.touchglasgow.com": "DIRECTORY",
                "www.touchgloucester.com": "DIRECTORY",
                "www.touchguildford.com": "DIRECTORY",
                "www.touchhalifax.com": "DIRECTORY",
                "www.touchharrogate.com": "DIRECTORY",
                "www.touchharrow.com": "DIRECTORY",
                "www.touchhemelhempstead.com": "DIRECTORY",
                "www.touchhereford.com": "DIRECTORY",
                "www.touchhuddersfield.com": "DIRECTORY",
                "www.touchhull.com": "DIRECTORY",
                "www.touchilford.com": "DIRECTORY",
                "www.touchinverness.com": "DIRECTORY",
                "www.touchipswich.com": "DIRECTORY",
                "www.touchkilmarnock.com": "DIRECTORY",
                "www.touchkingston.com": "DIRECTORY",
                "www.touchkirkcaldy.com": "DIRECTORY",
                "www.touchlancaster.com": "DIRECTORY",
                "www.touchleeds.com": "DIRECTORY",
                "www.touchleicester.com": "DIRECTORY",
                "www.touchlincoln.com": "DIRECTORY",
                "www.touchliverpool.com": "DIRECTORY",
                "www.touchllandudno.com": "DIRECTORY",
                "www.touchlocal.com": "DIRECTORY",
                "www.touchlondon.co.uk": "DIRECTORY",
                "www.touchluton.com": "DIRECTORY",
                "www.touchmanchester.co.uk": "DIRECTORY",
                "www.touchmedway.com": "DIRECTORY",
                "www.touchmiddlesbrough.com": "DIRECTORY",
                "www.touchmiltonkeynes.com": "DIRECTORY",
                "www.touchmotherwell.com": "DIRECTORY",
                "www.touchnewcastle.com": "DIRECTORY",
                "www.touchnewport.com": "DIRECTORY",
                "www.touchnorthampton.com": "DIRECTORY",
                "www.touchnorwich.com": "DIRECTORY",
                "www.touchnottingham.com": "DIRECTORY",
                "www.toucholdham.com": "DIRECTORY",
                "www.touchoxford.com": "DIRECTORY",
                "www.touchpaisley.com": "DIRECTORY",
                "www.touchperth.com": "DIRECTORY",
                "www.touchpeterborough.com": "DIRECTORY",
                "www.touchplymouth.com": "DIRECTORY",
                "www.touchportsmouth.com": "DIRECTORY",
                "www.touchpreston.com": "DIRECTORY",
                "www.touchreading.com": "DIRECTORY",
                "www.touchredhill.com": "DIRECTORY",
                "www.touchrichmond.com": "DIRECTORY",
                "www.touchromford.com": "DIRECTORY",
                "www.touchsalisbury.com": "DIRECTORY",
                "www.touchsheffield.com": "DIRECTORY",
                "www.touchshrewsbury.com": "DIRECTORY",
                "www.touchslough.com": "DIRECTORY",
                "www.touchsouthall.com": "DIRECTORY",
                "www.touchsouthampton.com": "DIRECTORY",
                "www.touchsouthend.com": "DIRECTORY",
                "www.touchstalbans.com": "DIRECTORY",
                "www.touchstevenage.com": "DIRECTORY",
                "www.touchstockport.com": "DIRECTORY",
                "www.touchstoke.com": "DIRECTORY",
                "www.touchsunderland.com": "DIRECTORY",
                "www.touchsutton.com": "DIRECTORY",
                "www.touchswansea.com": "DIRECTORY",
                "www.touchswindon.com": "DIRECTORY",
                "www.touchtaunton.com": "DIRECTORY",
                "www.touchtelford.com": "DIRECTORY",
                "www.touchtorquay.com": "DIRECTORY",
                "www.touchtruro.com": "DIRECTORY",
                "www.touchtunbridgewells.com": "DIRECTORY",
                "www.touchwakefield.com": "DIRECTORY",
                "www.touchwalsall.com": "DIRECTORY",
                "www.touchwarrington.com": "DIRECTORY",
                "www.touchwatford.com": "DIRECTORY",
                "www.touchwigan.com": "DIRECTORY",
                "www.touchwolverhampton.com": "DIRECTORY",
                "www.touchworcester.com": "DIRECTORY",
                "www.touchyork.com": "DIRECTORY",
                "touchlocal.co.uk": "DIRECTORY",
                "directory.independent.co.uk": "DIRECTORY",
                "local.standard.co.uk": "DIRECTORY",
                "yell.com": "DIRECTORY",
                "360.cn": "SEARCH",
                "43things": "SOCIAL",
                "43things.com": "SOCIAL",
                "51.com": "SOCIAL",
                "5ch.net": "SOCIAL",
                "Google Shopping": "SHOPPING",
                Hatena: "SOCIAL",
                IGShopping: "SHOPPING",
                ImageShack: "SOCIAL",
                "aax-us-east.amazon-adsystem.com": "SHOPPING",
                "aax.amazon-adsystem.com": "SHOPPING",
                "academia.edu": "SOCIAL",
                activerain: "SOCIAL",
                "activerain.com": "SOCIAL",
                activeworlds: "SOCIAL",
                "activeworlds.com": "SOCIAL",
                addthis: "SOCIAL",
                "addthis.com": "SOCIAL",
                "airg.ca": "SOCIAL",
                alibaba: "SHOPPING",
                "alibaba.com": "SHOPPING",
                alice: "SEARCH",
                "allnurses.com": "SOCIAL",
                "allrecipes.com": "SOCIAL",
                alumniclass: "SOCIAL",
                "alumniclass.com": "SOCIAL",
                amazon: "SHOPPING",
                "amazon.co.uk": "SHOPPING",
                "amazon.com": "SHOPPING",
                "ameba.jp": "SOCIAL",
                "ameblo.jp": "SOCIAL",
                americantowns: "SOCIAL",
                "americantowns.com": "SOCIAL",
                "amp.reddit.com": "SOCIAL",
                "ancestry.com": "SOCIAL",
                anobii: "SOCIAL",
                "anobii.com": "SOCIAL",
                answerbag: "SOCIAL",
                "answerbag.com": "SOCIAL",
                "answers.yahoo.com": "SOCIAL",
                aolanswers: "SOCIAL",
                "aolanswers.com": "SOCIAL",
                "apps.facebook.com": "SOCIAL",
                "apps.shopify.com": "SHOPPING",
                "ar.pinterest.com": "SOCIAL",
                "ar.search.yahoo.com": "SEARCH",
                "artstation.com": "SOCIAL",
                askubuntu: "SOCIAL",
                "askubuntu.com": "SOCIAL",
                "asmallworld.com": "SOCIAL",
                "at.search.yahoo.com": "SEARCH",
                athlinks: "SOCIAL",
                "athlinks.com": "SOCIAL",
                "au.search.yahoo.com": "SEARCH",
                auone: "SEARCH",
                avg: "SEARCH",
                "away.vk.com": "SOCIAL",
                "awe.sm": "SOCIAL",
                "b.hatena.ne.jp": "SOCIAL",
                "baby-gaga": "SOCIAL",
                "baby-gaga.com": "SOCIAL",
                "babyblog.ru": "SOCIAL",
                babylon: "SEARCH",
                badoo: "SOCIAL",
                "badoo.com": "SOCIAL",
                baidu: "SEARCH",
                bebo: "SOCIAL",
                "bebo.com": "SOCIAL",
                beforeitsnews: "SOCIAL",
                "beforeitsnews.com": "SOCIAL",
                bharatstudent: "SOCIAL",
                "bharatstudent.com": "SOCIAL",
                biglobe: "SEARCH",
                "biglobe.co.jp": "SEARCH",
                "biglobe.ne.jp": "SEARCH",
                "biip.no": "SOCIAL",
                "biswap.org": "SOCIAL",
                "bit.ly": "SOCIAL",
                "blackcareernetwork.com": "SOCIAL",
                blackplanet: "SOCIAL",
                "blackplanet.com": "SOCIAL",
                "blip.fm": "SOCIAL",
                "blog.com": "SOCIAL",
                "blog.feedspot.com": "SOCIAL",
                "blog.goo.ne.jp": "SOCIAL",
                "blog.naver.com": "SOCIAL",
                "blog.twitch.tv": "VIDEO",
                "blog.yahoo.co.jp": "SOCIAL",
                "blogg.no": "SOCIAL",
                "bloggang.com": "SOCIAL",
                blogger: "SOCIAL",
                "blogger.com": "SOCIAL",
                blogher: "SOCIAL",
                "blogher.com": "SOCIAL",
                bloglines: "SOCIAL",
                "bloglines.com": "SOCIAL",
                "blogs.com": "SOCIAL",
                blogsome: "SOCIAL",
                "blogsome.com": "SOCIAL",
                blogspot: "SOCIAL",
                "blogspot.com": "SOCIAL",
                blogster: "SOCIAL",
                "blogster.com": "SOCIAL",
                blurtit: "SOCIAL",
                "blurtit.com": "SOCIAL",
                "bookmarks.yahoo.co.jp": "SOCIAL",
                "bookmarks.yahoo.com": "SOCIAL",
                "br.pinterest.com": "SOCIAL",
                "br.search.yahoo.com": "SEARCH",
                brightkite: "SOCIAL",
                "brightkite.com": "SOCIAL",
                brizzly: "SOCIAL",
                "brizzly.com": "SOCIAL",
                "business.facebook.com": "SOCIAL",
                buzzfeed: "SOCIAL",
                "buzzfeed.com": "SOCIAL",
                buzznet: "SOCIAL",
                "buzznet.com": "SOCIAL",
                "ca.search.yahoo.com": "SEARCH",
                "cafe.naver.com": "SOCIAL",
                cafemom: "SOCIAL",
                "cafemom.com": "SOCIAL",
                camospace: "SOCIAL",
                "camospace.com": "SOCIAL",
                "canalblog.com": "SOCIAL",
                "care.com": "SOCIAL",
                care2: "SOCIAL",
                "care2.com": "SOCIAL",
                "caringbridge.org": "SOCIAL",
                catster: "SOCIAL",
                "catster.com": "SOCIAL",
                "cbnt.io": "SOCIAL",
                cellufun: "SOCIAL",
                "cellufun.com": "SOCIAL",
                "centerblog.net": "SOCIAL",
                "ch.search.yahoo.com": "SEARCH",
                "chat.zalo.me": "SOCIAL",
                "checkout.shopify.com": "SHOPPING",
                "checkout.stripe.com": "SHOPPING",
                "chegg.com": "SOCIAL",
                chicagonow: "SOCIAL",
                "chicagonow.com": "SOCIAL",
                "chiebukuro.yahoo.co.jp": "SOCIAL",
                "cl.search.yahoo.com": "SEARCH",
                classmates: "SOCIAL",
                "classmates.com": "SOCIAL",
                classquest: "SOCIAL",
                "classquest.com": "SOCIAL",
                "cn.bing.com": "SEARCH",
                cnn: "SEARCH",
                "co.pinterest.com": "SOCIAL",
                "co.search.yahoo.com": "SEARCH",
                "cocolog-nifty": "SOCIAL",
                "cocolog-nifty.com": "SOCIAL",
                comcast: "SEARCH",
                conduit: "SEARCH",
                "copainsdavant.linternaute.com": "SOCIAL",
                "couchsurfing.org": "SOCIAL",
                cozycot: "SOCIAL",
                "cozycot.com": "SOCIAL",
                "cr.shopping.naver.com": "SHOPPING",
                "cr2.shopping.naver.com": "SHOPPING",
                crackle: "VIDEO",
                "crackle.com": "VIDEO",
                "cross.tv": "SOCIAL",
                crunchyroll: "SOCIAL",
                "crunchyroll.com": "SOCIAL",
                "cse.google.com": "SEARCH",
                curiositystream: "VIDEO",
                "curiositystream.com": "VIDEO",
                cyworld: "SOCIAL",
                "cyworld.com": "SOCIAL",
                "cz.pinterest.com": "SOCIAL",
                "d.hatena.ne.jp": "SOCIAL",
                "d.tube": "VIDEO",
                dailymotion: "VIDEO",
                "dailymotion.com": "VIDEO",
                "dailystrength.org": "SOCIAL",
                "dashboard.twitch.tv": "VIDEO",
                daum: "SEARCH",
                "de.search.yahoo.com": "SEARCH",
                "deluxe.com": "SOCIAL",
                deviantart: "SOCIAL",
                "deviantart.com": "SOCIAL",
                dianping: "SOCIAL",
                "dianping.com": "SOCIAL",
                "digg.com": "SOCIAL",
                diigo: "SOCIAL",
                "diigo.com": "SOCIAL",
                "discover.hubpages.com": "SOCIAL",
                disneyplus: "VIDEO",
                "disneyplus.com": "VIDEO",
                disqus: "SOCIAL",
                "disqus.com": "SOCIAL",
                "dk.search.yahoo.com": "SEARCH",
                dogpile: "SEARCH",
                "dogpile.com": "SEARCH",
                dogster: "SOCIAL",
                "dogster.com": "SOCIAL",
                dol2day: "SOCIAL",
                "dol2day.com": "SOCIAL",
                doostang: "SOCIAL",
                "doostang.com": "SOCIAL",
                dopplr: "SOCIAL",
                "dopplr.com": "SOCIAL",
                douban: "SOCIAL",
                "douban.com": "SOCIAL",
                "draft.blogger.com": "SOCIAL",
                "draugiem.lv": "SOCIAL",
                "drugs-forum": "SOCIAL",
                "drugs-forum.com": "SOCIAL",
                duckduckgo: "SEARCH",
                dzone: "SOCIAL",
                "dzone.com": "SOCIAL",
                "ebay.co.uk": "SHOPPING",
                "ebay.com.au": "SHOPPING",
                "edublogs.org": "SOCIAL",
                elftown: "SOCIAL",
                "elftown.com": "SOCIAL",
                "email.seznam.cz": "SEARCH",
                eniro: "SEARCH",
                "epicurious.com": "SOCIAL",
                "es.search.yahoo.com": "SEARCH",
                "espanol.search.yahoo.com": "SEARCH",
                etsy: "SHOPPING",
                "etsy.com": "SHOPPING",
                "everforo.com": "SOCIAL",
                "exalead.com": "SEARCH",
                "exblog.jp": "SOCIAL",
                "excite.com": "SEARCH",
                extole: "SOCIAL",
                "extole.com": "SOCIAL",
                facebook: "SOCIAL",
                faceparty: "SOCIAL",
                "faceparty.com": "SOCIAL",
                "fandom.com": "SOCIAL",
                fanpop: "SOCIAL",
                "fanpop.com": "SOCIAL",
                fark: "SOCIAL",
                "fark.com": "SOCIAL",
                "fast.wistia.net": "VIDEO",
                fb: "SOCIAL",
                "fb.me": "SOCIAL",
                fc2: "SOCIAL",
                "fc2.com": "SOCIAL",
                feedspot: "SOCIAL",
                feministing: "SOCIAL",
                "feministing.com": "SOCIAL",
                "fi.search.yahoo.com": "SEARCH",
                filmaffinity: "SOCIAL",
                "filmaffinity.com": "SOCIAL",
                "firmy.cz": "SEARCH",
                flickr: "SOCIAL",
                flipboard: "SOCIAL",
                "flipboard.com": "SOCIAL",
                folkdirect: "SOCIAL",
                "folkdirect.com": "SOCIAL",
                foodservice: "SOCIAL",
                "foodservice.com": "SOCIAL",
                "forums.androidcentral.com": "SOCIAL",
                "forums.crackberry.com": "SOCIAL",
                "forums.imore.com": "SOCIAL",
                "forums.nexopia.com": "SOCIAL",
                "forums.webosnation.com": "SOCIAL",
                "forums.wpcentral.com": "SOCIAL",
                fotki: "SOCIAL",
                "fotki.com": "SOCIAL",
                fotolog: "SOCIAL",
                "fotolog.com": "SOCIAL",
                foursquare: "SOCIAL",
                "fr.search.yahoo.com": "SEARCH",
                "free.facebook.com": "SOCIAL",
                friendfeed: "SOCIAL",
                "fruehstueckstreff.org": "SOCIAL",
                fubar: "SOCIAL",
                "fubar.com": "SOCIAL",
                gaiaonline: "SOCIAL",
                "gaiaonline.com": "SOCIAL",
                gamerdna: "SOCIAL",
                "gamerdna.com": "SOCIAL",
                "gather.com": "SOCIAL",
                "geni.com": "SOCIAL",
                "getpocket.com": "SOCIAL",
                glassboard: "SOCIAL",
                "glassboard.com": "SOCIAL",
                glassdoor: "SOCIAL",
                "glassdoor.com": "SOCIAL",
                globo: "SEARCH",
                godtube: "SOCIAL",
                "godtube.com": "SOCIAL",
                "goldenline.pl": "SOCIAL",
                goldstar: "SOCIAL",
                "goldstar.com": "SOCIAL",
                "goo.gl": "SOCIAL",
                gooblog: "SOCIAL",
                goodreads: "SOCIAL",
                "goodreads.com": "SOCIAL",
                "google+": "SOCIAL",
                "google-play": "SEARCH",
                "googlegroups.com": "SOCIAL",
                googlemybusiness: "SEARCH",
                googleplus: "SOCIAL",
                govloop: "SOCIAL",
                "govloop.com": "SOCIAL",
                gowalla: "SOCIAL",
                "gowalla.com": "SOCIAL",
                "gree.jp": "SOCIAL",
                "groups.google.com": "SOCIAL",
                "gulli.com": "SOCIAL",
                "gutefrage.net": "SOCIAL",
                habbo: "SOCIAL",
                "habbo.com": "SOCIAL",
                "help.hulu.com": "VIDEO",
                "help.netflix.com": "VIDEO",
                hi5: "SOCIAL",
                "hi5.com": "SOCIAL",
                "hk.search.yahoo.com": "SEARCH",
                hootsuite: "SOCIAL",
                "hootsuite.com": "SOCIAL",
                houzz: "SOCIAL",
                "houzz.com": "SOCIAL",
                hoverspot: "SOCIAL",
                "hoverspot.com": "SOCIAL",
                "hr.com": "SOCIAL",
                "hu.pinterest.com": "SOCIAL",
                hubculture: "SOCIAL",
                "hubculture.com": "SOCIAL",
                "hubpages.com": "SOCIAL",
                hulu: "VIDEO",
                "hulu.com": "VIDEO",
                "hyves.net": "SOCIAL",
                "hyves.nl": "SOCIAL",
                ibibo: "SOCIAL",
                "ibibo.com": "SOCIAL",
                "id.pinterest.com": "SOCIAL",
                "id.search.yahoo.com": "SEARCH",
                "id.twitch.tv": "VIDEO",
                "identi.ca": "SOCIAL",
                ig: "SOCIAL",
                "imageshack.com": "SOCIAL",
                "imageshack.us": "SOCIAL",
                imvu: "SOCIAL",
                "imvu.com": "SOCIAL",
                "in.pinterest.com": "SOCIAL",
                "in.search.yahoo.com": "SEARCH",
                incredimail: "SEARCH",
                insanejournal: "SOCIAL",
                "insanejournal.com": "SOCIAL",
                instagram: "SOCIAL",
                instapaper: "SOCIAL",
                "instapaper.com": "SOCIAL",
                "internations.org": "SOCIAL",
                "interpals.net": "SOCIAL",
                intherooms: "SOCIAL",
                "intherooms.com": "SOCIAL",
                "iq.com": "VIDEO",
                iqiyi: "VIDEO",
                "iqiyi.com": "VIDEO",
                "irc-galleria.net": "SOCIAL",
                "is.gd": "SOCIAL",
                "it.search.yahoo.com": "SEARCH",
                italki: "SOCIAL",
                "italki.com": "SOCIAL",
                jammerdirect: "SOCIAL",
                "jammerdirect.com": "SOCIAL",
                "jappy.com": "SOCIAL",
                "jappy.de": "SOCIAL",
                "jobs.netflix.com": "VIDEO",
                "justin.tv": "VIDEO",
                "kaboodle.com": "SOCIAL",
                kakao: "SOCIAL",
                "kakao.com": "SOCIAL",
                "kakaocorp.com": "SOCIAL",
                kaneva: "SOCIAL",
                "kaneva.com": "SOCIAL",
                "kin.naver.com": "SOCIAL",
                kvasir: "SEARCH",
                "l.facebook.com": "SOCIAL",
                "l.instagram.com": "SOCIAL",
                "l.messenger.com": "SOCIAL",
                "last.fm": "SOCIAL",
                librarything: "SOCIAL",
                "librarything.com": "SOCIAL",
                "lifestream.aol.com": "SOCIAL",
                line: "SOCIAL",
                "line.me": "SOCIAL",
                listal: "SOCIAL",
                "listal.com": "SOCIAL",
                listography: "SOCIAL",
                "listography.com": "SOCIAL",
                "lite.qwant.com": "SEARCH",
                "livedoor.com": "SOCIAL",
                livedoorblog: "SOCIAL",
                livejournal: "SOCIAL",
                "livejournal.com": "SOCIAL",
                "lm.facebook.com": "SOCIAL",
                "m.alibaba.com": "SHOPPING",
                "m.baidu.com": "SEARCH",
                "m.blog.naver.com": "SOCIAL",
                "m.cafe.naver.com": "SOCIAL",
                "m.facebook.com": "SOCIAL",
                "m.kin.naver.com": "SOCIAL",
                "m.naver.com": "SEARCH",
                "m.search.naver.com": "SEARCH",
                "m.shopping.naver.com": "SHOPPING",
                "m.sogou.com": "SEARCH",
                "m.twitch.tv": "VIDEO",
                "m.vk.com": "SOCIAL",
                "m.yelp.com": "SOCIAL",
                "m.youtube.com": "VIDEO",
                "mail.google.com": "SEARCH",
                "mail.rambler.ru": "SEARCH",
                "mail.yandex.ru": "SEARCH",
                "malaysia.search.yahoo.com": "SEARCH",
                "mbga.jp": "SOCIAL",
                "medium.com": "SOCIAL",
                "meetin.org": "SOCIAL",
                meetup: "SOCIAL",
                "meetup.com": "SOCIAL",
                "meinvz.net": "SOCIAL",
                "meneame.net": "SOCIAL",
                "menuism.com": "SOCIAL",
                mercadolibre: "SHOPPING",
                "mercadolibre.com": "SHOPPING",
                "mercadolibre.com.ar": "SHOPPING",
                "mercadolibre.com.mx": "SHOPPING",
                "message.alibaba.com": "SHOPPING",
                "messages.google.com": "SOCIAL",
                "messages.yahoo.co.jp": "SOCIAL",
                messenger: "SOCIAL",
                "messenger.com": "SOCIAL",
                "mix.com": "SOCIAL",
                "mixi.jp": "SOCIAL",
                "mobile.facebook.com": "SOCIAL",
                mocospace: "SOCIAL",
                "mocospace.com": "SOCIAL",
                mouthshut: "SOCIAL",
                "mouthshut.com": "SOCIAL",
                movabletype: "SOCIAL",
                "movabletype.com": "SOCIAL",
                "msearch.shopping.naver.com": "SHOPPING",
                msn: "SEARCH",
                "msn.com": "SEARCH",
                mubi: "SOCIAL",
                "mubi.com": "SOCIAL",
                "music.youtube.com": "VIDEO",
                "mx.search.yahoo.com": "SEARCH",
                "my.opera.com": "SOCIAL",
                "myanimelist.net": "SOCIAL",
                myheritage: "SOCIAL",
                "myheritage.com": "SOCIAL",
                mylife: "SOCIAL",
                "mylife.com": "SOCIAL",
                mymodernmet: "SOCIAL",
                "mymodernmet.com": "SOCIAL",
                myspace: "SOCIAL",
                najdi: "SEARCH",
                naver: "SEARCH",
                netflix: "VIDEO",
                "netflix.com": "VIDEO",
                netvibes: "SOCIAL",
                "netvibes.com": "SOCIAL",
                "news.google.com": "SEARCH",
                "news.ycombinator.com": "SOCIAL",
                newsshowcase: "SOCIAL",
                nexopia: "SOCIAL",
                "ngopost.org": "SOCIAL",
                niconico: "SOCIAL",
                "nicovideo.jp": "SOCIAL",
                nightlifelink: "SOCIAL",
                "nightlifelink.com": "SOCIAL",
                ning: "SOCIAL",
                "ning.com": "SOCIAL",
                "nl.pinterest.com": "SOCIAL",
                "nl.search.yahoo.com": "SEARCH",
                "nl.shopping.net": "SHOPPING",
                "no.search.yahoo.com": "SEARCH",
                "no.shopping.net": "SHOPPING",
                "ntp.msn.com": "SEARCH",
                "nz.search.yahoo.com": "SEARCH",
                "odnoklassniki.ru": "SOCIAL",
                "odnoklassniki.ua": "SOCIAL",
                "offer.alibaba.com": "SHOPPING",
                "okwave.jp": "SOCIAL",
                "old.reddit.com": "SOCIAL",
                "one.walmart.com": "SHOPPING",
                onet: "SEARCH",
                "oneworldgroup.org": "SOCIAL",
                onstartups: "SOCIAL",
                "onstartups.com": "SOCIAL",
                opendiary: "SOCIAL",
                "opendiary.com": "SOCIAL",
                "order.shopping.yahoo.co.jp": "SHOPPING",
                "oshiete.goo.ne.jp": "SOCIAL",
                "out.reddit.com": "SOCIAL",
                "over-blog.com": "SOCIAL",
                "overblog.com": "SOCIAL",
                "paper.li": "SOCIAL",
                "partners.shopify.com": "SHOPPING",
                "partyflock.nl": "SOCIAL",
                "pe.search.yahoo.com": "SEARCH",
                "ph.search.yahoo.com": "SEARCH",
                photobucket: "SOCIAL",
                "photobucket.com": "SOCIAL",
                pinboard: "SOCIAL",
                "pinboard.in": "SOCIAL",
                pingsta: "SOCIAL",
                "pingsta.com": "SOCIAL",
                pinterest: "SOCIAL",
                "pinterest.at": "SOCIAL",
                "pinterest.ca": "SOCIAL",
                "pinterest.ch": "SOCIAL",
                "pinterest.cl": "SOCIAL",
                "pinterest.co.kr": "SOCIAL",
                "pinterest.co.uk": "SOCIAL",
                "pinterest.com.au": "SOCIAL",
                "pinterest.com.mx": "SOCIAL",
                "pinterest.de": "SOCIAL",
                "pinterest.es": "SOCIAL",
                "pinterest.fr": "SOCIAL",
                "pinterest.it": "SOCIAL",
                "pinterest.jp": "SOCIAL",
                "pinterest.nz": "SOCIAL",
                "pinterest.ph": "SOCIAL",
                "pinterest.pt": "SOCIAL",
                "pinterest.ru": "SOCIAL",
                "pinterest.se": "SOCIAL",
                "pixiv.net": "SOCIAL",
                "pl.pinterest.com": "SOCIAL",
                "pl.search.yahoo.com": "SEARCH",
                "playahead.se": "SOCIAL",
                "player.twitch.tv": "VIDEO",
                "player.vimeo.com": "VIDEO",
                plurk: "SOCIAL",
                "plurk.com": "SOCIAL",
                "plus.google.com": "SOCIAL",
                "plus.url.google.com": "SOCIAL",
                "pocket.co": "SOCIAL",
                posterous: "SOCIAL",
                "posterous.com": "SOCIAL",
                "pro.homeadvisor.com": "SOCIAL",
                "pulse.yahoo.com": "SOCIAL",
                qapacity: "SOCIAL",
                "qapacity.com": "SOCIAL",
                quechup: "SOCIAL",
                "quechup.com": "SOCIAL",
                quora: "SOCIAL",
                "quora.com": "SOCIAL",
                qwant: "SEARCH",
                "qwant.com": "SEARCH",
                "qzone.qq.com": "SOCIAL",
                rakuten: "SEARCH",
                rambler: "SEARCH",
                "rambler.ru": "SEARCH",
                ravelry: "SOCIAL",
                "ravelry.com": "SOCIAL",
                reddit: "SOCIAL",
                redux: "SOCIAL",
                "redux.com": "SOCIAL",
                renren: "SOCIAL",
                "renren.com": "SOCIAL",
                "researchgate.net": "SOCIAL",
                reunion: "SOCIAL",
                "reunion.com": "SOCIAL",
                reverbnation: "SOCIAL",
                "reverbnation.com": "SOCIAL",
                "rtl.de": "SOCIAL",
                ryze: "SOCIAL",
                "ryze.com": "SOCIAL",
                "s3.amazonaws.com": "SHOPPING",
                salespider: "SOCIAL",
                "salespider.com": "SOCIAL",
                "scoop.it": "SOCIAL",
                screenrant: "SOCIAL",
                "screenrant.com": "SOCIAL",
                scribd: "SOCIAL",
                "scribd.com": "SOCIAL",
                scvngr: "SOCIAL",
                "scvngr.com": "SOCIAL",
                "se.search.yahoo.com": "SEARCH",
                "se.shopping.net": "SHOPPING",
                "search-results": "SEARCH",
                "search.aol.co.uk": "SEARCH",
                "search.aol.com": "SEARCH",
                "search.google.com": "SEARCH",
                "search.smt.docomo.ne.jp": "SEARCH",
                "search.ukr.net": "SEARCH",
                secondlife: "SOCIAL",
                "secondlife.com": "SOCIAL",
                "secureurl.ukr.net": "SEARCH",
                serverfault: "SOCIAL",
                "serverfault.com": "SOCIAL",
                seznam: "SEARCH",
                "sg.search.yahoo.com": "SEARCH",
                shareit: "SOCIAL",
                sharethis: "SOCIAL",
                "sharethis.com": "SOCIAL",
                "shop.app": "SHOPPING",
                shopify: "SHOPPING",
                "shopify.com": "SHOPPING",
                "shopping.naver.com": "SHOPPING",
                "shopping.yahoo.co.jp": "SHOPPING",
                "shopping.yahoo.com": "SHOPPING",
                shopzilla: "SHOPPING",
                "shopzilla.com": "SHOPPING",
                "shvoong.com": "SOCIAL",
                "simplycodes.com": "SHOPPING",
                "sites.google.com": "SOCIAL",
                skype: "SOCIAL",
                skyrock: "SOCIAL",
                "skyrock.com": "SOCIAL",
                "slashdot.org": "SOCIAL",
                "slideshare.net": "SOCIAL",
                "smartnews.com": "SOCIAL",
                snapchat: "SOCIAL",
                "snapchat.com": "SOCIAL",
                "so.com": "SEARCH",
                "sociallife.com.br": "SOCIAL",
                socialvibe: "SOCIAL",
                "socialvibe.com": "SOCIAL",
                sogou: "SEARCH",
                "sp-web.search.auone.jp": "SEARCH",
                "spaces.live.com": "SOCIAL",
                spoke: "SOCIAL",
                "spoke.com": "SOCIAL",
                spruz: "SOCIAL",
                "spruz.com": "SOCIAL",
                "ssense.com": "SOCIAL",
                stackapps: "SOCIAL",
                "stackapps.com": "SOCIAL",
                stackexchange: "SOCIAL",
                "stackexchange.com": "SOCIAL",
                stackoverflow: "SOCIAL",
                "stackoverflow.com": "SOCIAL",
                "stardoll.com": "SOCIAL",
                startsiden: "SEARCH",
                "startsiden.no": "SEARCH",
                stickam: "SOCIAL",
                "stickam.com": "SOCIAL",
                "store.shopping.yahoo.co.jp": "SHOPPING",
                stripe: "SHOPPING",
                "stripe.com": "SHOPPING",
                "studivz.net": "SOCIAL",
                "suche.aol.de": "SEARCH",
                "suomi24.fi": "SOCIAL",
                superuser: "SOCIAL",
                "superuser.com": "SOCIAL",
                sweeva: "SOCIAL",
                "sweeva.com": "SOCIAL",
                "t.me": "SOCIAL",
                tagged: "SOCIAL",
                "tagged.com": "SOCIAL",
                taggedmail: "SOCIAL",
                "taggedmail.com": "SOCIAL",
                talkbiznow: "SOCIAL",
                "talkbiznow.com": "SOCIAL",
                "taringa.net": "SOCIAL",
                techmeme: "SOCIAL",
                "techmeme.com": "SOCIAL",
                ted: "VIDEO",
                "ted.com": "VIDEO",
                tencent: "SOCIAL",
                "tencent.com": "SOCIAL",
                terra: "SEARCH",
                "th.search.yahoo.com": "SEARCH",
                tiktok: "SOCIAL",
                "tiktok.com": "SOCIAL",
                tinyurl: "SOCIAL",
                "tinyurl.com": "SOCIAL",
                toolbox: "SOCIAL",
                "toolbox.com": "SOCIAL",
                "touch.facebook.com": "SOCIAL",
                "tr.pinterest.com": "SOCIAL",
                "tr.search.yahoo.com": "SEARCH",
                travellerspoint: "SOCIAL",
                "travellerspoint.com": "SOCIAL",
                tripadvisor: "SOCIAL",
                "tripadvisor.com": "SOCIAL",
                trombi: "SOCIAL",
                "trombi.com": "SOCIAL",
                tudou: "SOCIAL",
                "tudou.com": "SOCIAL",
                tuenti: "SOCIAL",
                "tuenti.com": "SOCIAL",
                tumblr: "SOCIAL",
                "tut.by": "SEARCH",
                "tw.search.yahoo.com": "SEARCH",
                tweetdeck: "SOCIAL",
                "tweetdeck.com": "SOCIAL",
                twitch: "VIDEO",
                "twitch.tv": "VIDEO",
                "twoo.com": "SOCIAL",
                typepad: "SOCIAL",
                "typepad.com": "SOCIAL",
                "uk.search.yahoo.com": "SEARCH",
                "uk.shopping.net": "SHOPPING",
                ukr: "SEARCH",
                "unblog.fr": "SOCIAL",
                "urbanspoon.com": "SOCIAL",
                "us.search.yahoo.com": "SEARCH",
                "ushareit.com": "SOCIAL",
                "ushi.cn": "SOCIAL",
                utreon: "VIDEO",
                "utreon.com": "VIDEO",
                vampirefreaks: "SOCIAL",
                "vampirefreaks.com": "SOCIAL",
                vampirerave: "SOCIAL",
                "vampirerave.com": "SOCIAL",
                veoh: "VIDEO",
                "veoh.com": "VIDEO",
                "vg.no": "SOCIAL",
                "viadeo.journaldunet.com": "VIDEO",
                "video.ibm.com": "SOCIAL",
                vimeo: "VIDEO",
                "vimeo.com": "VIDEO",
                virgilio: "SEARCH",
                "vk.com": "SOCIAL",
                "vkontakte.ru": "SOCIAL",
                "vn.search.yahoo.com": "SEARCH",
                wakoopa: "SOCIAL",
                "wakoopa.com": "SOCIAL",
                walmart: "SHOPPING",
                "walmart.com": "SHOPPING",
                "wap.sogou.com": "SEARCH",
                wattpad: "SOCIAL",
                "wattpad.com": "SOCIAL",
                "web.facebook.com": "SOCIAL",
                "web.skype.com": "SOCIAL",
                "webmaster.yandex.ru": "SEARCH",
                "websearch.rakuten.co.jp": "SEARCH",
                webshots: "SOCIAL",
                "webshots.com": "SOCIAL",
                wechat: "SOCIAL",
                "wechat.com": "SOCIAL",
                weebly: "SOCIAL",
                "weebly.com": "SOCIAL",
                weibo: "SOCIAL",
                "wer-weiss-was.de": "SOCIAL",
                weread: "SOCIAL",
                "weread.com": "SOCIAL",
                whatsapp: "SOCIAL",
                "whatsapp.com": "SOCIAL",
                "wiki.answers.com": "SOCIAL",
                "wikihow.com": "SOCIAL",
                "wikitravel.org": "SOCIAL",
                wistia: "VIDEO",
                "wistia.com": "VIDEO",
                "woot.com": "SOCIAL",
                wordpress: "SOCIAL",
                "wordpress.com": "SOCIAL",
                "wordpress.org": "SOCIAL",
                xanga: "SOCIAL",
                "xanga.com": "SOCIAL",
                xing: "SOCIAL",
                "yahoo-mbga.jp": "SOCIAL",
                "yahoo.com": "SEARCH",
                yammer: "SOCIAL",
                "yammer.com": "SOCIAL",
                yandex: "SEARCH",
                "yandex.by": "SEARCH",
                "yandex.com.tr": "SEARCH",
                "yandex.fr": "SEARCH",
                "yandex.kz": "SEARCH",
                "yandex.ru": "SEARCH",
                "yandex.ua": "SEARCH",
                "yandex.uz": "SEARCH",
                "yelp.co.uk": "SOCIAL",
                youku: "VIDEO",
                "youku.com": "VIDEO",
                "youroom.in": "SOCIAL",
                "youtube.com": "VIDEO",
                "za.pinterest.com": "SOCIAL",
                zalo: "SOCIAL",
                "zen.yandex.ru": "SEARCH",
                "zoo.gr": "SOCIAL",
                zooppa: "SOCIAL",
                "zooppa.com": "SOCIAL",
                "youtube.reachcodetesting.net": "VIDEO",
                "ebay.reachcodetesting.net": "SHOPPING",
            };
        void 0 !== document &&
            (function (e, t) {
                var i = e.createElement("style");
                if (
                    (e.getElementsByTagName("head")[0].appendChild(i),
                    i.styleSheet)
                )
                    i.styleSheet.disabled || (i.styleSheet.cssText = t);
                else
                    try {
                        i.innerHTML = t;
                    } catch (e) {
                        i.innerText = t;
                    }
            })(
                document,
                '#rl-email-container{display:block;height:100%;left:0;position:fixed;top:0;width:100%;z-index:99998}#rl-email{background-color:#fff;border:30px solid #fff;border-radius:5px;font-family:Arial,sans-serif;font-size:16px;margin:30px auto;position:relative;width:400px;z-index:99999}#rl-email .rl-email-company-name{font-size:12px;font-weight:700;letter-spacing:5px;margin:0 0 1em 0;text-align:center;text-transform:uppercase}#rl-email input,#rl-email textarea{color:#222;font-family:Arial,sans-serif;font-size:18px;padding:5px 5px 4px;line-height:normal;border-width:1px;border-color:gray}#rl-email textarea{height:3em;margin:0 0 1.5em 2px}#rl-email label{color:#444;display:block;font-family:Arial,sans-serif;font-size:16px;text-align:left;width:100%;left:auto;position:static}#rl-email label.error .rl-email-required{color:#b94a48}#rl-email label.error input,#rl-email label.error textarea{background-color:#fff8e1}#rl-email label#rl-do-not-email-label{text-align:justify;font-size:12px;margin:-1.5em 0 1.5em 2px;clear:both}#rl-email .rl-email-required{color:#999;margin-left:.5em;font-weight:700;font-size:12px;text-transform:uppercase}#rl-email .rl-email-field{display:block;width:96%}#rl-email .rl-button{display:inline-block;border-radius:3px;cursor:pointer;font-family:arial;font-size:15px;font-weight:700;margin:3px;padding:6px 24px;text-decoration:none}#rl-email .rl-button[type=submit]{-moz-box-shadow:inset 0 1px 0 0 #54a3f7;-webkit-box-shadow:inset 0 1px 0 0 #54a3f7;box-shadow:inset 0 1px 0 0 #54a3f7;background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#007dc1),color-stop(1,#0061a7));background:-moz-linear-gradient(top,#007dc1 5%,#0061a7 100%);background:-webkit-linear-gradient(top,#007dc1 5%,#0061a7 100%);background:-o-linear-gradient(top,#007dc1 5%,#0061a7 100%);background:-ms-linear-gradient(top,#007dc1 5%,#0061a7 100%);background:linear-gradient(to bottom,#007dc1 5%,#0061a7 100%);background-color:#007dc1;border:1px solid #124d77;color:#fff;text-shadow:0 1px 0 #154682}#rl-email .rl-button:hover[type=submit]{background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#0061a7),color-stop(1,#007dc1));background:-moz-linear-gradient(top,#0061a7 5%,#007dc1 100%);background:-webkit-linear-gradient(top,#0061a7 5%,#007dc1 100%);background:-o-linear-gradient(top,#0061a7 5%,#007dc1 100%);background:-ms-linear-gradient(top,#0061a7 5%,#007dc1 100%);background:linear-gradient(to bottom,#0061a7 5%,#007dc1 100%);background-color:#0061a7}#rl-email .rl-button[type=button]{-moz-box-shadow:inset 0 1px 0 0 #fff;-webkit-box-shadow:inset 0 1px 0 0 #fff;box-shadow:inset 0 1px 0 0 #fff;background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#fff),color-stop(1,#e3e0e3));background:-moz-linear-gradient(top,#fff 5%,#e3e0e3 100%);background:-webkit-linear-gradient(top,#fff 5%,#e3e0e3 100%);background:-o-linear-gradient(top,#fff 5%,#e3e0e3 100%);background:-ms-linear-gradient(top,#fff 5%,#e3e0e3 100%);background:linear-gradient(to bottom,#fff 5%,#e3e0e3 100%);background-color:#fff;border:1px solid #ccc;color:#666;text-shadow:0 1px 0 #fff}#rl-email .rl-button:hover[type=button]{background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#e3e0e3),color-stop(1,#fff));background:-moz-linear-gradient(top,#e3e0e3 5%,#fff 100%);background:-webkit-linear-gradient(top,#e3e0e3 5%,#fff 100%);background:-o-linear-gradient(top,#e3e0e3 5%,#fff 100%);background:-ms-linear-gradient(top,#e3e0e3 5%,#fff 100%);background:linear-gradient(to bottom,#e3e0e3 5%,#fff 100%);background-color:#e3e0e3}#rl-email-container .rl-email-overlay-win{background-color:#000;height:100%;left:0;opacity:.8;position:absolute;top:0;width:100%;z-index:9998}@media only screen and (max-width:480px){#rl-email-container .rl-email-overlay-win{background-color:#fff;opacity:1}#rl-email{border:10px solid #fff;border-radius:0;left:0;margin-left:0;margin-top:0;top:0;width:90%}}#rl-privacy-notice-container{z-index:99999;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:#333!important;position:relative}#rl-privacy-notice-top{position:absolute}#rl-privacy-text-container{padding:10px 20px;margin:0 auto}#rl-privacy-text{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height:1.3;font-size:14px}#rl-privacy-text a{color:inherit!important;text-decoration:underline!important}button#rl-privacy-accept,button#rl-privacy-decline{background:#5688ea!important;position:absolute;line-height:1.1;margin:5px 10px;cursor:pointer;padding:8px 18px;border-radius:3px;border:1px solid #416dc4}button#rl-privacy-accept{right:10px;bottom:5px}button#rl-privacy-decline{left:10px;bottom:5px}.rl-accept-text,.rl-decline-text{font-size:15px;color:#fff!important;font-weight:700;letter-spacing:0}.rl-dismiss-text{display:flex;align-items:center}.rl-dismiss{padding-left:10px;font-style:bold;font-size:1.5em}.rl-privacy-wrapper{position:fixed;bottom:0;margin-bottom:8px;margin-right:8px}.rl-privacy-notice{background-color:#fff!important;opacity:1;top:0;left:0;right:0;border-bottom:1px solid #ddd;box-shadow:0 1px 8px rgba(0,0,0,.17);padding-bottom:45px}'
            );
        var util = (function () {
                var e;
                function useCleanJSON(t) {
                    if (!e) {
                        var i = document.createElement("iframe");
                        i.setAttribute("id", "rl-iframe-clean-json"),
                            i.setAttribute("style", "display: none;"),
                            i.setAttribute("title", "No Readable Content"),
                            i.setAttribute("aria-hidden", "true"),
                            document.head.appendChild(i),
                            (e = i.contentWindow.JSON);
                    }
                    return t(e);
                }
                return {
                    ajax: function (e) {
                        var t = e.url || "",
                            i = e.method || "GET",
                            o = e.callback || function () {},
                            r = e.payload || "",
                            n = e.timeout || 5e3;
                        if (XMLHttpRequest) {
                            var a = new XMLHttpRequest();
                            if ("withCredentials" in a)
                                return (
                                    a.open(i, t, !0),
                                    a.setRequestHeader(
                                        "Content-type",
                                        "application/json"
                                    ),
                                    (a.timeout = n),
                                    (a.onreadystatechange = function () {
                                        4 === a.readyState &&
                                            (a.status >= 400 &&
                                                window.RLCAP.onFault(
                                                    "XHR error " +
                                                        a.status +
                                                        " for url: " +
                                                        a._url,
                                                    "util.ajax"
                                                ),
                                            0 === a.status &&
                                                a._url &&
                                                a._url.indexOf("/posts") > -1 &&
                                                window.RLCAP.onFault(
                                                    "XHR form post error of status 0 on webpage: " +
                                                        localEnv.getPageUri()
                                                            .href,
                                                    "util.ajax"
                                                ),
                                            o(a.responseText, a.status));
                                    }),
                                    (a.ontimeout = function () {
                                        window.RLCAP.onFault(
                                            "XHR timeout",
                                            "Method: " + i + "  URL: " + t
                                        ),
                                            o();
                                    }),
                                    void a.send(util.stringify(r))
                                );
                        } else
                            window.RLCAP.onFault(
                                "CORS not supported",
                                "util.ajax"
                            );
                    },
                    bind: function (e, t) {
                        return function () {
                            return e.apply(t, util.makeArray(arguments));
                        };
                    },
                    clone: function (e) {
                        try {
                            return util.parse(util.stringify(e));
                        } catch (t) {
                            return e;
                        }
                    },
                    convertToUTF8: function (e) {
                        var t;
                        try {
                            t = decodeURIComponent(escape(e));
                        } catch (t) {
                            return e;
                        }
                        return t;
                    },
                    debounce: function (e, t, i) {
                        var o,
                            debounced = function () {
                                var r = this,
                                    n = Array.prototype.slice.call(
                                        arguments,
                                        0
                                    ),
                                    a = i && !o;
                                clearTimeout(o),
                                    (o = setTimeout(function () {
                                        (o = null), i || e.apply(r, n);
                                    }, t)),
                                    a && e.apply(r, n);
                            };
                        return (
                            (debounced.clear = function () {
                                clearTimeout(o), (o = null);
                            }),
                            debounced
                        );
                    },
                    defer: function (e) {
                        setTimeout(e, 0);
                    },
                    every: function (e, t) {
                        if (util.isEmpty(e)) return !0;
                        var i = !0;
                        return (
                            util.forEach(t, function (o, r) {
                                util.isArray(e)
                                    ? util.forEach(e, function (e) {
                                          util.every(e, t) || (i = !1);
                                      })
                                    : (e.hasOwnProperty(o) && e[o] === r) ||
                                      (i = !1);
                            }),
                            i
                        );
                    },
                    extend: function () {
                        var e, t, i;
                        return (
                            util.isBoolean(arguments[0])
                                ? ((e = arguments[0]),
                                  (t = arguments[1]),
                                  (i = Array.prototype.slice.call(
                                      arguments,
                                      2
                                  )))
                                : ((e = !1),
                                  (t = arguments[0]),
                                  (i = Array.prototype.slice.call(
                                      arguments,
                                      1
                                  ))),
                            util.forEach(
                                i,
                                function (i) {
                                    util.forEach(
                                        i,
                                        function (i, o) {
                                            e && util.isPlainObject(o)
                                                ? ((t[i] = t[i] || {}),
                                                  util.extend(!0, t[i], o))
                                                : null !== o &&
                                                  o !== undefined &&
                                                  (t[i] = o);
                                        },
                                        this
                                    );
                                },
                                this
                            ),
                            t
                        );
                    },
                    forEach: function (e, t, i) {
                        if (e && util.isFunction(t))
                            if (((i = i || this), util.isArray(e)))
                                for (var o = 0; o < e.length; o++)
                                    t.call(i, e[o], o, e);
                            else if (util.isObject(e))
                                for (var r in e)
                                    e.hasOwnProperty(r) &&
                                        t.call(i, r, e[r], e);
                    },
                    getCookie: function (e) {
                        return (
                            decodeURIComponent(
                                document.cookie.replace(
                                    new RegExp(
                                        "(?:(?:^|.*;)\\s*" +
                                            encodeURIComponent(e).replace(
                                                /[\-\.\+\*]/g,
                                                "\\$&"
                                            ) +
                                            "\\s*\\=\\s*([^;]*).*$)|^.*$"
                                    ),
                                    "$1"
                                )
                            ) || null
                        );
                    },
                    getProperty: function (e, t) {
                        for (
                            var i = (t = (t = t.replace(
                                    /\[(\w+)\]/g,
                                    ".$1"
                                )).replace(/^\./, "")).split("."),
                                o = 0;
                            o < i.length;
                            o++
                        ) {
                            var r = i[o];
                            if (!util.isObject(e) || !(r in e)) return;
                            e = e[r];
                        }
                        return e;
                    },
                    getScript: function (e) {
                        var t = document.createElement("script");
                        (t.src = e.src),
                            (function attachLoadCallbacks(e, t, i) {
                                e.onload === undefined ||
                                e.onerror === undefined
                                    ? (e.onreadystatechange = function () {
                                          ("complete" !== this.readyState &&
                                              "loaded" !== this.readyState) ||
                                              ((e.onreadystatechange = null),
                                              t());
                                      })
                                    : ((e.onload = t), (e.onerror = i));
                            })(t, e.success, e.error),
                            document
                                .getElementsByTagName("head")[0]
                                .appendChild(t);
                    },
                    isArray: function (e) {
                        return Array.isArray(e);
                    },
                    isBoolean: function (e) {
                        return !0 === e || !1 === e;
                    },
                    isEmpty: function (e) {
                        if (util.isArray(e) || util.isString(e))
                            return 0 === e.length;
                        if (util.isObject(e)) {
                            var t = 0;
                            return (
                                util.forEach(e, function () {
                                    t++;
                                }),
                                0 === t
                            );
                        }
                    },
                    isFunction: function (e) {
                        return !(!e || "function" != typeof e);
                    },
                    isNumeric: function (e) {
                        var t = typeof e;
                        return (
                            ("number" === t || "string" === t) &&
                            e - parseFloat(e) + 1 >= 0
                        );
                    },
                    isRegExp: function (e) {
                        return (
                            util.isObject(e) &&
                            "[object RegExp]" ===
                                Object.prototype.toString.call(e)
                        );
                    },
                    isObject: function (e) {
                        return !(!e || "object" != typeof e);
                    },
                    isPlainObject: function (e) {
                        if (
                            !util.isObject(e) ||
                            "[object Object]" !==
                                Object.prototype.toString.call(e)
                        )
                            return !1;
                        var t = Object.prototype;
                        if (
                            ("function" == typeof e.constructor &&
                                (t = Object.getPrototypeOf(e)),
                            null === t)
                        )
                            return !0;
                        var i = t.constructor;
                        return (
                            "function" == typeof i &&
                            "[object Function]" ===
                                Object.prototype.toString.call(i)
                        );
                    },
                    isString: function (e) {
                        return "string" == typeof e;
                    },
                    makeArray: function (e) {
                        return Array.prototype.slice.call(e, 0);
                    },
                    memoize: function (e) {
                        var result = function () {
                            var t = Array.prototype.slice.call(arguments);
                            return (
                                (e.memoize = e.memoize || {}),
                                t in e.memoize
                                    ? e.memoize[t]
                                    : (e.memoize[t] = e.apply(this, t))
                            );
                        };
                        return (
                            (result.forget = function () {
                                delete e.memoize;
                            }),
                            result
                        );
                    },
                    now: function () {
                        if (Date)
                            return Date.now
                                ? Date.now()
                                : Date.prototype.getTime
                                ? new Date().getTime()
                                : void 0;
                    },
                    onBodyDefined: function (e) {
                        if (document.body) util.defer(e);
                        else {
                            var t = new MutationObserver(function () {
                                document.body &&
                                    (t.disconnect(), util.defer(e));
                            });
                            t.observe(document.documentElement, {
                                subtree: !0,
                                childList: !0,
                            });
                        }
                    },
                    parse: function (e) {
                        return (
                            useCleanJSON(function (t) {
                                var i;
                                try {
                                    i = t.parse(e);
                                } catch (e) {
                                    if ("SyntaxError" !== e.name) throw e;
                                }
                                return i;
                            }) || null
                        );
                    },
                    randomString: function (e) {
                        e = e || 9;
                        for (
                            var t = "",
                                i =
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                                o = 0;
                            o < e;
                            o++
                        )
                            t += i.charAt(Math.floor(62 * Math.random()));
                        return t;
                    },
                    randomInteger: function (e) {
                        return (e = e || 10), Math.floor(Math.random() * e);
                    },
                    generateUuid: function () {
                        var e = new Date().getTime();
                        return (
                            "undefined" != typeof performance &&
                                "function" == typeof performance.now &&
                                (e += performance.now()),
                            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                                /[xy]/g,
                                function (t) {
                                    var i = (e + 16 * Math.random()) % 16 | 0;
                                    return (
                                        (e = Math.floor(e / 16)),
                                        ("x" === t ? i : (3 & i) | 8).toString(
                                            16
                                        )
                                    );
                                }
                            )
                        );
                    },
                    removeCookie: function (e, t = {}) {
                        var i = `${encodeURIComponent(e)}=`,
                            o = t.domain ? `;domain=${t.domain}` : "",
                            r =
                                "https:" === document.location.protocol
                                    ? ";secure"
                                    : "";
                        document.cookie = `${i}${o};max-age=-1;path=/;samesite=lax${r}`;
                    },
                    setCookie: function (e, t, i = {}) {
                        var o = `${encodeURIComponent(e)}=${encodeURIComponent(
                                t
                            )}`,
                            r = i.domain ? `;domain=${i.domain}` : "",
                            n = i.maxAge ? `;max-age=${i.maxAge}` : "",
                            a =
                                "https:" === document.location.protocol
                                    ? ";secure"
                                    : "";
                        document.cookie = `${o}${r}${n};path=/;samesite=lax${a}`;
                    },
                    stringify: function (e) {
                        var t, i, o, r;
                        return (
                            Object.prototype.toJSON &&
                                ((t = Object.prototype.toJSON),
                                delete Object.prototype.toJSON),
                            Array.prototype.toJSON &&
                                ((i = Array.prototype.toJSON),
                                delete Array.prototype.toJSON),
                            String.prototype.toJSON &&
                                ((o = String.prototype.toJSON),
                                delete String.prototype.toJSON),
                            (r = useCleanJSON(function (t) {
                                return t.stringify(e);
                            })),
                            t && (Object.prototype.toJSON = t),
                            i && (Array.prototype.toJSON = i),
                            o && (String.prototype.toJSON = o),
                            r
                        );
                    },
                    trim: function (e, t) {
                        return util.isString(e)
                            ? !1 !== t && e.trim
                                ? e.trim()
                                : e.replace(
                                      /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                                      ""
                                  )
                            : e;
                    },
                    createExecutableScriptElement: function (e) {
                        var t = document.createElement("script");
                        return (
                            util.forEach(
                                util.makeArray(e.attributes),
                                function (e) {
                                    t.setAttribute(e.name, e.value);
                                }
                            ),
                            (t.innerHTML = e.innerHTML),
                            t
                        );
                    },
                    getResourceLoadDuration: function (e, t) {
                        if (
                            (t || (t = window.performance), !t || !t.getEntries)
                        )
                            return 0;
                        var i = t.getEntries();
                        if (i)
                            for (var o = 0; o < i.length; o++)
                                if (-1 !== i[o].name.indexOf(e))
                                    return i[o].duration;
                        return 0;
                    },
                };
            })(),
            urlUtil = (function () {
                function decode(e) {
                    try {
                        return decodeURIComponent(e);
                    } catch (t) {
                        if (t instanceof URIError) return e;
                        throw t;
                    }
                }
                function escapeRegExp(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                }
                var e = {
                    deparam: function (t) {
                        return e.parse("?" + t).queryKey;
                    },
                    doesHostMatch: function (e, t) {
                        if ("*" === t) return !0;
                        if ("*." === t.substring(0, 2)) {
                            var i = escapeRegExp(t.substring(2));
                            return !!e.match(
                                new RegExp("(^|\\.)" + i + "$", "i")
                            );
                        }
                        return e.toLowerCase() === t.toLowerCase();
                    },
                    doesPathMatch: function (e, t) {
                        return (
                            (t = escapeRegExp(t).replace(/\\\*/g, ".*")),
                            !!e.match(new RegExp("^" + t + "$", "i"))
                        );
                    },
                    doesProtocolMatch: function (e, t) {
                        return "*" === t
                            ? !!e.match(/^https?/i)
                            : e.toLowerCase() === t.toLowerCase();
                    },
                    doesUrlMatch: function (t, i) {
                        var o = e.parse(t),
                            r = e.parse(i);
                        return (
                            o.query && (o.path += "?" + o.query),
                            r.query && (r.path += "?" + r.query),
                            e.doesProtocolMatch(o.protocol, r.protocol) &&
                                e.doesHostMatch(o.host, r.host) &&
                                e.doesPathMatch(o.path, r.path)
                        );
                    },
                    param: function (e) {
                        var t = [];
                        for (var i in e)
                            e.hasOwnProperty(i) &&
                                t.push(
                                    encodeURIComponent(i) +
                                        "=" +
                                        encodeURIComponent(e[i])
                                );
                        return t.join("&");
                    },
                    parse: function (e) {
                        for (
                            var t = {
                                    strictMode: !1,
                                    key: [
                                        "source",
                                        "protocol",
                                        "authority",
                                        "userInfo",
                                        "user",
                                        "password",
                                        "host",
                                        "port",
                                        "relative",
                                        "path",
                                        "directory",
                                        "file",
                                        "query",
                                        "anchor",
                                    ],
                                    q: {
                                        name: "queryKey",
                                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g,
                                    },
                                    parser: {
                                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@?]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                    },
                                },
                                i =
                                    t.parser[
                                        t.strictMode ? "strict" : "loose"
                                    ].exec(e),
                                o = {},
                                r = 14;
                            r--;

                        )
                            o[t.key[r]] = i[r] || "";
                        (o[t.q.name] = {}),
                            o[t.key[12]].replace(
                                t.q.parser,
                                function (e, i, r) {
                                    i &&
                                        ((i = decode(i)),
                                        (r = decode(r)),
                                        o[t.q.name][i] &&
                                        o[t.q.name][i].constructor === Array
                                            ? o[t.q.name][i].push(r)
                                            : o[t.q.name][i]
                                            ? (o[t.q.name][i] = [
                                                  o[t.q.name][i],
                                                  r,
                                              ])
                                            : (o[t.q.name][i] = r));
                                }
                            );
                        var n = o.host.split(".");
                        return (
                            (o.rootDomain =
                                n.length >= 2
                                    ? n[n.length - 2] + "." + n[n.length - 1]
                                    : ""),
                            (o.href = e),
                            o
                        );
                    },
                };
                return e;
            })(),
            localEnv =
                ((PROXY_DOMAINS = [
                    "avxtrk.com",
                    "ddcsem.com",
                    "ezlcl.com",
                    "reachlocal.com",
                    "reachlocal.net",
                    "rtrk.com",
                    "rtrk1.com",
                    "rtrk2.com",
                    "rtrk5.com",
                    "rtrk.ca",
                    "rtrk.com.br",
                    "rtrk.mx",
                    "rtrk.cl",
                    "rtrk.com.au",
                    "rtrk.co.nz",
                    "rtrk.sg",
                    "rtrk.co.uk",
                    "rtrk.at",
                    "rtrk.be",
                    "rtrk.cz",
                    "rtrk.de",
                    "rtrk.nl",
                    "rtrk.pl",
                    "rtrk1.ru",
                    "rtrk.sk",
                    "rtrk.jp",
                    "search-dealer.com",
                    "smrtlnk.com",
                    "trvlclick.com",
                ]),
                (RCOD_DOMAINS = ["rcod.rtrk.com", "rcod.qa.rtrk.com"]),
                (BASE_SITE_ID_KEY = "capture_base_site_id"),
                (OVERRIDE_SITE_ID_KEY = "capture_override_site_id"),
                (STORAGE_KEYS_LAST_KNOWN_ACTIVITY =
                    "rl_last_known_activity_at"),
                (STORAGE_KEYS_OS = "rl_os"),
                (STORAGE_KEYS_INITIAL_REFERRER = "rl_initial_referrer"),
                (STORAGE_KEYS_INITIAL_PAGE_URI = "rl_initial_page_uri"),
                (_localEnv = {
                    getBaseSiteId: util.memoize(function () {
                        var e =
                            _localEnv.getPageUri().queryKey.rl_siteid ||
                            window.rl_siteid ||
                            (window.rl_widget_cfg || {}).id;
                        try {
                            return (
                                e && localStorage.setItem(BASE_SITE_ID_KEY, e),
                                localStorage.getItem(BASE_SITE_ID_KEY)
                            );
                        } catch (t) {
                            return e;
                        }
                    }),
                    getInitialReferrer: function () {
                        return localStorage.getItem(
                            STORAGE_KEYS_INITIAL_REFERRER
                        );
                    },
                    getInitialUri: util.memoize(function () {
                        return urlUtil.parse(
                            localStorage.getItem(STORAGE_KEYS_INITIAL_PAGE_URI)
                        );
                    }),
                    getOS: function () {
                        try {
                            return localStorage.getItem(STORAGE_KEYS_OS);
                        } catch (e) {
                            return "Unknown OS. LocalStorage disabled";
                        }
                    },
                    getOSFromUserAgent: function () {
                        var e = "-",
                            t = this.getUserAgent(),
                            i = e,
                            o = [
                                {
                                    s: "Windows 10",
                                    r: /(Windows 10.0|Windows NT 10.0)/,
                                },
                                {
                                    s: "Windows 8.1",
                                    r: /(Windows 8.1|Windows NT 6.3)/,
                                },
                                {
                                    s: "Windows 8",
                                    r: /(Windows 8|Windows NT 6.2)/,
                                },
                                {
                                    s: "Windows 7",
                                    r: /(Windows 7|Windows NT 6.1)/,
                                },
                                { s: "Windows Vista", r: /Windows NT 6.0/ },
                                {
                                    s: "Windows Server 2003",
                                    r: /Windows NT 5.2/,
                                },
                                {
                                    s: "Windows XP",
                                    r: /(Windows NT 5.1|Windows XP)/,
                                },
                                {
                                    s: "Windows 2000",
                                    r: /(Windows NT 5.0|Windows 2000)/,
                                },
                                {
                                    s: "Windows ME",
                                    r: /(Win 9x 4.90|Windows ME)/,
                                },
                                { s: "Windows 98", r: /(Windows 98|Win98)/ },
                                {
                                    s: "Windows 95",
                                    r: /(Windows 95|Win95|Windows_95)/,
                                },
                                {
                                    s: "Windows NT 4.0",
                                    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
                                },
                                { s: "Windows CE", r: /Windows CE/ },
                                { s: "Windows 3.11", r: /Win16/ },
                                { s: "Chrome OS", r: /CrOS/ },
                                { s: "Android", r: /Android/ },
                                { s: "Open BSD", r: /OpenBSD/ },
                                { s: "Sun OS", r: /SunOS/ },
                                { s: "Linux", r: /(Linux|X11)/ },
                                { s: "iOS", r: /(iPhone|iPad|iPod)/ },
                                { s: "Mac OS X", r: /Mac OS X/ },
                                {
                                    s: "Mac OS",
                                    r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
                                },
                                { s: "QNX", r: /QNX/ },
                                { s: "UNIX", r: /UNIX/ },
                                { s: "BeOS", r: /BeOS/ },
                                { s: "OS/2", r: /OS\/2/ },
                            ];
                        for (var r in o)
                            if (o.hasOwnProperty(r)) {
                                var n = o[r];
                                if (n.r.test(t)) {
                                    i = n.s;
                                    break;
                                }
                            }
                        var a = e;
                        switch (
                            (/Windows/.test(i) &&
                                ((a = /Windows (.*)/.exec(i)[1]),
                                (i = "Windows")),
                            i)
                        ) {
                            case "Mac OS X":
                                a = /Mac OS X ((10|11)[\.\_\d]+)/.exec(t)[1];
                                break;
                            case "Android":
                                a = /Android ([\.\_\d]+)/.exec(t)[1];
                                break;
                            case "Chrome OS":
                                a = /Chrome\/(\d+\.\d+\.\d+\.\d+)/.exec(t)[1];
                                break;
                            case "iOS":
                                null !==
                                    (a = /OS (\d+)_(\d+)_?(\d+)?/.exec(t)) &&
                                    (a = a[1] + "." + a[2] + "." + (a[3] || 0));
                        }
                        return (
                            (i !== e && a !== e) ||
                                window.RLCAP.onFault(
                                    "Unknown OS or OS Version",
                                    t
                                ),
                            i + " " + a
                        );
                    },
                    getOverrideSiteId: util.memoize(function () {
                        var e = _localEnv.getPageUri().queryKey,
                            t = util.isString(window.rl_override_siteid)
                                ? window.rl_override_siteid
                                : "";
                        return (
                            e.rl_override_siteid ||
                            t ||
                            localStorage.getItem(OVERRIDE_SITE_ID_KEY)
                        );
                    }),
                    getPageUri: util.memoize(function () {
                        return urlUtil.parse(window.location.href);
                    }),
                    getProxiedUri: util.memoize(function () {
                        var e = _localEnv.getPageUri(),
                            t = e.host.toLowerCase();
                        if (_localEnv.isProxiedStatic()) {
                            var i = configurator.getProxiedUrl(t);
                            if (i)
                                return urlUtil.parse(e.href.replace(e.host, i));
                        }
                        if (_localEnv.isProxiedDynamic()) {
                            var o = t
                                .slice(3, t.indexOf("."))
                                .replace(/--/g, ".");
                            return urlUtil.parse(e.href.replace(e.host, o));
                        }
                        return e;
                    }),
                    getReferrer: function () {
                        var e = util.getCookie("RlocalHilite");
                        return e
                            ? urlUtil.deparam(e).se_refer
                            : urlUtil.parse(window.location).queryKey
                                  .redirect_referrer || document.referrer;
                    },
                    getReferrerUri: util.memoize(function () {
                        return urlUtil.parse(_localEnv.getReferrer());
                    }),
                    getUniversalSimplifiPixel: util.memoize(function () {
                        var e = configurator.getPlatform(),
                            t = environment.universalSimplifiPixel[e];
                        return t || null;
                    }),
                    getUserAgent: function () {
                        return navigator.userAgent;
                    },
                    isBlankSourceFrame: util.memoize(function () {
                        return !!window.rl_blank_source_frame;
                    }),
                    isBrowserABot: function () {
                        if (!BOTS) return !1;
                        var e = !1;
                        return (
                            util.forEach(BOTS, function (t, i) {
                                var o = i.join("|");
                                new RegExp(o, "i").test(
                                    window.navigator.userAgent
                                ) &&
                                    (localStorage.setItem(STORAGE_KEYS_OS, t),
                                    insights.track("LocalEnv::isABot"),
                                    (e = !0));
                            }),
                            e
                        );
                    },
                    isBrowserCompatible: util.memoize(function () {
                        return (
                            Array.prototype.indexOf &&
                            window.JSON &&
                            window.postMessage &&
                            window.addEventListener &&
                            window.XMLHttpRequest &&
                            window.fetch &&
                            window.Promise &&
                            localEnv.isWebStorageEnabled()
                        );
                    }),
                    isCookieEnabled: util.memoize(function () {
                        util.setCookie("rl_cookie_test", "test");
                        var e = "test" === util.getCookie("rl_cookie_test");
                        return util.removeCookie("rl_cookie_test"), e;
                    }),
                    isDebugMode: util.memoize(function () {
                        if (
                            "enabled" ===
                            sessionStorage.getItem("capture_debug_mode")
                        )
                            return !0;
                        const e =
                            !!window.location.search.match(/capture-debug/);
                        return (
                            e &&
                                sessionStorage.setItem(
                                    "capture_debug_mode",
                                    "enabled"
                                ),
                            e
                        );
                    }),
                    isDuda: util.memoize(function () {
                        return window.isDudaone;
                    }),
                    isEvaluationMode: util.memoize(function () {
                        var e;
                        return (
                            util.forEach(
                                util.makeArray(
                                    document.getElementsByTagName("script")
                                ),
                                function (t) {
                                    e ||
                                        !t.src ||
                                        t.src.indexOf("mms.js") < 0 ||
                                        (e = urlUtil.parse(t.src));
                                }
                            ),
                            !(!e || !e.queryKey || "true" !== e.queryKey.ev)
                        );
                    }),
                    isGlobalIgnoredUrl: function (e) {
                        if (!e) return !1;
                        var t = !1;
                        return (
                            util.forEach(
                                environment.globalIgnoredUrls,
                                function (i) {
                                    t || (t = urlUtil.doesUrlMatch(e, i));
                                }
                            ),
                            t
                        );
                    },
                    isIgnoredNetworkRequest: function (e) {
                        if (!e) return !1;
                        var t = configurator.getIgnoredNetworkRequestEntries(),
                            i = urlUtil.parse(e).host.toLowerCase(),
                            o = !1;
                        return (
                            util.forEach(t, function (t) {
                                if (!o) {
                                    var r = t.ignored_url;
                                    (i.endsWith(r.toLowerCase()) ||
                                        urlUtil.doesUrlMatch(e, r)) &&
                                        (o = !0);
                                }
                            }),
                            _localEnv.isDebugMode() &&
                                (o
                                    ? console.info(
                                          `[CaptureJS][isIgnoredNetworkRequest] Match found! Ignoring network request to ${e}`
                                      )
                                    : console.info(
                                          `[CaptureJS][isIgnoredNetworkRequest] No match found. Tracking network request to ${e}`
                                      )),
                            o
                        );
                    },
                    isKnownActive: function () {
                        var e = localStorage.getItem(
                            STORAGE_KEYS_LAST_KNOWN_ACTIVITY
                        );
                        if (null === e) return !1;
                        var t = parseInt(e, 10);
                        return !(isNaN(t) || util.now() - t > 18e5);
                    },
                    isNonRLPaid: util.memoize(function () {
                        var e = localEnv.getPageUri().query;
                        return !!(
                            e.match(/nonrlpaid/i) ||
                            e.match(/capturepaid/i) ||
                            e.match(/gclid/i)
                        );
                    }),
                    isPhoneDisabledOnCurrentPlatform: util.memoize(function () {
                        var e = environment.disablePhoneOnPlatforms;
                        return (
                            !!util.isArray(e) &&
                            (e.indexOf("GLOBAL") > -1 ||
                                e.indexOf(configurator.getPlatform()) > -1)
                        );
                    }),
                    isProxied: util.memoize(function () {
                        return (
                            _localEnv.isProxiedDynamic() ||
                            _localEnv.isProxiedStatic()
                        );
                    }),
                    isProxiedDynamic: util.memoize(function () {
                        var e = _localEnv.getPageUri().host.toLowerCase();
                        return 0 === e.indexOf("url") && e.indexOf("--") > -1;
                    }),
                    isProxiedRCOD: util.memoize(function () {
                        var e = _localEnv.getPageUri();
                        return RCOD_DOMAINS.indexOf(e.host) > -1;
                    }),
                    isProxiedStatic: util.memoize(function () {
                        var e = _localEnv.getPageUri();
                        return (
                            !_localEnv.isProxiedRCOD() &&
                            (e.host.indexOf("rtrk.") > -1 ||
                                PROXY_DOMAINS.indexOf(e.rootDomain) > -1)
                        );
                    }),
                    isPrivacyDeclined: function () {
                        return (
                            "declined" ===
                                sessionStorage.getItem(
                                    "capturePrivacyNotice"
                                ) ||
                            "declined" ===
                                localStorage.getItem("capturePrivacyNotice")
                        );
                    },
                    isRLHost: function (e) {
                        var t = urlUtil.parse(e).host.toLowerCase();
                        return (
                            urlUtil
                                .parse(environment.configUriRoot)
                                .host.toLowerCase() === t ||
                            urlUtil
                                .parse(environment.captureUriRoot)
                                .host.toLowerCase() === t ||
                            urlUtil
                                .parse(environment.captureInsightsRoot)
                                .host.toLowerCase() === t
                        );
                    },
                    isSameOriginAsReferrer: util.memoize(function () {
                        var e = _localEnv.getPageUri(),
                            t = _localEnv.getReferrerUri();
                        return (
                            e.protocol.toLowerCase() ===
                                t.protocol.toLowerCase() &&
                            e.host.toLowerCase() === t.host.toLowerCase() &&
                            e.port === t.port
                        );
                    }),
                    isScorpion: util.memoize(function () {
                        return (
                            "c77d130cdb614c8497a9b22757aa6382" ===
                            document.body.getAttribute("data-source")
                        );
                    }),
                    isSecondaryMode: util.memoize(function () {
                        return (
                            !!window.location.search.match(/rl-secondary/) ||
                            !0 === window.rl_secondary
                        );
                    }),
                    isWebStorageEnabled: util.memoize(function () {
                        var e = "rl_storage_test",
                            t = "test";
                        try {
                            sessionStorage.setItem(e, t),
                                localStorage.setItem(e, t);
                            var i = sessionStorage.getItem(e),
                                o = localStorage.getItem(e),
                                r = i === t && o === t;
                            return (
                                sessionStorage.removeItem(e),
                                localStorage.removeItem(e),
                                r
                            );
                        } catch (e) {
                            return (
                                insights.track(
                                    "WEB_STORAGE_ACCESS_DENIED",
                                    null,
                                    { forceTrack: !0 }
                                ),
                                !1
                            );
                        }
                    }),
                    redirectToUrl: function (e) {
                        window.location = e;
                    },
                    resolveURL: function (e) {
                        var t = document.createElement("a");
                        return (t.href = e), t.href;
                    },
                    setInitialParameters: function () {
                        var e = window.location.href;
                        (!e.match(/[?&]scid=/) && _localEnv.isKnownActive()) ||
                            (localStorage.setItem(
                                STORAGE_KEYS_INITIAL_REFERRER,
                                localEnv.getReferrer()
                            ),
                            localStorage.setItem(
                                STORAGE_KEYS_INITIAL_PAGE_URI,
                                e
                            )),
                            localStorage.setItem(
                                STORAGE_KEYS_LAST_KNOWN_ACTIVITY,
                                util.now()
                            ),
                            this.getOS() ||
                                localStorage.setItem(
                                    STORAGE_KEYS_OS,
                                    this.getOSFromUserAgent()
                                );
                    },
                    setOverrideSiteId: function (e) {
                        util.isString(e) &&
                            localStorage.setItem(OVERRIDE_SITE_ID_KEY, e);
                    },
                }),
                _localEnv),
            PROXY_DOMAINS,
            RCOD_DOMAINS,
            BASE_SITE_ID_KEY,
            OVERRIDE_SITE_ID_KEY,
            STORAGE_KEYS_LAST_KNOWN_ACTIVITY,
            STORAGE_KEYS_OS,
            STORAGE_KEYS_INITIAL_REFERRER,
            STORAGE_KEYS_INITIAL_PAGE_URI,
            _localEnv;
        window.RLCAP.redirectWithParams = function (e) {
            var t = localEnv.getPageUri().queryKey,
                i = urlUtil.parse(e);
            t = util.extend({}, t, i.queryKey, {
                redirect_referrer: localEnv.getReferrer(),
            });
            var o = urlUtil.param(t),
                r = i.href.replace("?" + i.query, "") + (o ? "?" + o : "");
            localEnv.redirectToUrl(r);
        };
        var insights = (function () {
                var e = {},
                    t = [],
                    i = util.debounce(sendInsights, 1e3),
                    o = {
                        clear: function () {
                            t.length = 0;
                        },
                        getDefaultData: util.memoize(function () {
                            return {
                                gmaid: util.getProperty(
                                    window,
                                    "rl_widget_cfg.globalMasterAdvertiserId"
                                ),
                                capture_version: CAPTURE_VERSION,
                                page_session: util.randomString(32),
                                page_title: window.document.title,
                                page_uri: location.href,
                                referrer: localEnv.getReferrer(),
                                os: localEnv.getOS(),
                                user_agent: window.navigator.userAgent,
                            };
                        }),
                        start: function (t) {
                            e[t] || (e[t] = { start: util.now() });
                        },
                        track: function (r, n, a) {
                            return (
                                (n = n || {}),
                                (a = a || {}),
                                (a = util.extend(
                                    { immediate: !1, forceTrack: !1 },
                                    a
                                )),
                                (n.event_name = r),
                                e[r] &&
                                    e[r].start &&
                                    (n.ElapsedTime = util.now() - e[r].start),
                                t.push(util.extend({}, o.getDefaultData(), n)),
                                (e[r] = undefined),
                                a.immediate || a.forceTrack
                                    ? (i.clear(), sendInsights(a.forceTrack))
                                    : i()
                            );
                        },
                    };
                function sendInsights(e) {
                    var i = e || 3 === util.randomInteger();
                    if (!localEnv.isEvaluationMode() && i) {
                        var r = util.now();
                        util.ajax({
                            method: "POST",
                            payload: { events: util.clone(t), timestamp: r },
                            url:
                                environment.captureInsightsRoot +
                                "/capture_logger/api/v1/insights",
                        }),
                            o.clear();
                    }
                }
                return o;
            })(),
            configurator = (function () {
                var e,
                    t,
                    i,
                    o,
                    r,
                    n,
                    a,
                    c = [
                        "bing_uet",
                        "capture",
                        "chat",
                        "cheq_bot_pixel",
                        "dfp_pixel",
                        "diy_booking",
                        "diy_chat_bot",
                        "diy_widget",
                        "dmp_pixel",
                        "disable_organic_tracking",
                        "email",
                        "externaljs",
                        "facebook_pixel",
                        "gannett_simplifi_pixel",
                        "google_analytics4",
                        "google_display_network",
                        "google_gtag",
                        "google_shopify",
                        "mediamath",
                        "remarketing",
                        "privacy_banner",
                        "simplifi_pixel",
                        "snap_chat_pixel",
                        "tik_tok_pixel",
                    ],
                    s = [
                        "capturejs",
                        "email_replacement",
                        "form",
                        "google_conversion",
                        "google_phone",
                        "iframe_proxy",
                        "on_click_cvt",
                        "string_replacement",
                    ],
                    l = [
                        "email",
                        "email_replacement",
                        "form",
                        "string_replacement",
                    ],
                    u = {
                        blacklist: {},
                        config: {},
                        capturableUrls: [],
                        cvts: {},
                        formAnalyticsFields: {},
                        iframeProxies: [],
                        ignoredNetworkRequestEntries: [],
                        locale: "en",
                        onClickCvtEntries: {},
                        products: [],
                        proxyUrls: {},
                        replacements: {},
                        whitelist: {},
                        campaign_data: {},
                    },
                    d = { enabled: !0, config: {} };
                function isProductInAccessList(e, t) {
                    var i = localEnv.getPageUri(),
                        o = i.path.toLowerCase(),
                        r = i.host.toLowerCase(),
                        n = e.items[r.replace(/^www\./gi, "")] || e.items[r],
                        a = !1;
                    return (
                        util.forEach(n, function (e) {
                            a ||
                                (a = e.exact_match
                                    ? o === e.path.toLowerCase() &&
                                      e.products.indexOf(t.toLowerCase()) > -1
                                    : !!o.match("^" + e.path.toLowerCase()) &&
                                      e.products.indexOf(t.toLowerCase()) > -1);
                        }),
                        a
                    );
                }
                var m = {
                    current: function () {
                        if (t) return util.clone(t);
                    },
                    filterByHostAndPath: function (e) {
                        var t = [],
                            i = localEnv.getPageUri(),
                            o = i.path || "/";
                        return (
                            util.forEach(e, function (e) {
                                e.host &&
                                    (e.host = e.host.replace(
                                        /(^https?):\/\//,
                                        ""
                                    )),
                                    (e.host && e.host !== i.host) ||
                                        (e.path && e.path !== o) ||
                                        t.push(e);
                            }),
                            t
                        );
                    },
                    getCID: function (e) {
                        return (
                            (a[e] = a[e] || []),
                            (a[e] = a[e].sort()),
                            a[e][a[e].length - 1]
                        );
                    },
                    getCVTs: function (e) {
                        return i[e] || {};
                    },
                    getFormAnalyticsFields: function (e) {
                        return t.formAnalyticsFields[e] || [];
                    },
                    getGoogleConversionLabel: function (e, i, r) {
                        if (!t.google_conversion_labels) return "";
                        if ("email" === e) return o.email || "";
                        try {
                            return o[e][i][r] || "";
                        } catch (t) {
                            return (
                                insights.track(
                                    "getGoogleConversionLabel::NoLabelFound",
                                    {
                                        pageUrl: window.location.href,
                                        cvtString: e,
                                        cvtType: i,
                                        cvtValue: r,
                                    },
                                    { forceTrack: !0 }
                                ),
                                ""
                            );
                        }
                    },
                    getIframeProxies: function () {
                        return m.filterByHostAndPath(t.iframeProxies);
                    },
                    getIgnoredNetworkRequestEntries: function () {
                        return m.filterByHostAndPath(
                            t.ignoredNetworkRequestEntries
                        );
                    },
                    getLocale: function () {
                        return t.locale;
                    },
                    getMarketingPolicy: function (e) {
                        return (
                            !!(
                                e &&
                                t.campaign_data[t.config.platform + "_" + e] &&
                                t.campaign_data[t.config.platform + "_" + e]
                                    .marketing_policy
                            ) &&
                            "true" ===
                                t.campaign_data[t.config.platform + "_" + e]
                                    .marketing_policy
                        );
                    },
                    getOnClickCVTs: function (e) {
                        return m.filterByHostAndPath(
                            t.onClickCvtEntries[e] || []
                        );
                    },
                    getPageConfig: function (e) {
                        return r[e];
                    },
                    getPlatform: function () {
                        return t.config.platform || "";
                    },
                    getProduct: function (e) {
                        return n[e.toLowerCase()];
                    },
                    getProxiedUrl: function (e) {
                        return t.proxyUrls[e];
                    },
                    getReplacementConfig: function (e) {
                        return t.replacements[e];
                    },
                    getSiteId: function () {
                        return t.id;
                    },
                    getBannerPosition: function () {
                        var e = m.getProduct("privacy_banner");
                        return e && e.config && e.config.position
                            ? e.config.position
                            : "top";
                    },
                    getBannerAutodecline: function () {
                        var e = m.getProduct("privacy_banner");
                        return (
                            !!(e && e.config && e.config.autodecline) &&
                            "true" === e.config.autodecline
                        );
                    },
                    isCaptureEnabled: function () {
                        var e,
                            t = "capturejs";
                        return (
                            !!(e = m.getProduct(t)) &&
                            !!e.enabled &&
                            !m.isProductBlacklisted(t) &&
                            !localEnv.isProxied()
                        );
                    },
                    isHIPAA: function () {
                        return !!t.config.hipaa_client;
                    },
                    isProductBlacklisted: function (e) {
                        return (
                            !!t.blacklist.enabled &&
                            isProductInAccessList(t.blacklist, e)
                        );
                    },
                    isProductEnabled: function (e) {
                        var t;
                        return (
                            (e = e.toLowerCase()),
                            !!(t = m.getProduct(e)) &&
                                !!t.enabled &&
                                !(c.indexOf(e) < 0 && s.indexOf(e) < 0) &&
                                !m.isProductBlacklisted(e) &&
                                !!m.isProductWhitelisted(e)
                        );
                    },
                    isProductEnabledForSource: function (e, t) {
                        if (!m.isProductEnabled(e)) return !1;
                        if (
                            ((t = t.toLowerCase()),
                            m.getProduct("disable_organic_tracking"))
                        )
                            return "paid" === t;
                        var i = m.getProduct(e);
                        return (
                            !i.referrer_source ||
                            i.referrer_source.toLowerCase() === t
                        );
                    },
                    isProductWhitelisted: function (e) {
                        return (
                            !t.whitelist.enabled ||
                            "capture" === e.toLowerCase() ||
                            "email" === e.toLowerCase() ||
                            "remarketing" === e.toLowerCase() ||
                            isProductInAccessList(t.whitelist, e)
                        );
                    },
                    isReachCode: function () {
                        for (var e = 0; e < l.length; e++) {
                            var t;
                            if (!(t = m.getProduct(l[e]))) return !1;
                            if (!t.referrer_source) return !1;
                            if ("paid" !== t.referrer_source.toLowerCase())
                                return !1;
                        }
                        return !0;
                    },
                    load: function (e) {
                        (e = e || function () {}),
                            localEnv.isSecondaryMode()
                                ? events.once(
                                      CONSTANTS.CONFIG_EVENT,
                                      function (t) {
                                          m.processConfig(t), e();
                                      }
                                  )
                                : storage.getItems(
                                      [CONSTANTS.OVERRIDE_ID_STORAGE_KEY],
                                      function (t) {
                                          var i =
                                              localEnv.getOverrideSiteId() ||
                                              t[
                                                  CONSTANTS
                                                      .OVERRIDE_ID_STORAGE_KEY
                                              ] ||
                                              localEnv.getBaseSiteId();
                                          if (
                                              util.isPlainObject(
                                                  window.rl_widget_cfg
                                              ) &&
                                              window.rl_widget_cfg.id === i
                                          )
                                              m.onConfig(
                                                  window.rl_widget_cfg,
                                                  e
                                              );
                                          else {
                                              var o = (function getConfigUrl(
                                                  e
                                              ) {
                                                  if (
                                                      e &&
                                                      util.isString(e) &&
                                                      32 ===
                                                          (e = util
                                                              .trim(e)
                                                              .replace(
                                                                  /-/g,
                                                                  ""
                                                              )).length
                                                  )
                                                      return (
                                                          environment.rawConfigUriRoot +
                                                          "/" +
                                                          e.substr(0, 3) +
                                                          "/" +
                                                          e.substr(3, 3) +
                                                          "/" +
                                                          e.substr(6, 3) +
                                                          "/" +
                                                          e.substr(9) +
                                                          ".js"
                                                      );
                                              })(i);
                                              o
                                                  ? util.getScript({
                                                        src: o,
                                                        error: function () {
                                                            e(
                                                                "failed to load " +
                                                                    o
                                                            );
                                                        },
                                                        success: function () {
                                                            m.onConfig(
                                                                window.rl_widget_cfg,
                                                                e
                                                            );
                                                        },
                                                    })
                                                  : e("invalid site ID " + i);
                                          }
                                      }
                                  );
                    },
                    onConfig: function (e, t) {
                        e && e.config && e.products
                            ? (events.trigger(CONSTANTS.CONFIG_EVENT, e),
                              m.processConfig(e),
                              t())
                            : t("invalid config");
                    },
                    processConfig: function (c) {
                        (t = util.extend({}, u, c)),
                            (function buildPageConfig() {
                                (r = {}),
                                    window.capturePageConfig &&
                                        util.isPlainObject(
                                            window.capturePageConfig
                                        ) &&
                                        (r = util.clone(
                                            window.capturePageConfig
                                        ));
                            })(),
                            (function buildProductHash() {
                                (n = {}),
                                    util.forEach(t.products, function (e) {
                                        n[e.name.toLowerCase()] = util.extend(
                                            !0,
                                            {},
                                            d,
                                            e
                                        );
                                    }),
                                    util.forEach(s, function (e) {
                                        n[e] ||
                                            (n[e] = util.extend(!0, {}, d, {
                                                name: e,
                                            }));
                                    });
                            })(),
                            (function buildSCIDHash() {
                                var e;
                                (a = {}),
                                    util.forEach(t.campaign_data, function (i) {
                                        i.indexOf("_") > 0 &&
                                            t.campaign_data[i].scids &&
                                            ((e = i.split("_")),
                                            util.forEach(
                                                t.campaign_data[i].scids,
                                                function (t) {
                                                    (a[t] = a[t] || []),
                                                        a[t].push(e[1]);
                                                }
                                            ));
                                    });
                            })(),
                            (function buildCIDArray() {
                                var i;
                                (e = []),
                                    util.forEach(t.campaign_data, function (t) {
                                        t.indexOf("_") > 0 &&
                                            ((i = t.split("_")), e.push(i[1]));
                                    });
                            })(),
                            (function buildCVTHash() {
                                (i = {}),
                                    util.forEach(t.cvts, function (e, t) {
                                        var o = e.toLowerCase();
                                        util.forEach(t, function (e, t) {
                                            var r = e.toLowerCase();
                                            util.forEach(t, function (e) {
                                                var t = e.campaign_id;
                                                (i[t] = i[t] || {}),
                                                    (i[t][o] = i[t][o] || {}),
                                                    (i[t][o][r] = {
                                                        cvtid: e.cvtid,
                                                        cvtType: e.cvtType,
                                                        cvtValue: e.cvtValue,
                                                        value: e.value,
                                                    });
                                            });
                                        });
                                    });
                            })(),
                            (function buildGoogleConversionHash() {
                                if (((o = {}), t.google_conversion_labels)) {
                                    const e = t.google_conversion_labels;
                                    o = {
                                        email: e["RL Email"],
                                        page: {
                                            1: {
                                                1: e["RL Low CVT"],
                                                2: e["RL Medium CVT"],
                                            },
                                            2: { 2: e["RL High CVT"] },
                                        },
                                        post: {
                                            1: {
                                                1: e["RL Low Post CVT"],
                                                2: e["RL Medium Post CVT"],
                                            },
                                        },
                                    };
                                }
                            })();
                    },
                    validateSCID: function (e) {
                        if (a[e]) return e;
                    },
                };
                return m;
            })(),
            translate =
                ((_translate = {
                    convertTranslationToUTF8: function (e) {
                        return (
                            util.forEach(e, function (t, i) {
                                util.isString(i)
                                    ? (e[t] = util.convertToUTF8(i))
                                    : (e[t] =
                                          _translate.convertTranslationToUTF8(
                                              i
                                          ));
                            }),
                            e
                        );
                    },
                    getLanguage: util.memoize(function () {
                        return (function getLocaleLanguage(e) {
                            return e.split("-")[0];
                        })(_translate.getLocale());
                    }),
                    getLocale: util.memoize(function () {
                        return (function formatLocale(e) {
                            return 2 === e.length
                                ? e.toLowerCase()
                                : 5 === e.length && 2 === e.indexOf("-")
                                ? [
                                      (e = e.split("-"))[0].toLowerCase(),
                                      e[1].toUpperCase(),
                                  ].join("-")
                                : e;
                        })(configurator.getLocale());
                    }),
                    getTranslatedStrings: util.memoize(function () {
                        if (!i18n) return {};
                        var e = _translate.getLocale(),
                            t = _translate.getLanguage();
                        return _translate.convertTranslationToUTF8(
                            i18n[e] || i18n[t] || i18n.en
                        );
                    }),
                }),
                _translate),
            _translate,
            campaign =
                ((defaultCampaign = {
                    scid: "",
                    cid: "",
                    tc: "",
                    rl_key: "",
                    kw: "",
                    pub_cr_id: "",
                    isPaidCampaign: !1,
                    tid: "",
                    uid: "",
                    ohid: "",
                    id_creative_resource: "",
                    utm_data: "",
                    ecid: "",
                }),
                (currentCampaign = {}),
                (_campaign = {
                    appendUrlToCampaign: function (e, t) {
                        var i = util.parse(
                            sessionStorage.getItem("rl_campaign")
                        );
                        i &&
                            util.isArray(i.urls) &&
                            i.urls.indexOf(e) < 0 &&
                            i.urls.push(encodeURI(e)),
                            (i = util.stringify(i)),
                            storage.setItems({ rl_campaign: i }, t);
                    },
                    current: function () {
                        return util.clone(currentCampaign);
                    },
                    getCampaign: function (e) {
                        if (localEnv.isSecondaryMode())
                            events.once(CONSTANTS.CAMPAIGN_EVENT, e);
                        else {
                            var t = _campaign.getFromQuerystring();
                            t
                                ? ((t.scid ||
                                      t.ohid ||
                                      t.ecid ||
                                      t.idCreativeResource ||
                                      t.idcreativeresource) &&
                                      (t.isPaidCampaign = !0),
                                  events.trigger(CONSTANTS.CAMPAIGN_EVENT, t),
                                  e(t))
                                : _campaign.getFromCaptureSiteStorage(function (
                                      t
                                  ) {
                                      events.trigger(
                                          CONSTANTS.CAMPAIGN_EVENT,
                                          t
                                      ),
                                          e(t);
                                  });
                        }
                    },
                    getCampaignPayload: function (e) {
                        var t = configurator.current(),
                            i = t.campaign_data || {},
                            o = configurator.getPlatform(),
                            r = {};
                        return (
                            (r.global_master_advertiser_id =
                                t.globalMasterAdvertiserId),
                            (r.page_name = document.title),
                            (r.fname = localEnv.getProxiedUri().href),
                            (r.referrer = localEnv.getReferrer()),
                            (r.capture_version = CAPTURE_VERSION),
                            (r.utm_data = currentCampaign.utm_data),
                            configurator.isProductEnabled("simplifi_pixel") &&
                                (r.vendor_user_id =
                                    currentCampaign.uid ||
                                    util.getCookie("sifi_user_id") ||
                                    ""),
                            currentCampaign.isPaidCampaign
                                ? ((r.ecid = currentCampaign.ecid),
                                  (r.ohid = currentCampaign.ohid),
                                  (r.scid = currentCampaign.scid),
                                  (r.tc = currentCampaign.tc),
                                  (r.kw = currentCampaign.kw),
                                  (r.pub_cr_id = currentCampaign.pub_cr_id),
                                  (r.campaign_id = currentCampaign.cid
                                      ? o + "_" + currentCampaign.cid
                                      : ""),
                                  (r.master_campaign_id = (
                                      i[r.campaign_id] || {}
                                  ).master_campaign_id),
                                  (r.referrer_source = "PAID"),
                                  (r.vendor_transaction_id =
                                      currentCampaign.tid || ""),
                                  (r.id_creative_resource =
                                      currentCampaign.idCreativeResource ||
                                      currentCampaign.idcreativeresource ||
                                      ""))
                                : ((r.master_campaign_id = (
                                      i[currentCampaign.referrerType] || {}
                                  ).master_campaign_id),
                                  !1 === e ||
                                      r.master_campaign_id ||
                                      (r.master_campaign_id = (
                                          i.OTHER || {}
                                      ).master_campaign_id),
                                  (r.referrer_source = "ORGANIC"),
                                  localEnv.isNonRLPaid() &&
                                      (r.referrer_source = "NONRLPAID")),
                            (r.master_campaign_id = r.master_campaign_id
                                ? o + "_" + r.master_campaign_id
                                : ""),
                            r
                        );
                    },
                    getFromCaptureSiteStorage: function (e) {
                        storage.getItems(["rl_campaign"], function (t) {
                            if (!t || !t.rl_campaign) return e();
                            var i = _campaign.parseStoredCampaign(
                                t.rl_campaign
                            );
                            if (!i) return e();
                            var o = _campaign.validateCampaign(i);
                            if (!o) return e();
                            (o.scid ||
                                o.ohid ||
                                o.ecid ||
                                o.idCreativeResource ||
                                o.idcreativeresource) &&
                                (o.isPaidCampaign = !0),
                                e(o);
                        });
                    },
                    getFromQuerystring: function () {
                        var e = util.clone(localEnv.getInitialUri().queryKey);
                        e.scid || _campaign.parseInnerQueries(e),
                            util.isArray(e.scid) &&
                                e.scid.length > 0 &&
                                (e.scid = e.scid[0]);
                        var t = {};
                        return (
                            util.forEach(e, function (i, o) {
                                i.match(/^utm/) && ((t[i] = o), delete e[i]);
                            }),
                            util.isEmpty(t) || (e.utm_data = JSON.stringify(t)),
                            _campaign.validateCampaign(e)
                        );
                    },
                    getMasterCampaignID: function (e) {
                        var t = configurator.getPlatform(),
                            i = (configurator.current().campaign_data[e] || {})
                                .master_campaign_id;
                        if (i) return t + "_" + i;
                    },
                    parseInnerQueries: function (e) {
                        util.forEach(e, function (t, i) {
                            var o = urlUtil.parse(i).queryKey;
                            util.isEmpty(o) ||
                                util.forEach(o, function (t, i) {
                                    e[t] || (e[t] = i);
                                });
                        });
                    },
                    init: function (e) {
                        localEnv.setInitialParameters(),
                            events.once(CONSTANTS.SIMPLIFI_EVENT, function (e) {
                                events.trigger(
                                    CONSTANTS.SIMPLIFI_INIT_EVENT,
                                    e
                                );
                            }),
                            _campaign.getCampaign(function (t) {
                                t &&
                                    ((t.marketing_policy =
                                        configurator.getMarketingPolicy(t.cid)),
                                    _campaign.storeCampaignData(t),
                                    _campaign.updateCampaignAttributes(t),
                                    configurator.isProductEnabled(
                                        "simplifi_pixel"
                                    ) && _campaign.fetchVendorUserId(t)),
                                    e();
                            });
                    },
                    isPaidCampaign: function () {
                        return currentCampaign.isPaidCampaign;
                    },
                    parseStoredCampaign: function (e) {
                        var t;
                        if (
                            e &&
                            (util.isString(e) && (e = util.parse(e)),
                            e && e.campaign && e.urls && e.urls.length)
                        )
                            return (
                                util.forEach(e.urls, function (i) {
                                    document.referrer === decodeURI(i) &&
                                        (t = e.campaign);
                                }),
                                t
                            );
                    },
                    fetchVendorUserId: function (e) {
                        if (e.uid)
                            return (
                                events.trigger(CONSTANTS.SIMPLIFI_EVENT, e.uid),
                                e.uid
                            );
                        var t = util.getCookie("sifi_user_id");
                        return t
                            ? ((currentCampaign.uid = t),
                              events.trigger(CONSTANTS.SIMPLIFI_EVENT, e.uid),
                              t)
                            : void util.ajax({
                                  url: environment.simplifiServiceRoot,
                                  method: "GET",
                                  callback: function (e, t) {
                                      if (
                                          e &&
                                          200 === t &&
                                          util.trim(e, !1).length <= 32
                                      ) {
                                          var i = util.trim(e, !1);
                                          return (
                                              events.trigger(
                                                  CONSTANTS.SIMPLIFI_EVENT,
                                                  i
                                              ),
                                              i
                                          );
                                      }
                                      insights.track(
                                          "INVALID VENDOR ID",
                                          { status: t },
                                          { forceTrack: !0 }
                                      );
                                  },
                              });
                    },
                    setPaidCampaign: function (e) {
                        currentCampaign.isPaidCampaign = e;
                    },
                    storeCampaignData: function (e) {
                        e &&
                            !localEnv.isSecondaryMode() &&
                            storage.setItems({
                                rl_campaign: util.stringify({
                                    campaign: e,
                                    urls: [encodeURI(window.location.href)],
                                }),
                            });
                    },
                    updateCampaignAttributes: function (e) {
                        return (
                            (currentCampaign = util.extend(
                                {},
                                defaultCampaign,
                                currentCampaign,
                                e
                            )),
                            _campaign.current()
                        );
                    },
                    validateCampaign: function (e) {
                        if (e)
                            return e.scid && configurator.validateSCID(e.scid)
                                ? ((e.cid = configurator.getCID(e.scid)),
                                  util.extend({}, defaultCampaign, e))
                                : ((e.scid = ""),
                                  (e.cid = ""),
                                  e.ohid ||
                                  e.ecid ||
                                  e.idcreativeresource ||
                                  e.idCreativeResource ||
                                  configurator.isProductEnabled(
                                      "simplifi_pixel"
                                  ) ||
                                  e.uid ||
                                  e.utm_data
                                      ? util.extend({}, defaultCampaign, e)
                                      : void 0);
                    },
                }),
                _campaign),
            defaultCampaign,
            currentCampaign,
            _campaign,
            conversionTracking =
                ((LAST_FORM_TARGET_URL_KEY = "rl_capture_post_url"),
                (ACTION_HASH = {
                    CLICK_LOW: "7",
                    CLICK_HIGH: "8",
                    EMAIL_OPEN: "2",
                    EMAIL_SEND: "3",
                    PAGE_VISIT_LOW: "7",
                    PAGE_VISIT_HIGH: "8",
                    FORM_SUBMIT: "8",
                }),
                (_conversionTracking = {
                    buildCVTKeys: function (e) {
                        var t = urlUtil.parse(e);
                        t.protocol ||
                            (t.protocol = localEnv.getPageUri().protocol),
                            t.host ||
                                ((t.host = localEnv.getPageUri().host),
                                (t.port = localEnv.getPageUri().port)),
                            t.path || (t.path = "/");
                        var i = t.protocol + "://" + t.host;
                        t.port && (i += ":" + t.port);
                        var o = t.path;
                        return (
                            t.query && (o += "?" + t.query),
                            t.anchor && (o += "#" + t.anchor),
                            { domain: i.toLowerCase(), path: o.toLowerCase() }
                        );
                    },
                    getBestMatchForPath: function (e, t) {
                        var i,
                            o = [];
                        return (
                            util.forEach(t, function (e) {
                                o.push(e);
                            }),
                            o.sort(function (e, t) {
                                return t.length - e.length;
                            }),
                            util.forEach(o, function (o) {
                                !i && e.indexOf(o) >= 0 && (i = t[o]);
                            }),
                            i
                        );
                    },
                    getCVTConfig: function (e, t) {
                        var i = _conversionTracking.buildCVTKeys(e),
                            o =
                                configurator.getPlatform() +
                                "_" +
                                campaign.current().cid,
                            r = configurator.getCVTs(o);
                        if (t) {
                            var n = _conversionTracking.getOnClickFormCVTs(o);
                            r = util.extend(!0, r, n);
                        }
                        var a = r[i.domain];
                        if (a)
                            return _conversionTracking.getBestMatchForPath(
                                i.path,
                                a
                            );
                    },
                    getOnClickFormCVTs: function (e) {
                        var t = campaign.getMasterCampaignID(e),
                            i = configurator.getOnClickCVTs(t),
                            o = {};
                        return (
                            util.forEach(i, function (t) {
                                if (t.form_url) {
                                    var i = _conversionTracking.buildCVTKeys(
                                            localEnv.resolveURL(t.form_url)
                                        ),
                                        r = _conversionTracking.buildCVTKeys(
                                            t.cvt_url
                                        ),
                                        n = configurator.getCVTs(e),
                                        a = n[r.domain] && n[r.domain][r.path];
                                    if (!a)
                                        return (
                                            console.error(
                                                "The CVT URL " +
                                                    t.cvt_url +
                                                    " could not be found for the campaign ID " +
                                                    e
                                            ),
                                            void insights.track(
                                                "getOnClickFormCVTs::NoConfigFound",
                                                { campaignID: e, cvtURL: r }
                                            )
                                        );
                                    (o[i.domain] = o[i.domain] || {}),
                                        (o[i.domain][i.path] = {
                                            cvtid: a.cvtid,
                                            value: a.value,
                                        });
                                }
                            }),
                            o
                        );
                    },
                    trackCVTUrl: function (e) {
                        if (campaign.isPaidCampaign()) {
                            var t = _conversionTracking.getCVTConfig(e);
                            if (!t) {
                                var i =
                                    configurator.getPlatform() +
                                    "_" +
                                    campaign.current().cid;
                                return (
                                    console.error(
                                        "The CVT URL " +
                                            e +
                                            " could not be found for the campaign ID " +
                                            i
                                    ),
                                    void insights.track(
                                        "trackCVTUrl::NoConfigFound",
                                        { campaignID: i, cvtURL: e },
                                        { forceTrack: !0 }
                                    )
                                );
                            }
                            events.once(CONSTANTS.VISIT_EVENT, function (i) {
                                var o = {
                                    idpagecvt: t.cvtid,
                                    event:
                                        "high" === t.value
                                            ? ACTION_HASH.CLICK_HIGH
                                            : ACTION_HASH.CLICK_LOW,
                                    visitor_id: i.visitor_id,
                                    visit_id: i.visit_id,
                                    fname: e,
                                };
                                _conversionTracking.trackGoogleCVT(
                                    configurator.getGoogleConversionLabel(
                                        "page",
                                        t.cvtType,
                                        t.cvtValue
                                    )
                                ),
                                    _conversionTracking.trackCVT(o);
                            });
                        }
                    },
                    trackEmailCVT: function (e, t) {
                        campaign.isPaidCampaign() &&
                            events.once(CONSTANTS.VISIT_EVENT, function (i) {
                                (t.event = ACTION_HASH[e]),
                                    (t.visitor_id = i.visitor_id),
                                    (t.visit_id = i.visit_id),
                                    _conversionTracking.trackGoogleCVT(
                                        configurator.getGoogleConversionLabel(
                                            "email"
                                        )
                                    ),
                                    _conversionTracking.trackCVT(t);
                            });
                    },
                    trackFormCVT: function (e, t) {
                        if (
                            ((t = util.isFunction(t) ? t : function () {}),
                            campaign.isPaidCampaign())
                        ) {
                            var i = _conversionTracking.getCVTConfig(
                                    window.location.href
                                ),
                                o = _conversionTracking.getCVTConfig(e, !0);
                            i &&
                                "low" === i.value &&
                                ((o && "low" !== o.value) || (o = i)),
                                o
                                    ? (sessionStorage.setItem(
                                          LAST_FORM_TARGET_URL_KEY,
                                          e
                                      ),
                                      events.once(
                                          CONSTANTS.VISIT_EVENT,
                                          function (i) {
                                              var r = {
                                                  idpagecvt: o.cvtid,
                                                  event: ACTION_HASH.FORM_SUBMIT,
                                                  referrer: document.referrer,
                                                  fname: e,
                                                  visitor_id: i.visitor_id,
                                                  visit_id: i.visit_id,
                                              };
                                              _conversionTracking.trackGoogleCVT(
                                                  configurator.getGoogleConversionLabel(
                                                      "post",
                                                      o.cvtType,
                                                      o.cvtValue
                                                  )
                                              ),
                                                  _conversionTracking.trackCVT(
                                                      r,
                                                      t
                                                  );
                                          }
                                      ))
                                    : util.defer(t);
                        } else util.defer(t);
                    },
                    trackGoogleCVT: function (e) {
                        localEnv.isEvaluationMode() ||
                            (e &&
                                util.isString(e) &&
                                events.trigger("googleConversion", {
                                    label: e,
                                }));
                    },
                    trackPageCVT: function (e) {
                        if (
                            campaign.isPaidCampaign() &&
                            (!localEnv.isSecondaryMode() ||
                                !localEnv.isBlankSourceFrame())
                        ) {
                            var t = window.location.href,
                                i = _conversionTracking.getCVTConfig(t);
                            if (i) {
                                var o = localEnv.getPageUri(),
                                    r = urlUtil.parse(
                                        sessionStorage.getItem(
                                            LAST_FORM_TARGET_URL_KEY
                                        )
                                    );
                                if (
                                    (sessionStorage.removeItem(
                                        LAST_FORM_TARGET_URL_KEY
                                    ),
                                    r.protocol !== o.protocol ||
                                        r.host !== o.host ||
                                        r.port !== o.port ||
                                        r.path !== o.path)
                                ) {
                                    var n = {
                                        idpagecvt: i.cvtid,
                                        event:
                                            "high" === i.value
                                                ? ACTION_HASH.PAGE_VISIT_HIGH
                                                : ACTION_HASH.PAGE_VISIT_LOW,
                                        visitor_id: e.visitor_id,
                                        visit_id: e.visit_id,
                                        fname: t,
                                    };
                                    _conversionTracking.trackGoogleCVT(
                                        configurator.getGoogleConversionLabel(
                                            "page",
                                            i.cvtType,
                                            i.cvtValue
                                        )
                                    ),
                                        _conversionTracking.trackCVT(n);
                                }
                            }
                        }
                    },
                    trackPageCVTOnURLChange: function (e) {
                        originalPushState ||
                            ((currentURL = window.location.href),
                            (originalPushState = history.pushState),
                            (originalReplaceState = history.replaceState),
                            (history.pushState = function () {
                                var t = originalPushState.apply(
                                    history,
                                    util.makeArray(arguments)
                                );
                                return (
                                    currentURL === window.location.href ||
                                        ((currentURL = window.location.href),
                                        _conversionTracking.trackPageCVT(e)),
                                    t
                                );
                            }),
                            (history.replaceState = function () {
                                var t = originalReplaceState.apply(
                                    history,
                                    util.makeArray(arguments)
                                );
                                return (
                                    currentURL === window.location.href ||
                                        ((currentURL = window.location.href),
                                        _conversionTracking.trackPageCVT(e)),
                                    t
                                );
                            }));
                    },
                    trackCVT: function (e, t) {
                        t = util.isFunction(t) ? t : function () {};
                        var i = "/api/v1/cvts";
                        ((e = util.extend(
                            campaign.getCampaignPayload(),
                            e
                        )).rl_eid = "trackCvt-" + util.randomString(7)),
                            (e.src = "capture"),
                            util.isFunction(window.RLEvaluator) &&
                                window.RLEvaluator(i, e.rl_eid, e),
                            localEnv.isEvaluationMode()
                                ? util.defer(t)
                                : util.ajax({
                                      method: "POST",
                                      payload: e,
                                      url: environment.captureUriRoot + i,
                                      callback: t,
                                  });
                    },
                }),
                _conversionTracking),
            currentURL,
            originalPushState,
            originalReplaceState,
            LAST_FORM_TARGET_URL_KEY,
            ACTION_HASH,
            _conversionTracking,
            events = (function () {
                var e = "register",
                    t = "ack_",
                    i = !1,
                    o = [],
                    r = { subscriptions: {}, triggers: {} },
                    n = {};
                function postMessage(e, t, i) {
                    e &&
                        e.postMessage &&
                        e.postMessage(
                            util.stringify({
                                siteId: localEnv.getBaseSiteId(),
                                eventName: t,
                                data: i,
                            }),
                            "*"
                        );
                }
                var a = {
                    init: function () {
                        if (
                            (window.addEventListener("message", a.onMessage),
                            window.parent && window.parent !== window)
                        ) {
                            postMessage(window.parent, e);
                            var t = setInterval(function () {
                                if (i) return clearInterval(t);
                                postMessage(window.parent, e);
                            }, 2e3);
                        }
                    },
                    clear: function () {
                        n = {};
                    },
                    once: function (e, t) {
                        var i = !1,
                            o = a.subscribe(e, function (e) {
                                if (!i) return a.unsubscribe(o), (i = !0), t(e);
                            });
                        return o;
                    },
                    onMessage: function (r) {
                        var c = util.parse(r.data);
                        if (
                            c &&
                            c.eventName &&
                            c.siteId === localEnv.getBaseSiteId()
                        ) {
                            var s = util.randomString(10);
                            if (
                                (0 !== c.eventName.indexOf(t) &&
                                    postMessage(r.source, t + c.eventName, s),
                                c.eventName === e)
                            )
                                return (
                                    util.forEach(n, function (e, t) {
                                        util.forEach(
                                            t.triggers,
                                            function (t, i) {
                                                postMessage(
                                                    r.source,
                                                    e,
                                                    i.data
                                                );
                                            }
                                        );
                                    }),
                                    void o.push(r.source)
                                );
                            c.eventName !== t + e
                                ? a.trigger(c.eventName, c.data)
                                : (i = !0);
                        }
                    },
                    subscribe: function (e, t) {
                        t = t || function () {};
                        var i = util.randomString(10);
                        return (
                            (n[e] = n[e] || util.extend(!0, {}, r)),
                            (n[e].subscriptions[i] = { callback: t }),
                            util.forEach(n[e].triggers, function (e, i) {
                                util.defer(function () {
                                    t(i.data);
                                });
                            }),
                            i
                        );
                    },
                    trigger: function (e, t) {
                        var i = util.randomString(10);
                        (n[e] = n[e] || util.extend(!0, {}, r)),
                            (n[e].triggers[i] = { data: t }),
                            util.forEach(o, function (i) {
                                postMessage(i, e, t);
                            }),
                            util.forEach(n[e].subscriptions, function (e, i) {
                                util.defer(function () {
                                    i.callback(t);
                                });
                            });
                    },
                    unsubscribe: function (e) {
                        util.forEach(n, function (t, i) {
                            delete i.subscriptions[e];
                        });
                    },
                };
                return a;
            })(),
            CaptureStorage = function (e) {
                (e = e || ""),
                    window.addEventListener("message", function onMessage(e) {
                        if (e.origin !== r) return;
                        if ("loaded" === e.data) {
                            i = !0;
                            var t = getStorageWindow();
                            return void util.forEach(o, function (e, i) {
                                var o = util.stringify(i.message);
                                t.postMessage(o, r);
                            });
                        }
                        if ("cookie_disabled" === e.data) {
                            if (
                                "1" ===
                                sessionStorage.getItem(
                                    "THIRD_PARTY_COOKIE_ACCESS_DENIED"
                                )
                            )
                                return;
                            return (
                                insights.track(
                                    "THIRD_PARTY_COOKIE_ACCESS_DENIED",
                                    {},
                                    { forceTrack: !0 }
                                ),
                                void sessionStorage.setItem(
                                    "THIRD_PARTY_COOKIE_ACCESS_DENIED",
                                    "1"
                                )
                            );
                        }
                        if ("web_storage_disabled" === e.data) {
                            if (
                                "1" ===
                                sessionStorage.getItem(
                                    "THIRD_PARTY_WEB_STORAGE_ACCESS_DENIED"
                                )
                            )
                                return;
                            return (
                                insights.track(
                                    "THIRD_PARTY_WEB_STORAGE_ACCESS_DENIED",
                                    {},
                                    { forceTrack: !0 }
                                ),
                                void sessionStorage.setItem(
                                    "THIRD_PARTY_WEB_STORAGE_ACCESS_DENIED",
                                    "1"
                                )
                            );
                        }
                        var n = util.parse(e.data);
                        if (!o[n.id]) return;
                        var a = o[n.id].callback;
                        delete o[n.id],
                            util.defer(function () {
                                a(n.result);
                            });
                    });
                var t = "capture_storage_" + e,
                    i = !1,
                    o = {},
                    r = environment.captureStorageRoot.replace("<site id>", e),
                    n = document.createElement("iframe");
                function getStorageWindow() {
                    return (
                        n.contentWindow ||
                            (n = document.head.querySelector("#" + t)),
                        n.contentWindow
                    );
                }
                function registerMessage(e, t) {
                    var n = util.randomString(16);
                    if (
                        ((e.id = n),
                        (t = t || function () {}),
                        (o[n] = { message: e, callback: t }),
                        i)
                    ) {
                        var a = util.stringify(e);
                        getStorageWindow().postMessage(a, r);
                    }
                }
                function createStorageKey(t) {
                    return e + "_" + t;
                }
                return (
                    (n.src = r + "/static/storage.html"),
                    (n.id = t),
                    (n.title = "No Readable Content"),
                    (n.style.display = "none"),
                    n.setAttribute("aria-hidden", "true"),
                    document.head.appendChild(n),
                    {
                        getItems: function (e, t) {
                            registerMessage(
                                { keys: e, method: "GET" },
                                function wrapper(i) {
                                    util.isPlainObject(i) || (i = {});
                                    var o = !0;
                                    util.forEach(i, function (e, t) {
                                        null !== t && (o = !1);
                                    }),
                                        o &&
                                            ((i = {}),
                                            util.forEach(e, function (e) {
                                                var t = createStorageKey(e);
                                                i[e] =
                                                    "rl_campaign" === e
                                                        ? sessionStorage.getItem(
                                                              t
                                                          )
                                                        : localStorage.getItem(
                                                              t
                                                          );
                                            })),
                                        t(i);
                                }
                            );
                        },
                        removeItems: function (e, t) {
                            util.forEach(e, function (e) {
                                var t = createStorageKey(e);
                                "rl_campaign" === e
                                    ? sessionStorage.removeItem(t)
                                    : localStorage.removeItem(t);
                            }),
                                registerMessage(
                                    { keys: e, method: "REMOVE" },
                                    t
                                );
                        },
                        setItems: function (e, t) {
                            util.forEach(e, function (e, t) {
                                var i = createStorageKey(e);
                                "rl_campaign" === e
                                    ? sessionStorage.setItem(i, t)
                                    : localStorage.setItem(i, t);
                            }),
                                registerMessage({ items: e, method: "SET" }, t);
                        },
                    }
                );
            },
            storage,
            bingUET =
                ((_bingUET = {
                    init: function () {
                        pixels.init({
                            product_name: "bing_uet",
                            status_label: "BING_UET",
                            insights: "Pixel::BingUET",
                            validator: (e) => e && util.isString(e),
                            loadPixel: _bingUET.loadBingUET,
                        });
                    },
                    loadBingUET: function (e, t) {
                        var i = document.createElement("script");
                        (i.type = "text/javascript"),
                            (i.async = !0),
                            (i.text =
                                "(function (w, d, t, r, u) { var f, n, i; w[u] = w[u] || [], f = function () { var o = { ti:" +
                                e +
                                '}; o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad") }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () { var s = this.readyState; s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null) }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i) })(window, document, "script", "//bat.bing.com/bat.js", "uetq");');
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(i, o), t();
                    },
                }),
                _bingUET),
            _bingUET,
            callClick = {
                init: function () {
                    callClick.addCallClickPixel();
                },
                addCallClickPixel: function () {
                    events.once(CONSTANTS.VISIT_EVENT, function (e) {
                        var t = configurator.current(),
                            i = document.querySelectorAll(
                                "[capture-call-click]"
                            );
                        util.forEach(util.makeArray(i), function (i) {
                            i.addEventListener("click", function () {
                                var o = {
                                        visitor_id: e.visitor_id,
                                        visit_id: e.visit_id,
                                        page_url: window.location.href,
                                        telephone: i.href,
                                        global_master_advertiser_id:
                                            t.globalMasterAdvertiserId,
                                    },
                                    r = urlUtil.param(o),
                                    n = new Image(1, 1);
                                (n.src =
                                    environment.captureUriRoot +
                                    "/api/v1/call_clicks.gif?" +
                                    r),
                                    document.head.appendChild(n);
                            });
                        });
                    });
                },
            },
            cheqBotPixel =
                ((_cheqBotPixel = {
                    init: function () {
                        pixels.init({
                            product_name: "cheq_bot_pixel",
                            status_label: "CHEQBOT_PIXEL",
                            insights: "Pixel::CheqBot",
                            validator: (e) => e && util.isString(e),
                            loadPixel: _cheqBotPixel.loadCheqBot,
                        });
                    },
                    loadCheqBot: function (e, t) {
                        var i = urlUtil.deparam(e),
                            o = document.createElement("script");
                        (o.type = "text/javascript"),
                            (o.async = !0),
                            o.setAttribute("data-ch", i.ch),
                            (o.src =
                                "https://three.fourtimessmelly.com/i/" +
                                i.id +
                                ".js");
                        var r = document.getElementsByTagName("script")[0];
                        r.parentNode.insertBefore(o, r), t();
                    },
                }),
                _cheqBotPixel),
            _cheqBotPixel,
            dfpPixel =
                ((_dfpPixel = {
                    init: function () {
                        pixels.init({
                            product_name: "dfp_pixel",
                            status_label: "DFP_PIXEL",
                            insights: "Pixel::DfpPixel",
                            validator: (e) => e,
                            loadPixel: _dfpPixel.loadDfpPixel,
                        });
                    },
                    loadDfpPixel: function (e, t) {
                        var i = new Image(1, 1);
                        (i.src =
                            "https://pubads.g.doubleclick.net/activity;xsp=" +
                            e),
                            document.body.appendChild(i),
                            t();
                    },
                }),
                _dfpPixel),
            _dfpPixel,
            diyBooking =
                ((_diyBooking = {
                    init: function () {
                        if (configurator.isProductEnabled("diy_booking")) {
                            var e =
                                    configurator.getProduct(
                                        "diy_booking"
                                    ).config,
                                t = e.booking_type;
                            t &&
                                util.isString(t) &&
                                _diyBooking.initializeBookingWidget(e);
                        }
                    },
                    initializeBookingWidget: function (e) {
                        events.once(CONSTANTS.VISIT_EVENT, function (t) {
                            const i = new URL(
                                "/public/localiq-booking-widget.js?v=1",
                                environment.diyBookingUriRoot
                            ).href;
                            util.getScript({
                                src: i,
                                success: function () {
                                    (e.session_id = `${t.visit_id}###${
                                        configurator.current()
                                            .globalMasterAdvertiserId
                                    }`),
                                        setTimeout(function () {
                                            window.LocaliqBooking(e).render();
                                        }, 1e3);
                                },
                            });
                        });
                    },
                }),
                _diyBooking),
            _diyBooking,
            diyChatBot =
                ((_diyChatBot = {
                    init: function () {
                        if (
                            (function isDiyChatBotEnabled() {
                                if (localEnv.isSecondaryMode()) return !1;
                                if (configurator.isProductBlacklisted("chat"))
                                    return !1;
                                if (!configurator.isProductWhitelisted("chat"))
                                    return !1;
                                if (localEnv.getPageUri().queryKey.chatDisabled)
                                    return !1;
                                if (configurator.getPageConfig("chatDisabled"))
                                    return !1;
                                var e = configurator.getProduct("diy_chat_bot");
                                return !!e && e.enabled;
                            })()
                        ) {
                            var e =
                                    configurator.getProduct(
                                        "diy_chat_bot"
                                    ).config,
                                t = e.chat_type;
                            t &&
                                util.isString(t) &&
                                _diyChatBot.initializeChatWidget(e);
                        }
                    },
                    initializeChatWidget: function (e) {
                        events.once(CONSTANTS.VISIT_EVENT, function (t) {
                            const i = new URL(
                                "/public/localiq-chat-widget.js?v=1",
                                environment.diyChatBotUriRoot
                            ).href;
                            util.getScript({
                                src: i,
                                success: function () {
                                    (e.session_id = `${t.visit_id}###${
                                        configurator.current()
                                            .globalMasterAdvertiserId
                                    }`),
                                        setTimeout(function () {
                                            window.LocaliqChatBot(e).render();
                                        }, 1e3);
                                },
                            });
                        });
                    },
                }),
                _diyChatBot),
            _diyChatBot,
            diyWidget =
                ((_diyWidget = {
                    init: function () {
                        if (configurator.isProductEnabled("diy_widget")) {
                            var e =
                                configurator.getProduct("diy_widget").config;
                            _diyWidget.initializeWidget(e);
                        }
                    },
                    initializeWidget: function (e) {
                        events.once(CONSTANTS.VISIT_EVENT, function (t) {
                            const i = new URL(
                                "/public/localiq-widgets.js?v=1",
                                environment.diyWidgetUriRoot
                            ).href;
                            util.getScript({
                                src: i,
                                success: function () {
                                    (e.session_id = `${t.visit_id}###${
                                        configurator.current()
                                            .globalMasterAdvertiserId
                                    }`),
                                        (e.visit = t),
                                        setTimeout(function () {
                                            window.LocalIQWidgets(e).render();
                                        }, 1e3);
                                },
                            });
                        });
                    },
                }),
                _diyWidget),
            _diyWidget,
            dmpPixel =
                ((_dmpPixel = {
                    init: function () {
                        pixels.init({
                            product_name: "dmp_pixel",
                            status_label: "DMP_PIXEL",
                            insights: "Pixel::DmpPixel",
                            validator: (e) => e,
                            loadPixel: _dmpPixel.loadDmpPixel,
                        });
                    },
                    loadDmpPixel: function (e, t) {
                        var i = new Image(1, 1);
                        (i.src =
                            "https://beacon.krxd.net/event.gif?event_id=" +
                            e +
                            "&event_type=pageview"),
                            document.body.appendChild(i),
                            t();
                    },
                }),
                _dmpPixel),
            _dmpPixel,
            emailCapture = (function () {
                var e, t, i, o, r, n;
                function renderForm(e) {
                    var t = translate.getTranslatedStrings(),
                        i = configurator.getPlatform(),
                        o =
                            "GBR" === i || "EUR" === i
                                ? ""
                                : "style='display:none'",
                        r = document.createElement("form");
                    return (
                        (r.id = "rl-email-form"),
                        (r.method = "POST"),
                        r.setAttribute("data-email", e),
                        (r.innerHTML =
                            "<label id='rl-email-label-name' for='rl-email-name' class='rl-email-label'>" +
                            t.rl_email.labels.name +
                            "<span class='rl-email-required'>" +
                            t.rl_email.validations.required +
                            "</span><input type='text' id='rl-email-name' name='name' class='rl-email-field' required></label><label id='rl-email-label-email' for='rl-email-email' class='rl-email-label'>" +
                            t.rl_email.labels.email +
                            "<span class='rl-email-required'>" +
                            t.rl_email.validations.required +
                            "</span><input type='email' id='rl-email-email' name='email' class='rl-email-field' required></label><label id='rl-email-label-phone' for='rl-email-phone' class='rl-email-label'>" +
                            t.rl_email.labels.phone +
                            "<span class='rl-email-required' style='display: none;'>required</span><input type='tel' id='rl-email-phone' name='phone' class='rl-email-field'></label><label id='rl-email-label-message' for='rl-email-message' class='rl-email-label'>" +
                            t.rl_email.labels.message +
                            "<span class='rl-email-required'>" +
                            t.rl_email.validations.required +
                            "</span><textarea id='rl-email-message' name='message' class='rl-email-field' required></textarea></label><label id='rl-do-not-email-label' for='rl-do-not-email' class='rl-email-label'" +
                            o +
                            "><span class='rl-email-required' style='display: none;'>" +
                            t.rl_email.validations.required +
                            "</span><input type='checkbox' id='rl-do-not-email' name='do-not-email'> " +
                            t.rl_email.labels.do_not_email +
                            "</label><input type='submit' name='submit' value='" +
                            t.rl_email.labels.send_message +
                            "' class='rl-button'><input type='button' name='cancel' value='" +
                            t.rl_email.labels.cancel +
                            "' class='rl-button'>"),
                        r
                    );
                }
                var a = {
                    addMutationListener: function () {
                        if (window.MutationObserver) {
                            n && a.removeMutationListener();
                            var e = util.debounce(
                                function () {
                                    a.replaceMailtoLinks();
                                },
                                200,
                                !1
                            );
                            (n = new MutationObserver(function (t) {
                                var i = !1;
                                util.forEach(util.makeArray(t), function (e) {
                                    i ||
                                        (e &&
                                            "HEAD" !== e.target.tagName &&
                                            util.forEach(
                                                util.makeArray(e.addedNodes),
                                                function (e) {
                                                    i ||
                                                        (i =
                                                            a.isReplaceableNode(
                                                                e
                                                            ));
                                                }
                                            ));
                                }),
                                    i && e();
                            })).observe(document.documentElement, {
                                childList: !0,
                                subtree: !0,
                            });
                        }
                    },
                    bindForm: function () {
                        (i = document.querySelector("#rl-email-form")) &&
                            (i.addEventListener("submit", a.onFormSubmit),
                            (o =
                                i.querySelector(
                                    "[name=cancel]"
                                )).addEventListener("click", a.hideEmailForm));
                    },
                    config: function () {
                        var t = {
                            cssSelector: e.cssSelector || "",
                            width: util.isNumeric(e.width)
                                ? String(e.width)
                                : "",
                            height: util.isNumeric(e.height)
                                ? String(e.height)
                                : "",
                            company: e.company || "",
                            companyEmail: e.companyEmail || "",
                        };
                        return (
                            t.cssSelector &&
                                ("#" !== t.cssSelector.charAt(0) &&
                                    (t.cssSelector = "#" + t.cssSelector),
                                document.querySelector(t.cssSelector) ||
                                    (t.cssSelector = "")),
                            t
                        );
                    },
                    hideEmailForm: function () {
                        a.unbindForm();
                        var e = document.querySelector("#rl-email-container");
                        e
                            ? e.parentNode.removeChild(e)
                            : t && t.parentNode.removeChild(t),
                            (t = undefined);
                    },
                    init: function () {
                        events.once(CONSTANTS.VISIT_EVENT, function (t) {
                            (r = t),
                                configurator.isProductEnabledForSource(
                                    "email_replacement",
                                    t.referrer_source
                                ) &&
                                    configurator.isProductEnabledForSource(
                                        "email",
                                        t.referrer_source
                                    ) &&
                                    ((e =
                                        configurator.getProduct(
                                            "email"
                                        ).config),
                                    a.addMutationListener(),
                                    a.replaceMailtoLinks());
                        });
                    },
                    isReplaceableNode: function (e) {
                        return (
                            1 === e.nodeType &&
                            "SCRIPT" !== e.nodeName &&
                            "IFRAME" !== e.nodeName
                        );
                    },
                    onFormSubmit: function (e) {
                        var i = e.target.getAttribute("data-email"),
                            o = translate.getTranslatedStrings();
                        conversionTracking.trackEmailCVT("EMAIL_SEND", {
                            customer_name:
                                document.querySelector("#rl-email-name").value,
                            customer_email:
                                document.querySelector("#rl-email-email").value,
                            customer_phone:
                                document.querySelector("#rl-email-phone").value,
                            target_email: i,
                        }),
                            (function trackEmail(e) {
                                var t = util.extend(
                                        {
                                            target_email: e.email,
                                            data: e.form,
                                            visitor_id: r.visitor_id || "",
                                            visit_id: r.visit_id || "",
                                            referrer_type:
                                                r.referrer_type || "",
                                            rl_eid:
                                                "trackEmail-" +
                                                util.randomString(7),
                                        },
                                        campaign.getCampaignPayload()
                                    ),
                                    i = "/api/v1/emails";
                                util.isFunction(window.RLEvaluator) &&
                                    window.RLEvaluator(i, t.rl_eid, t),
                                    localEnv.isEvaluationMode() ||
                                        util.ajax({
                                            method: "POST",
                                            payload: t,
                                            url: environment.captureUriRoot + i,
                                        });
                            })({
                                email: i,
                                form: util.stringify({
                                    customer_name:
                                        document.querySelector("#rl-email-name")
                                            .value,
                                    customer_email:
                                        document.querySelector(
                                            "#rl-email-email"
                                        ).value,
                                    customer_phone:
                                        document.querySelector(
                                            "#rl-email-phone"
                                        ).value,
                                    message:
                                        document.querySelector(
                                            "#rl-email-message"
                                        ).value,
                                    customer_opt_out: document.querySelector(
                                        "#rl-do-not-email"
                                    ).checked
                                        ? "on"
                                        : undefined,
                                }),
                            });
                        var n = document.createElement("span");
                        return (
                            (n.className = "rl-email-confirmation"),
                            (n.innerHTML = o.rl_email.labels.message_sent),
                            (t.innerHTML = ""),
                            t.appendChild(n),
                            setTimeout(a.hideEmailForm, 1e3),
                            e.preventDefault(),
                            !1
                        );
                    },
                    removeMutationListener: function () {
                        n && (n.disconnect(), (n = null));
                    },
                    replaceMailtoLinks: function () {
                        if (!configurator.isHIPAA()) {
                            var e = util.makeArray(
                                document.body.querySelectorAll("a")
                            );
                            util.forEach(e, function (e) {
                                if (
                                    !(
                                        "mailto:" !== e.protocol ||
                                        e.className.indexOf("rl-no-form") >
                                            -1 ||
                                        "javascript:void(0)" === e.href
                                    ) &&
                                    e.href.match(/.*(@|%40).*\..*/)
                                ) {
                                    var t = e.href.replace("mailto:", "");
                                    (e.href = "javascript:void(0);"),
                                        e.addEventListener(
                                            "click",
                                            function () {
                                                a.showEmailForm(t);
                                            }
                                        );
                                }
                            });
                        }
                    },
                    showEmailForm: function (e) {
                        if (!t) {
                            var i = a.config();
                            i.companyEmail = i.companyEmail || e;
                            var o = document.createElement("div");
                            if (
                                ((o.className = "rl-email-company-name"),
                                (o.innerHTML = i.company),
                                i.cssSelector)
                            )
                                (t = document.querySelector(i.cssSelector)) &&
                                    (t.appendChild(o),
                                    t.appendChild(renderForm(i.companyEmail)));
                            else {
                                var r = document.createElement("div");
                                (r.id = "rl-email-container"),
                                    ((t = document.createElement("div")).id =
                                        "rl-email"),
                                    t.appendChild(o),
                                    t.appendChild(renderForm(i.companyEmail)),
                                    r.appendChild(t);
                                var n = document.createElement("div");
                                (n.className = "rl-email-overlay-win"),
                                    r.appendChild(n),
                                    document.body.appendChild(r);
                            }
                            a.bindForm(),
                                conversionTracking.trackEmailCVT("EMAIL_OPEN", {
                                    target_email: i.companyEmail,
                                });
                        }
                    },
                    unbindForm: function () {
                        i &&
                            (i.removeEventListener("submit", a.onFormSubmit),
                            o.removeEventListener("click", a.hideEmailForm),
                            (i = undefined),
                            (o = undefined));
                    },
                };
                return a;
            })(),
            euVisitorCheck =
                ((retry = !0),
                (_euVisitorCheck = {
                    init: function () {
                        _euVisitorCheck.isEUVisitor();
                    },
                    originCountry: function () {
                        util.ajax({
                            url: environment.originCountryURL,
                            method: "GET",
                            callback: function (e) {
                                if (e) {
                                    var t = util.parse(e);
                                    (!t.isEUVisitor ||
                                        (t.isEUVisitor &&
                                            -1 ===
                                                ["USA", "CAN", "AUS"].indexOf(
                                                    configurator.getPlatform()
                                                ))) &&
                                        events.trigger(
                                            CONSTANTS.EU_VISITOR_CHECK_EVENT
                                        ),
                                        sessionStorage.setItem(
                                            "RLEU",
                                            t.isEUVisitor
                                        ),
                                        sessionStorage.setItem(
                                            "RLCountry",
                                            t.country
                                        );
                                } else
                                    retry &&
                                        (_euVisitorCheck.originCountry(),
                                        (retry = !1));
                            },
                        });
                    },
                    isEUVisitor: function () {
                        var e = sessionStorage.getItem("RLEU");
                        e
                            ? ("false" === e ||
                                  (e &&
                                      -1 ===
                                          ["USA", "CAN", "AUS"].indexOf(
                                              configurator.getPlatform()
                                          ))) &&
                              events.trigger(CONSTANTS.EU_VISITOR_CHECK_EVENT)
                            : _euVisitorCheck.originCountry();
                    },
                }),
                _euVisitorCheck),
            retry,
            _euVisitorCheck,
            externalJS =
                ((_externalJS = {
                    init: function () {
                        if (
                            configurator.isProductEnabled("externaljs") &&
                            !localEnv.isSecondaryMode()
                        ) {
                            var e =
                                configurator.getProduct("externaljs").config;
                            util.isPlainObject(e) &&
                                (e.google_analytics_id &&
                                    util.isString(e.google_analytics_id) &&
                                    (_externalJS.loadGoogleAnalytics(
                                        e.google_analytics_id
                                    ),
                                    insights.track(
                                        "Pixel::ExternalJS::GoogleAnalytics"
                                    )),
                                !localEnv.isPrivacyDeclined() &&
                                    e.simplifi_params &&
                                    util.isString(e.simplifi_params) &&
                                    (_externalJS.loadSimplifiTracking(
                                        e.simplifi_params
                                    ),
                                    insights.track(
                                        "Pixel::ExternalJS::Simplifi"
                                    )));
                        }
                    },
                    loadGoogleAnalytics: function (e) {
                        localEnv.isPrivacyDeclined()
                            ? ((window._gaq = window._gaq || []),
                              window._gaq.push(["_setAccount", e]),
                              window._gaq.push(["_gat._anonymizeIp"]),
                              window._gaq.push(["_trackPageview"]))
                            : ((window._gaq = window._gaq || []),
                              window._gaq.push(["_setAccount", e]),
                              window._gaq.push(["_trackPageview"]));
                        var t = document.createElement("script");
                        (t.type = "text/javascript"),
                            (t.async = !0),
                            (t.src =
                                ("https" === localEnv.getPageUri().protocol
                                    ? "https://ssl"
                                    : "http://www") +
                                ".google-analytics.com/ga.js");
                        var i = document.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(t, i);
                    },
                    loadSimplifiTracking: function (e) {
                        var t = document.createElement("script");
                        (t.type = "text/javascript"),
                            (t.async = !0),
                            e.match(
                                /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
                            )
                                ? (t.src = "https://tag.simpli.fi/sifitag/" + e)
                                : (t.src = "https://i.simpli.fi/dpx.js?" + e);
                        var i = document.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(t, i);
                    },
                }),
                _externalJS),
            _externalJS,
            facebookPixel =
                ((_facebookPixel = {
                    init: function () {
                        var e =
                            (configurator.getProduct("facebook_pixel") || {})
                                .config || {};
                        (configurator.current().hipaa_client &&
                            !e.hipaa_override) ||
                            pixels.init({
                                product_name: "facebook_pixel",
                                status_label: "FACEBOOK_PIXEL",
                                insights: "Pixel::FacebookPixel",
                                validator: (e) => e && util.isString(e),
                                loadPixel: _facebookPixel.loadFacebookPixel,
                            });
                    },
                    loadFacebookPixel: function (e, t) {
                        var i, o, r, n, a, c;
                        (o = document),
                            (r = "script"),
                            (i = window).fbq ||
                                ((n = i.fbq =
                                    function () {
                                        n.callMethod
                                            ? n.callMethod.apply(n, arguments)
                                            : n.queue.push(arguments);
                                    }),
                                i._fbq || (i._fbq = n),
                                (n.push = n),
                                (n.loaded = !0),
                                (n.version = "2.0"),
                                (n.queue = []),
                                ((a = o.createElement(r)).async = !0),
                                (a.src =
                                    "//connect.facebook.net/en_US/fbevents.js"),
                                (c =
                                    o.getElementsByTagName(
                                        r
                                    )[0]).parentNode.insertBefore(a, c)),
                            util.isFunction(window.fbq) &&
                                ("USA" === configurator.getPlatform() &&
                                    window.fbq(
                                        "dataProcessingOptions",
                                        ["LDU"],
                                        0,
                                        0
                                    ),
                                window.fbq("init", e),
                                window.fbq("track", "PageView")),
                            t();
                    },
                }),
                _facebookPixel),
            _facebookPixel,
            formCapture = (function () {
                var e,
                    t,
                    i,
                    o,
                    r,
                    n,
                    a,
                    c,
                    s,
                    l = "rl-submit-info",
                    u = "rl-submit-x-coordinate",
                    d = "rl-submit-y-coordinate",
                    m = { XHR: "XHR", Submit: "Submit", API: "API" },
                    g = 0;
                function normalizeName(e) {
                    return util
                        .trim(e.replace(/\*+/g, ""))
                        .toLowerCase()
                        .replace(/ /gi, "_");
                }
                var p = {
                    sendWixLead: function (e, t) {
                        if ("Lead" === e) {
                            var i = {};
                            util.forEach(n, function (e, t) {
                                t.value && (i[e] = t.value);
                            }),
                                util.isEmpty(i) ||
                                    window.RLCAP.captureForm(i, {
                                        url: "https://www.wix.com/RL_WIX_FORM",
                                    });
                        }
                    },
                    registerWixListener: function () {
                        function register() {
                            window.wixDevelopersAnalytics.register(
                                "Lead",
                                (e, t) => p.sendWixLead(e, t)
                            );
                        }
                        return (
                            window.wixDevelopersAnalytics
                                ? util.isFunction(
                                      window.wixDevelopersAnalytics.register
                                  ) && register()
                                : window.addEventListener(
                                      "wixDevelopersAnalyticsReady",
                                      register
                                  ),
                            register
                        );
                    },
                    init: function () {
                        p.initializeFieldDefaults(),
                            p.addFieldListener(),
                            events.once(CONSTANTS.VISIT_EVENT, function (e) {
                                (s = e),
                                    p.exposePublicAPI(),
                                    p.exposeScorpionAPI(),
                                    p.registerWixListener(),
                                    !configurator.isProductEnabledForSource(
                                        "form",
                                        e.referrer_source
                                    ) ||
                                        localEnv.isScorpion() ||
                                        window.RL_FORM_CAPTURE_DISABLED ||
                                        (p.wrapFormSubmit(),
                                        p.addSubmitListener(),
                                        p.wrapFetch(),
                                        p.wrapXHR());
                            });
                    },
                    addFieldListener: function () {
                        document.addEventListener("focusout", p.onFieldChange),
                            document.addEventListener(
                                "change",
                                p.onFieldChange
                            ),
                            document.addEventListener("keyup", p.onFieldChange);
                    },
                    addFormAnalyticsFields: function (e) {
                        var t = campaign.current(),
                            i = configurator.getPlatform(),
                            o = i + "_" + t.cid,
                            r = campaign.getMasterCampaignID(o),
                            n = [];
                        if (campaign.isPaidCampaign()) {
                            var a = configurator.getFormAnalyticsFields(r),
                                c = configurator.getFormAnalyticsFields(
                                    i + "_" + t.scid
                                ),
                                l =
                                    configurator.getFormAnalyticsFields(
                                        "ANY_CAMPAIGN"
                                    );
                            n = a.concat(c, l);
                        } else
                            n = configurator.getFormAnalyticsFields(
                                s.referrer_type
                            );
                        n.forEach(function (t) {
                            var i = e.querySelector(
                                'input[type="hidden"][name="' + t.name + '"]'
                            );
                            i ||
                                (((i = document.createElement("input")).type =
                                    "hidden"),
                                (i.name = t.name),
                                e.appendChild(i)),
                                (i.value = t.value);
                        });
                    },
                    addSubmitListener: function () {
                        r && p.removeSubmitListener(),
                            (r = function () {
                                return (
                                    document.addEventListener(
                                        "submit",
                                        p.onFormSubmit
                                    ),
                                    util.defer(function () {
                                        document.removeEventListener(
                                            "submit",
                                            p.onFormSubmit
                                        );
                                    }),
                                    !0
                                );
                            }),
                            document.addEventListener("submit", r, !0),
                            document.addEventListener("click", p.onSubmitClick);
                    },
                    appendSubmitInformation: function (e, t) {
                        var i = t.getAttribute("name"),
                            o = t.getAttribute("value");
                        !(function handleImageClick(e, t) {
                            var i = t.getAttribute("name"),
                                o = e.querySelector("." + u),
                                r = e.querySelector("." + d);
                            if ("INPUT" === t.tagName && "image" === t.type) {
                                var n = t.getAttribute("data-capture-client-x"),
                                    a = t.getAttribute("data-capture-client-y");
                                o ||
                                    ((o =
                                        document.createElement(
                                            "input"
                                        )).classList.add(u),
                                    (o.type = "hidden"),
                                    e.appendChild(o)),
                                    r ||
                                        ((r =
                                            document.createElement(
                                                "input"
                                            )).classList.add(d),
                                        (r.type = "hidden"),
                                        e.appendChild(r)),
                                    i
                                        ? ((o.name = i + ".x"),
                                          (r.name = i + ".y"))
                                        : ((o.name = "x"), (r.name = "y")),
                                    (o.value = n),
                                    (r.value = a);
                            } else
                                o && o.parentNode.removeChild(o),
                                    r && r.parentNode.removeChild(r);
                        })(e, t);
                        var r = e.querySelector(
                                'input[type="hidden"][value="' +
                                    o +
                                    '"][name="' +
                                    i +
                                    '"]'
                            ),
                            n = e.querySelector("." + l);
                        r && !r.classList.contains(l)
                            ? n && n.parentNode.removeChild(n)
                            : i
                            ? (n ||
                                  (((n = document.createElement("input")).type =
                                      "hidden"),
                                  n.classList.add(l),
                                  e.appendChild(n)),
                              (n.name = i),
                              (n.value = o))
                            : n && n.parentNode.removeChild(n);
                    },
                    bufferCaptureForm: function (e, t, i, o) {
                        ((a = a || {})[(e = m[e])] = a[e] || []),
                            a[e].push({
                                type: e,
                                url: t,
                                fields: i,
                                complete: o,
                            }),
                            c ||
                                (c = setTimeout(function () {
                                    p.onCaptureBufferExpire(a),
                                        (c = null),
                                        (a = null);
                                }, 100));
                    },
                    captureForm: function (e, t, i, o) {
                        if (((e = m[e]), (g += 1) > 20)) {
                            if (g % 1e3 == 0) {
                                var r = urlUtil.parse(t);
                                window.RLCAP.onFault(
                                    "Form Post Error:" +
                                        r.host +
                                        " has attempted " +
                                        g +
                                        " form posts"
                                );
                            }
                            util.defer(o);
                        } else {
                            var n = p.serializeFields(i);
                            n
                                ? campaign.appendUrlToCampaign(t, function () {
                                      var r = util.extend(
                                          campaign.getCampaignPayload(),
                                          {
                                              visitor_id: s.visitor_id || "",
                                              visit_id: s.visit_id || "",
                                              referrer_type:
                                                  s.referrer_type || "",
                                              formUri: t,
                                              postbody: n,
                                              hidden_fields: encodeURIComponent(
                                                  p
                                                      .getHiddenFieldsNames(i)
                                                      .join(",")
                                              ),
                                              referrer: document.referrer,
                                              rl_eid:
                                                  "trackPost-" +
                                                  util.randomString(7),
                                              version: CAPTURE_VERSION,
                                          }
                                      );
                                      insights.track(
                                          "FormCapture::" + e,
                                          null,
                                          { immediate: !0 }
                                      );
                                      var a = "/api/v1/posts";
                                      util.isFunction(window.RLEvaluator) &&
                                          window.RLEvaluator(a, r.rl_eid, r),
                                          localEnv.isEvaluationMode()
                                              ? util.defer(o)
                                              : util.ajax({
                                                    method: "POST",
                                                    payload: r,
                                                    url:
                                                        environment.captureUriRoot +
                                                        a,
                                                    callback: function (e) {
                                                        util.isString(e) &&
                                                            (e = util.parse(
                                                                e || "{}"
                                                            )),
                                                            e.valid
                                                                ? conversionTracking.trackFormCVT(
                                                                      t,
                                                                      o
                                                                  )
                                                                : o();
                                                    },
                                                });
                                  })
                                : conversionTracking.trackFormCVT(t, o);
                        }
                    },
                    exposePublicAPI: function () {
                        window.RLCAP.captureForm = function (e, t) {
                            var i;
                            if (
                                ((t = util.extend(
                                    {},
                                    {
                                        callback: function () {},
                                        url: e.action || window.location.href,
                                    },
                                    t
                                )),
                                util.isString(e) &&
                                    (e = urlUtil.deparam(
                                        e.replace(/\+/g, "%20")
                                    )),
                                e instanceof HTMLFormElement)
                            )
                                i = p.extractFormFields(e);
                            else {
                                if (!util.isPlainObject(e))
                                    throw new Error(
                                        "RLCAP: Invalid data passed to captureForm."
                                    );
                                (i = []),
                                    util.forEach(e, function (e, t) {
                                        if (!util.isString(t))
                                            throw new Error(
                                                "RLCAP: Invalid data passed to captureForm."
                                            );
                                        i.push({
                                            name: e,
                                            value: t,
                                            isExcluded: !1,
                                            isHidden: !1,
                                        });
                                    });
                            }
                            p.captureForm(m.API, t.url, i, t.callback);
                        };
                    },
                    exposeScorpionAPI: function () {
                        (window.RL = window.RL || {}),
                            (window.RL.Scorpion = {
                                trackFormPost: function (e) {
                                    (e = util.extend(
                                        {},
                                        {
                                            url: "",
                                            data: {},
                                            complete: function () {},
                                        },
                                        e
                                    )),
                                        window.RLCAP.captureForm(e.data, {
                                            url: e.url,
                                            callback: e.complete,
                                        });
                                },
                            });
                    },
                    extractFormFields: function (e) {
                        var t = [];
                        return (
                            util.forEach(
                                util.makeArray(e.elements),
                                function (e) {
                                    var i = p.parseField(e);
                                    if (i)
                                        switch (e.nodeName) {
                                            case "INPUT":
                                                switch (e.type) {
                                                    case "checkbox":
                                                    case "radio":
                                                        e.checked && t.push(i);
                                                        break;
                                                    case "file":
                                                    case "button":
                                                    case "submit":
                                                    case "reset":
                                                        break;
                                                    default:
                                                        t.push(i);
                                                }
                                                break;
                                            case "TEXTAREA":
                                            case "SELECT":
                                                t.push(i);
                                        }
                                }
                            ),
                            t
                        );
                    },
                    getBufferedCapturesToSend: function (e) {
                        var t = [];
                        return (
                            e.XHR && e.XHR.length
                                ? util.forEach(e.XHR, function (e) {
                                      t.push(e);
                                  })
                                : e.Submit &&
                                  e.Submit.length &&
                                  t.push(e.Submit[0]),
                            t
                        );
                    },
                    getFormForElement: function (e) {
                        if (e.form) return e.form;
                        for (; e && "FORM" !== e.tagName; ) e = e.parentElement;
                        return e;
                    },
                    getHiddenFieldsNames: function (e) {
                        var t = [];
                        return (
                            util.forEach(e, function (e) {
                                e.isHidden && t.push(e.name);
                            }),
                            t
                        );
                    },
                    getNameForElement: function (e) {
                        var t =
                            e.getAttribute("data-rl-capture-fieldname") ||
                            e.getAttribute("data-capture-fieldname");
                        if (t) return normalizeName(t);
                        if (localEnv.isDuda()) {
                            if (
                                "checkbox" === e.type &&
                                e.className.indexOf("reloOptOut") >= 0
                            )
                                return "customer_opt_out";
                            if (e.name) {
                                var i = document.querySelector(
                                    "input[name='label-" +
                                        util.trim(e.name) +
                                        "']"
                                );
                                if (i && i.value) return normalizeName(i.value);
                            }
                        }
                        if (e.id) {
                            var o = document.querySelector(
                                "label[for='" + util.trim(e.id) + "']"
                            );
                            if (o) return normalizeName(o.textContent);
                        }
                        if (e.name) {
                            var r = document.querySelector(
                                "label[for='" + util.trim(e.name) + "']"
                            );
                            if (r) return normalizeName(r.textContent);
                        }
                        if ("SELECT" === e.tagName) {
                            var n = document.querySelector(
                                "label[for='" +
                                    util.trim(e.id) +
                                    "-selectized']"
                            );
                            if (n) return normalizeName(n.textContent);
                        }
                        return (t = e.name || e.id || e.placeholder)
                            ? normalizeName(t)
                            : void 0;
                    },
                    initializeFieldDefaults: function () {
                        n = {};
                        var e = util.makeArray(
                            document.querySelectorAll("input,textarea,select")
                        );
                        util.forEach(e, function (e) {
                            if (
                                !p.isSubmitElement(e) &&
                                ("checkbox" !== e.type || e.checked)
                            ) {
                                var t = p.parseField(e);
                                if (t) {
                                    var i = t.name;
                                    if ("radio" === e.type) {
                                        if (!e.checked) return;
                                        e.name && (i = e.name);
                                    }
                                    n[i] = t;
                                }
                            }
                        });
                    },
                    isIgnoredElement: function (e) {
                        return (
                            e.hasAttribute("data-rl-capture-ignore") ||
                            e.hasAttribute("data-capture-ignore")
                        );
                    },
                    isSearchElement: function (e) {
                        var t = /search|busca|zoeken|suche/i,
                            i = !1,
                            o = p.getFormForElement(e);
                        if (o) {
                            var r = o.getAttribute("action"),
                                n = urlUtil.parse(r);
                            util.isString(n.host) &&
                                n.host.match(t) &&
                                (i = !0),
                                util.isString(n.path) &&
                                    n.path.match(t) &&
                                    (i = !0),
                                util.forEach(["id", "class"], function (e) {
                                    !i &&
                                        o.hasAttribute(e) &&
                                        o.getAttribute(e).match(t) &&
                                        (i = !0);
                                });
                        }
                        return (
                            util.forEach(
                                [
                                    "id",
                                    "class",
                                    "type",
                                    "name",
                                    "placeholder",
                                    "title",
                                    "action",
                                ],
                                function (o) {
                                    !i &&
                                        e.hasAttribute(o) &&
                                        e.getAttribute(o).match(t) &&
                                        (i = !0);
                                }
                            ),
                            i
                        );
                    },
                    isSSNElement: function (e) {
                        var t = /social.sec|ssn/i,
                            i = !1,
                            o = p.getFormForElement(e);
                        o &&
                            util.forEach(
                                ["action", "id", "class"],
                                function (e) {
                                    !i &&
                                        o.hasAttribute(e) &&
                                        o.getAttribute(e).match(t) &&
                                        (i = !0);
                                }
                            );
                        return (
                            util.forEach(
                                [
                                    "id",
                                    "class",
                                    "type",
                                    "name",
                                    "placeholder",
                                    "title",
                                    "action",
                                ],
                                function (o) {
                                    !i &&
                                        e.hasAttribute(o) &&
                                        e.getAttribute(o).match(t) &&
                                        (i = !0);
                                }
                            ),
                            i
                        );
                    },
                    isSubmitElement: function (e) {
                        return (
                            ("INPUT" === e.tagName && "submit" === e.type) ||
                            ("INPUT" === e.tagName && "image" === e.type) ||
                            ("INPUT" === e.tagName && "button" === e.type) ||
                            ("BUTTON" === e.tagName && "submit" === e.type)
                        );
                    },
                    obfuscateCreditCardString: function (e) {
                        return (
                            util.forEach(
                                [
                                    /35(2[8-9]|[3-8]\d)[ -.]?(\d{4}[ -.]?){2}\d{4}/g,
                                    /3[47]\d{2}[ -.]?\d{6}[ -.]?\d{5}/g,
                                    /3([68]\d|0[0-5])\d[ -.]?\d{6}[ -.]?\d{4}/g,
                                    /6(011|5\d{2})[ -.]?(\d{4}[ -.]?){2}\d{4}/g,
                                    /5[1-5]\d{2}[ -.]?(\d{4}[ -.]?){2}\d{4}/g,
                                    /4\d{3}[ -.]?(\d{4}|\d{3})[ -.]?(\d{4}|\d{2})[ -.]?\d{4}/g,
                                ],
                                function (t) {
                                    e = e.replace(t, "****************");
                                }
                            ),
                            e
                        );
                    },
                    onCaptureBufferExpire: function (e) {
                        var t = (e.XHR || []).concat(e.Submit || []),
                            i = p.getBufferedCapturesToSend(e);
                        util.forEach(i, function (e, o) {
                            p.captureForm(e.type, e.url, e.fields, function () {
                                (i[o].isComplete = !0),
                                    util.every(i, { isComplete: !0 }) &&
                                        util.forEach(t, function (e) {
                                            util.defer(e.complete);
                                        });
                            });
                        });
                    },
                    onFieldChange: function (e) {
                        var t = e.target;
                        if (
                            !p.isSubmitElement(t) &&
                            ("INPUT" === t.tagName ||
                                "SELECT" === t.tagName ||
                                "TEXTAREA" === t.tagName)
                        ) {
                            var i = p.parseField(t);
                            if (!i) return;
                            var o = i.name;
                            if ("radio" === t.type) {
                                if (!t.checked) return;
                                t.name && (o = t.name);
                            }
                            if ("checkbox" === t.type && !t.checked)
                                return void delete n[o];
                            n[o] = i;
                        }
                    },
                    onFormSubmit: function (e) {
                        if (!1 !== e.returnValue && !e.defaultPrevented) {
                            var t = e.target,
                                i =
                                    e.submitter ||
                                    t._clickedSubmit ||
                                    document.createElement("input");
                            p.appendSubmitInformation(t, i),
                                i.hasAttribute("formaction") &&
                                    t.setAttribute(
                                        "action",
                                        i.getAttribute("formaction")
                                    );
                            var o = t.getAttribute("action"),
                                r = p.validate(o);
                            if (r)
                                return (
                                    p.bufferCaptureForm(
                                        m.Submit,
                                        r,
                                        p.extractFormFields(t),
                                        function () {
                                            HTMLFormElement.prototype.submit.call(
                                                t,
                                                !0
                                            );
                                        }
                                    ),
                                    e.preventDefault(),
                                    !1
                                );
                        }
                    },
                    onSubmitClick: function (e) {
                        if (p.isSubmitElement(e.target)) {
                            var t = e.target,
                                i = p.getFormForElement(t);
                            i &&
                                (p.addFormAnalyticsFields(i),
                                "INPUT" === t.tagName &&
                                    "image" === t.type &&
                                    (t.setAttribute(
                                        "data-capture-client-x",
                                        e.clientX
                                    ),
                                    t.setAttribute(
                                        "data-capture-client-y",
                                        e.clientY
                                    )),
                                (i._clickedSubmit = t));
                        }
                    },
                    onXHRSend: function (e, t, i, o) {
                        var r = urlUtil.parse(e);
                        if ((i = i || r.query)) {
                            if (
                                i instanceof FormData ||
                                i instanceof URLSearchParams
                            ) {
                                const e = {};
                                i.forEach((t, i) => {
                                    e[i] = t;
                                }),
                                    (i = urlUtil.param(e));
                            } else {
                                if (!util.isString(i))
                                    return (
                                        insights.track(
                                            "FormCapture::XHRUnknownType",
                                            { type: i.constructor.name }
                                        ),
                                        void o()
                                    );
                                i = (i = (i = (i = (i = i.replace(
                                    /\+/g,
                                    "%20"
                                )).replace(/%25/g, "%")).replace(
                                    /%2B/g,
                                    "%20"
                                )).replace(/%0D%0A/g, "%0A")).replace(
                                    /\\\\n/g,
                                    "\n"
                                );
                            }
                            if (i.indexOf("ViewEasyDNNGallery") >= 0)
                                return (
                                    insights.track(
                                        "FormCapture::ViewEasyDNNGallery"
                                    ),
                                    void o()
                                );
                            var a = [];
                            util.forEach(n, function (e, t) {
                                t.value &&
                                    (i.indexOf(encodeURIComponent(t.value)) >=
                                        0 ||
                                        i.indexOf(t.value) >= 0) &&
                                    a.push(t);
                            }),
                                a.length
                                    ? t
                                        ? p.bufferCaptureForm(m.XHR, e, a, o)
                                        : (p.captureForm(
                                              m.XHR,
                                              e,
                                              a,
                                              function () {}
                                          ),
                                          o())
                                    : o();
                        } else o();
                    },
                    parseField: function (e) {
                        var t = p.getNameForElement(e);
                        if (
                            t &&
                            !(
                                "INPUT" === e.tagName &&
                                e.id.indexOf("-selectized") > -1
                            )
                        ) {
                            var i = !1;
                            ("password" === e.type ||
                                p.isIgnoredElement(e) ||
                                p.isSearchElement(e) ||
                                p.isSSNElement(e)) &&
                                (i = !0);
                            var o = p.getFormForElement(e);
                            o && p.isIgnoredElement(o) && (i = !0);
                            var r = e.value;
                            return (
                                "customer_opt_out" === t && (r = "on"),
                                {
                                    name: t,
                                    value: r,
                                    isExcluded: i,
                                    isHidden: "hidden" === e.type,
                                }
                            );
                        }
                    },
                    removeSubmitListener: function () {
                        document.removeEventListener("click", p.onSubmitClick),
                            r &&
                                (document.removeEventListener("submit", r, !0),
                                (r = undefined));
                    },
                    serializeFields: function (e) {
                        var t = [];
                        return (
                            util.forEach(e, function (e) {
                                if (!e.isExcluded) {
                                    var i = p.obfuscateCreditCardString(
                                        e.value
                                    );
                                    t.push(
                                        encodeURIComponent(e.name) +
                                            "=" +
                                            encodeURIComponent(i)
                                    );
                                }
                            }),
                            t.join("&")
                        );
                    },
                    unwrapFormSubmit: function () {
                        if (t) {
                            (HTMLFormElement.prototype.submit = t),
                                (t = undefined);
                            var e = document.body.querySelectorAll(
                                "form[rl-custom-form-submit]"
                            );
                            util.forEach(util.makeArray(e), function (e) {
                                e.rlOldSubmit &&
                                    ((e.submit = e.rlOldSubmit),
                                    delete e.rlOldSubmit);
                            });
                        }
                    },
                    validate: function (e) {
                        if (util.isString(e)) {
                            var t = localEnv.resolveURL(e);
                            if (
                                !localEnv.isRLHost(t) &&
                                !localEnv.isGlobalIgnoredUrl(t) &&
                                !localEnv.isIgnoredNetworkRequest(t)
                            )
                                return t;
                        }
                    },
                    wrapFetch: function () {
                        e ||
                            ((e = window.fetch),
                            (window.fetch = function (t, i) {
                                var o,
                                    r = util.makeArray(arguments),
                                    n = this;
                                util.isString(t)
                                    ? (o = t)
                                    : t instanceof Request
                                    ? (o = t.url)
                                    : util.isFunction(t.toString) &&
                                      (o = t.toString());
                                var a = p.validate(o);
                                return a
                                    ? (function getBody(e, t) {
                                          return (t = t || {}).body
                                              ? Promise.resolve(t.body)
                                              : e instanceof Request &&
                                                !e.bodyUsed
                                              ? e.clone().text()
                                              : Promise.resolve();
                                      })(t, i)
                                          .then(function (e) {
                                              return new Promise(function (t) {
                                                  p.onXHRSend(
                                                      a,
                                                      !0,
                                                      e,
                                                      function () {
                                                          t();
                                                      }
                                                  );
                                              });
                                          })
                                          .then(function () {
                                              return e.apply(n, r);
                                          })
                                    : e.apply(n, r);
                            }));
                    },
                    wrapFormSubmit: function () {
                        t && p.unwrapFormSubmit(),
                            (t = HTMLFormElement.prototype.submit),
                            (HTMLFormElement.prototype.submit = function (e) {
                                var i = this;
                                if (e) return t.call(i);
                                var o = i.getAttribute("action"),
                                    r = p.validate(o);
                                if (!r) return t.call(i);
                                p.bufferCaptureForm(
                                    m.Submit,
                                    r,
                                    p.extractFormFields(i),
                                    function () {
                                        return t.call(i);
                                    }
                                );
                            });
                        var e = document.body.querySelectorAll(
                            "form[rl-custom-form-submit]"
                        );
                        util.forEach(util.makeArray(e), function (e) {
                            (e.rlOldSubmit = e.submit),
                                (e.submit = function () {
                                    var t = e.getAttribute("action"),
                                        i = p.validate(t);
                                    if (!i) return e.rlOldSubmit();
                                    p.bufferCaptureForm(
                                        m.Submit,
                                        i,
                                        p.extractFormFields(e),
                                        function () {
                                            return e.rlOldSubmit();
                                        }
                                    );
                                });
                        });
                    },
                    wrapXHR: function () {
                        i ||
                            ((i = XMLHttpRequest.prototype.open),
                            (o = XMLHttpRequest.prototype.send),
                            (XMLHttpRequest.prototype.open = function (
                                e,
                                t,
                                o
                            ) {
                                return (
                                    util.isString(t)
                                        ? (this._url = t)
                                        : util.isFunction(t.toString) &&
                                          (this._url = t.toString()),
                                    (this._async = void 0 === o || o),
                                    i.apply(this, util.makeArray(arguments))
                                );
                            }),
                            (XMLHttpRequest.prototype.send = function (e) {
                                var t = util.makeArray(arguments),
                                    i = this,
                                    r = p.validate(i._url);
                                if (!r) return o.apply(i, t);
                                p.onXHRSend(r, this._async, e, function () {
                                    o.apply(i, t);
                                });
                            }));
                    },
                };
                return p;
            })(),
            googleDisplayNetwork =
                ((_googleDisplayNetwork = {
                    init: function () {
                        pixels.init({
                            product_name: "google_display_network",
                            status_label: "GOOGLE_DISPLAY_NETWORK",
                            insights: "Pixel::GoogleDisplayNetwork",
                            validator: (e) => e && util.isNumeric(e),
                            loadPixel:
                                _googleDisplayNetwork.loadGoogleDisplayNetwork,
                        });
                    },
                    loadGoogleDisplayNetwork: function (e, t) {
                        (e = parseInt(e)),
                            (window.google_conversion_id = e),
                            (window.google_custom_params =
                                window.google_tag_params),
                            (window.google_remarketing_only = !0),
                            util.getScript({
                                src: "//www.googleadservices.com/pagead/conversion_async.js",
                                success: function () {
                                    window.google_trackConversion({
                                        google_conversion_id: e,
                                        google_custom_params:
                                            " + window.google_tag_params +",
                                        google_remarketing_only: !0,
                                    }),
                                        t();
                                },
                                error: function () {},
                            });
                    },
                }),
                _googleDisplayNetwork),
            _googleDisplayNetwork,
            googlePixels = (function () {
                var e;
                function gtag() {
                    dataLayer.push(arguments);
                }
                window.dataLayer = window.dataLayer || [];
                var t = {
                    init: function () {
                        var i,
                            o,
                            r = configurator.isProductEnabled("google_gtag"),
                            n = configurator.isProductEnabled("pmax_gtag"),
                            a =
                                configurator.isProductEnabled(
                                    "google_analytics4"
                                );
                        (r || a || n) &&
                            !localEnv.isSecondaryMode() &&
                            (r && (i = t.getPixelId("AW", "google_gtag")),
                            n && (i = t.getPixelId("AW", "pmax_gtag")),
                            a && (o = t.getPixelId("G", "google_analytics4")),
                            (i || o) &&
                                ((e = !t.isGoogleSCID()),
                                gtag("consent", "default", {
                                    ad_storage: "granted",
                                    ad_user_data: "granted",
                                    ad_personalization: "granted",
                                    analytics_storage: "granted",
                                }),
                                util.getScript({
                                    src: `${environment.gtagScriptSource}?id=${
                                        i || o
                                    }`,
                                    success: function () {
                                        t.onSuccess(i, o);
                                    },
                                    error: function () {},
                                }),
                                insights.track("Pixel::GooglePixels")));
                    },
                    isGoogleSCID: function () {
                        return (
                            !(
                                !configurator.current().google_wpcids ||
                                !campaign.isPaidCampaign()
                            ) &&
                            configurator
                                .current()
                                .google_wpcids.wpcids.includes(
                                    campaign.current().scid
                                )
                        );
                    },
                    getPixelId: function (e, t) {
                        var i = configurator.getProduct(t);
                        if (!i) return "";
                        var o = i.config,
                            r = o.override_pixel_id || o.pixel_id;
                        return r ? `${e}-${r}` : "";
                    },
                    onSuccess: function (e, i) {
                        gtag("js", new Date()),
                            e &&
                                (gtag("config", e),
                                t.trackGoogleConversion(e),
                                t.trackGooglePhoneConversion(e)),
                            i && (gtag("config", i), t.trackShopifyPurchase());
                    },
                    trackGoogleConversion: function (t) {
                        configurator.isProductEnabled("google_conversion") &&
                            (e ||
                                events.subscribe(
                                    "googleConversion",
                                    function (e) {
                                        gtag("event", "conversion", {
                                            send_to: `${t}/${e.label}`,
                                        }),
                                            insights.track(
                                                "GoogleGtag::GoogleConversion",
                                                {
                                                    event: "conversion",
                                                    adWordsId: t,
                                                    label: e.label,
                                                },
                                                { forceTrack: !0 }
                                            );
                                    }
                                ));
                    },
                    trackGooglePhoneConversion: function (t) {
                        configurator.isProductEnabled("google_phone") &&
                            (e ||
                                events.once(
                                    CONSTANTS.VISIT_EVENT,
                                    function (e) {
                                        insights.start(
                                            "GoogleGtag::GooglePhoneConversion"
                                        );
                                        var i = campaign.current().tc;
                                        events.subscribe(
                                            CONSTANTS.GOOGLE_PHONE_CONVERSION,
                                            function (o) {
                                                util.forEach(o, function (o) {
                                                    var r = setTimeout(
                                                        function () {
                                                            insights.track(
                                                                "GoogleGtag::GooglePhoneConversionTimeout",
                                                                {
                                                                    event: "phone_conversion_timeout",
                                                                    adWordsId:
                                                                        t,
                                                                    label: o.label,
                                                                    replacement:
                                                                        o,
                                                                    visitor_id:
                                                                        e.visitor_id ||
                                                                        "",
                                                                    visit_id:
                                                                        e.visit_id ||
                                                                        "",
                                                                    tc: i || "",
                                                                },
                                                                {
                                                                    forceTrack:
                                                                        !0,
                                                                }
                                                            );
                                                        },
                                                        1e4
                                                    );
                                                    gtag(
                                                        "config",
                                                        `${t}/${o.label}`,
                                                        {
                                                            phone_conversion_number:
                                                                o.replace,
                                                            phone_conversion_callback:
                                                                function (n) {
                                                                    clearTimeout(
                                                                        r
                                                                    ),
                                                                        util.isString(
                                                                            n
                                                                        ) ||
                                                                            (n =
                                                                                n.toString());
                                                                    var a =
                                                                        n.replace(
                                                                            /[^0-9]/g,
                                                                            ""
                                                                        );
                                                                    replacement.addGoogleReplacement(
                                                                        o.replace,
                                                                        a
                                                                    ),
                                                                        insights.track(
                                                                            "GoogleGtag::GooglePhoneConversion",
                                                                            {
                                                                                event: "phone_conversion",
                                                                                adWordsId:
                                                                                    t,
                                                                                label: o.label,
                                                                                replacement:
                                                                                    o,
                                                                                formattedNumber:
                                                                                    n,
                                                                                googlePhoneNumber:
                                                                                    a,
                                                                                visitor_id:
                                                                                    e.visitor_id ||
                                                                                    "",
                                                                                visit_id:
                                                                                    e.visit_id ||
                                                                                    "",
                                                                                tc:
                                                                                    i ||
                                                                                    "",
                                                                            },
                                                                            {
                                                                                forceTrack:
                                                                                    !0,
                                                                            }
                                                                        );
                                                                },
                                                        }
                                                    );
                                                });
                                            }
                                        );
                                    }
                                ));
                    },
                    trackShopifyPurchase: function () {
                        if (
                            configurator.isProductEnabled("google_shopify") &&
                            !e &&
                            util.isPlainObject(window.Shopify)
                        ) {
                            var t = window.Shopify.checkout;
                            if (util.isPlainObject(t)) {
                                var i = t.line_items;
                                if (util.isArray(i)) {
                                    var o = [];
                                    util.forEach(i, (e) => {
                                        o.push({
                                            item_id: e.product_id.toString(),
                                            item_name: e.title,
                                            price: Number(e.price),
                                            quantity: e.quantity,
                                        });
                                    });
                                    var r = {
                                        currency: t.currency,
                                        transaction_id: t.order_id.toString(),
                                        value: Number(t.total_price),
                                        tax: Number(t.total_tax),
                                        items: o,
                                    };
                                    util.isPlainObject(t.shipping_rate) &&
                                        (r.shipping = Number(
                                            t.shipping_rate.price
                                        )),
                                        gtag("event", "purchase", r);
                                }
                            }
                        }
                    },
                };
                return t;
            })(),
            iframeProxy =
                ((KEY_URL = "rl-target"),
                (KEY_SITE_ID = "rl-cc"),
                (KEY_SECONDARY = "rl-secondary"),
                (_iframeProxy = {
                    init: function () {
                        if (configurator.isProductEnabled("iframe_proxy")) {
                            var e = configurator.getIframeProxies();
                            util.forEach(e, function (e) {
                                e.iframe_url = localEnv.resolveURL(
                                    e.iframe_url
                                );
                            });
                            var t = util.makeArray(
                                document.body.querySelectorAll("iframe")
                            );
                            _iframeProxy.proxyIframes(e, t),
                                _iframeProxy.insertCaptureIntoEmptySrcIframes(
                                    t
                                ),
                                _iframeProxy.addMutationListener(e);
                        }
                    },
                    addMutationListener: function (e) {
                        if (window.MutationObserver) {
                            _observer && _iframeProxy.removeMutationListener();
                            var t = util.debounce(
                                function () {
                                    var t = util.makeArray(
                                        document.body.querySelectorAll("iframe")
                                    );
                                    _iframeProxy.proxyIframes(e, t, !1),
                                        _iframeProxy.insertCaptureIntoEmptySrcIframes(
                                            t
                                        );
                                },
                                200,
                                !1
                            );
                            (_observer = new MutationObserver(function (e) {
                                var i = !1;
                                util.forEach(util.makeArray(e), function (e) {
                                    i ||
                                        (e &&
                                            "HEAD" !== e.target.tagName &&
                                            util.forEach(
                                                util.makeArray(e.addedNodes),
                                                function (e) {
                                                    i ||
                                                        (i =
                                                            1 === e.nodeType &&
                                                            "SCRIPT" !==
                                                                e.nodeName);
                                                }
                                            ));
                                }),
                                    i && t();
                            })).observe(document.documentElement, {
                                childList: !0,
                                subtree: !0,
                            });
                        }
                    },
                    getProxiedURL: function (e, t) {
                        var i = environment.captureOnDemandRoot;
                        return (
                            (i += "?" + KEY_URL + "=" + encodeURIComponent(e)),
                            (i += "&" + KEY_SITE_ID + "=" + t),
                            (i += "&" + KEY_SECONDARY)
                        );
                    },
                    proxyIframes: function (e, t) {
                        util.forEach(t, function (t) {
                            t.src &&
                                0 !==
                                    t.src.indexOf(environment.captureUriRoot) &&
                                0 !==
                                    t.src.indexOf(
                                        environment.captureOnDemandRoot
                                    ) &&
                                util.forEach(e, function (e) {
                                    if (0 === t.src.indexOf(e.iframe_url)) {
                                        var i = _iframeProxy.getProxiedURL(
                                            t.src,
                                            configurator.getSiteId()
                                        );
                                        insights.track("IframeProxy::Proxied", {
                                            src: t.src,
                                            proxied_url: i,
                                        }),
                                            (t.src = i);
                                    }
                                });
                        });
                    },
                    insertCaptureIntoEmptySrcIframes: function (e) {
                        util.forEach(e, function (e) {
                            try {
                                if (e.getAttribute("src")) return;
                                if (
                                    e.contentWindow.RLCAP &&
                                    e.contentWindow.RLCAP.version
                                )
                                    return;
                                if (
                                    e.contentDocument &&
                                    e.contentDocument.head
                                ) {
                                    var t = document.createElement("script");
                                    (t.innerHTML =
                                        "window.rl_secondary = true;window.rl_blank_source_frame = true;"),
                                        (t.type = "text/javascript"),
                                        e.contentDocument.head.appendChild(t);
                                    var i = document.createElement("script");
                                    (i.src =
                                        environment.staticUriRoot +
                                        "/mms/capture.js"),
                                        (i.type = "text/javascript"),
                                        e.contentDocument.head.appendChild(i);
                                }
                            } catch (e) {
                                if (e instanceof DOMException) return;
                                throw e;
                            }
                        });
                    },
                    removeMutationListener: function () {
                        _observer &&
                            (_observer.disconnect(), (_observer = null));
                    },
                }),
                _iframeProxy),
            _observer,
            KEY_URL,
            KEY_SITE_ID,
            KEY_SECONDARY,
            _iframeProxy,
            linkClick = {
                init: function () {
                    linkClick.addLinkClickPixel();
                },
                addLinkClickPixel: function () {
                    events.once(CONSTANTS.VISIT_EVENT, function (e) {
                        var t = configurator.current(),
                            i = document.querySelectorAll(
                                "[capture-outbound-conversion]"
                            );
                        util.forEach(util.makeArray(i), function (i) {
                            var o = {
                                    visitor_id: e.visitor_id,
                                    visit_id: e.visit_id,
                                    page_url: window.location.href,
                                    outbound_url: i.href,
                                    global_master_advertiser_id:
                                        t.globalMasterAdvertiserId,
                                },
                                r = urlUtil.param(o);
                            i.setAttribute("target", "_blank"),
                                i.addEventListener("click", function () {
                                    var e = new Image(1, 1);
                                    (e.src =
                                        environment.captureUriRoot +
                                        "/api/v1/link_clicks.gif?" +
                                        r),
                                        document.head.appendChild(e);
                                });
                        });
                    });
                },
            },
            marketingPolicy =
                ((_marketingPolicy = {
                    init: function () {
                        localEnv.isSecondaryMode() ||
                            events.once(CONSTANTS.VISIT_EVENT, function (e) {
                                _marketingPolicy.showMarketingPolicy(e);
                            });
                    },
                    showMarketingPolicy: function (e) {
                        e.is_new &&
                            campaign.current().marketing_policy &&
                            util.onBodyDefined(function () {
                                !(function renderPolicyLink() {
                                    var e = translate.getTranslatedStrings();
                                    ((policyLinkEl =
                                        document.createElement(
                                            "footer"
                                        )).innerHTML =
                                        '<div id="rl-marketing-policy-container"><div id="rl-marketing-policy"><div id="rl-marketing-policy-text-container"><a href="' +
                                        e.rl_marketing_policy.labels.link +
                                        '" id="rl-marketing-policy-link">' +
                                        e.rl_marketing_policy.labels.link_text +
                                        "</div></div></div></div>"),
                                        document.body.appendChild(policyLinkEl),
                                        insights.track("MarketingPolicy::Show");
                                })();
                            });
                    },
                }),
                _marketingPolicy),
            policyLinkEl,
            _marketingPolicy,
            mediaMath =
                ((_mediaMath = {
                    init: function () {
                        pixels.init({
                            product_name: "mediamath",
                            status_label: "MEDIA_MATH",
                            insights: "Pixel::MediaMath",
                            validator: (e) => e && util.isString(e),
                            loadPixel: _mediaMath.loadMediaMathTracking,
                        });
                    },
                    loadMediaMathTracking: function (e, t) {
                        var i = document.createElement("script");
                        (i.type = "text/javascript"),
                            (i.async = !0),
                            (i.src = "https://pixel.mathtag.com/event/js?" + e);
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(i, o), t();
                    },
                }),
                _mediaMath),
            _mediaMath,
            onClickCVT = (function () {
                var e,
                    t = "rl_on_click_deferred_cvts",
                    i = {};
                var o = {
                    init: function () {
                        events.once(CONSTANTS.VISIT_EVENT, function () {
                            if (campaign.isPaidCampaign()) {
                                o.sendDeferredCVTs();
                                var e =
                                        configurator.getPlatform() +
                                        "_" +
                                        campaign.current().cid,
                                    t = campaign.getMasterCampaignID(e),
                                    i = configurator.getOnClickCVTs(t);
                                o.addClickListeners(i),
                                    o.addMutationListener(i);
                            }
                        });
                    },
                    cvtClickListener: function () {
                        var e = this.rlEntry;
                        i[e.selector] ||
                            ((i[e.selector] = !0),
                            setTimeout(function () {
                                i[e.selector] = !1;
                            }, 1e3),
                            !(function shouldDeferCVT(e) {
                                if ("A" === e.tagName) {
                                    if (
                                        "false" ===
                                        e.getAttribute(
                                            "data-capture-cvt-deferred"
                                        )
                                    )
                                        return !1;
                                    if (e.href.indexOf("#") > -1) {
                                        var t = document.createElement("a");
                                        (t.href = e.href), (t.hash = "");
                                        var i = document.createElement("a");
                                        if (
                                            ((i.href = window.location.href),
                                            (i.hash = ""),
                                            t.href === i.href)
                                        )
                                            return !1;
                                    }
                                    if (0 === e.href.indexOf("tel:")) return !1;
                                    if (0 === e.href.indexOf("sms:")) return !1;
                                    if (0 === e.href.indexOf("javascript:"))
                                        return !1;
                                    if (
                                        window.angular &&
                                        window.angular.version
                                    )
                                        return !1;
                                    if ("_blank" !== e.target) return !0;
                                }
                                return !1;
                            })(this)
                                ? conversionTracking.trackCVTUrl(e.cvt_url)
                                : o.deferCVT(e));
                    },
                    addClickListener: function (e, t) {
                        e.addEventListener("click", o.cvtClickListener, !0),
                            (e.rlEntry = t);
                    },
                    addClickListeners: function (e) {
                        util.forEach(e, function (e) {
                            if (e.selector) {
                                var t = (function findElements(e) {
                                    try {
                                        return document.querySelectorAll(e);
                                    } catch (t) {
                                        if ("SyntaxError" !== t.name) throw t;
                                        console &&
                                            console.error &&
                                            console.error(
                                                "Invalid selector used for an On Click CVT: " +
                                                    e
                                            );
                                    }
                                })(e.selector);
                                t &&
                                    util.forEach(
                                        util.makeArray(t),
                                        function (t) {
                                            t.removeEventListener(
                                                "click",
                                                o.cvtClickListener,
                                                !0
                                            ),
                                                "A" === t.tagName &&
                                                    (function shouldOpenInNewTab(
                                                        e
                                                    ) {
                                                        var t =
                                                            urlUtil.parse(e);
                                                        if (
                                                            ".pdf" ===
                                                            t.file
                                                                .toLowerCase()
                                                                .substr(-4)
                                                        )
                                                            return !0;
                                                        var i =
                                                            localEnv.getPageUri();
                                                        return (
                                                            t.protocol !==
                                                                i.protocol ||
                                                            t.host !== i.host ||
                                                            t.port !== i.port
                                                        );
                                                    })(t.href) &&
                                                    (t.target = "_blank"),
                                                o.addClickListener(t, e),
                                                t.classList.add(
                                                    "rl-on-click-cvt-listener-added"
                                                );
                                        }
                                    );
                            }
                        });
                    },
                    addMutationListener: function (t) {
                        if (window.MutationObserver) {
                            e && o.removeMutationListener();
                            var i = util.debounce(
                                function () {
                                    o.addClickListeners(t);
                                },
                                200,
                                !1
                            );
                            (e = new MutationObserver(function (e) {
                                var t = !1;
                                util.forEach(util.makeArray(e), function (e) {
                                    t ||
                                        (e &&
                                            "HEAD" !== e.target.tagName &&
                                            util.forEach(
                                                util.makeArray(e.addedNodes),
                                                function (e) {
                                                    t ||
                                                        (t =
                                                            o.isListenableNode(
                                                                e
                                                            ));
                                                }
                                            ));
                                }),
                                    t && i();
                            })).observe(document.documentElement, {
                                childList: !0,
                                subtree: !0,
                            });
                        }
                    },
                    deferCVT: function (e) {
                        var i = util.parse(sessionStorage.getItem(t));
                        (i && util.isArray(i)) || (i = []),
                            i.push(e),
                            sessionStorage.setItem(t, util.stringify(i));
                    },
                    isListenableNode: function (e) {
                        return (
                            1 === e.nodeType &&
                            "SCRIPT" !== e.nodeName &&
                            "IFRAME" !== e.nodeName
                        );
                    },
                    removeMutationListener: function () {
                        e && (e.disconnect(), (e = null));
                    },
                    sendDeferredCVTs: function () {
                        var e = util.parse(sessionStorage.getItem(t));
                        sessionStorage.removeItem(t),
                            e &&
                                util.isArray(e) &&
                                util.forEach(e, function (e) {
                                    e.cvt_url &&
                                        conversionTracking.trackCVTUrl(
                                            e.cvt_url
                                        );
                                });
                    },
                };
                return o;
            })(),
            pixels = {
                init: function (e) {
                    if (
                        configurator.isProductEnabled(e.product_name) &&
                        !localEnv.isSecondaryMode()
                    ) {
                        var t = configurator.getProduct(e.product_name).config;
                        if (util.isPlainObject(e)) {
                            var i = t.override_pixel_id || t.pixel_id;
                            e.validator(i) &&
                                e.loadPixel(i, function trackStatus() {
                                    insights.track(e.insights);
                                });
                        }
                    }
                },
            },
            privacyBanner = (function () {
                var e,
                    t,
                    i,
                    o = !1;
                function decline() {
                    sessionStorage.setItem("capturePrivacyNotice", "declined"),
                        i();
                }
                function removeBannerOnAccept() {
                    t &&
                        (document
                            .getElementById("rl-privacy-accept")
                            .removeEventListener("click", removeBannerOnAccept),
                        document.body.removeChild(t),
                        (function accept() {
                            o ||
                                (localStorage.setItem(
                                    "capturePrivacyNotice",
                                    "accepted"
                                ),
                                insights.track("PrivacyBanner::Accept"),
                                e(),
                                (o = !0));
                        })());
                }
                function removeBannerOnDecline() {
                    t &&
                        (document
                            .getElementById("rl-privacy-decline")
                            .removeEventListener(
                                "click",
                                removeBannerOnDecline
                            ),
                        document.body.removeChild(t),
                        decline());
                }
                var r = {
                    getStatus: function () {
                        return (
                            localStorage.getItem("capturePrivacyNotice") ||
                            sessionStorage.getItem("capturePrivacyNotice")
                        );
                    },
                    isEnabled: function () {
                        var e = configurator.getPlatform();
                        if ("EUR" === e || "GBR" === e) return !0;
                        var t = configurator.getProduct("privacy_banner");
                        return !!t && t.enabled;
                    },
                    isAutodecline: function () {
                        return configurator.getBannerAutodecline();
                    },
                    isEURandOrganic: function () {
                        return (
                            "EUR" === configurator.getPlatform() &&
                            !campaign.isPaidCampaign()
                        );
                    },
                    defaultPosition: function () {
                        return "top" === configurator.getBannerPosition();
                    },
                    showBanner: function (o) {
                        (e = function () {
                            r.privacyBannerConsent(),
                                localEnv.isSecondaryMode() ||
                                    events.trigger(CONSTANTS.SHOW_BANNER_EVENT),
                                (o || function () {})();
                        }),
                            (i = function () {
                                localEnv.isSecondaryMode() ||
                                    events.trigger(CONSTANTS.SHOW_BANNER_EVENT),
                                    (o || function () {})();
                            }),
                            insights.start("DocumentReadyCheck"),
                            util.onBodyDefined(function () {
                                insights.track("DocumentReadyCheck"),
                                    localEnv.isSecondaryMode()
                                        ? events.once(
                                              CONSTANTS.SHOW_BANNER_EVENT,
                                              o
                                          )
                                        : r.isEnabled()
                                        ? r.getStatus()
                                            ? (r.getStatus(),
                                              events.trigger(
                                                  CONSTANTS.SHOW_BANNER_EVENT
                                              ),
                                              (o || function () {})())
                                            : r.isAutodecline()
                                            ? decline()
                                            : r.isEURandOrganic() ||
                                              (r.defaultPosition()
                                                  ? (function renderTopBanner() {
                                                        var e =
                                                            translate.getTranslatedStrings();
                                                        ((t =
                                                            document.createElement(
                                                                "div"
                                                            )).innerHTML =
                                                            '<div id="rl-privacy-notice-container"><div id="rl-privacy-notice-top" class="rl-privacy-notice"><div id="rl-privacy-text-container"><div id="rl-privacy-text">' +
                                                            e.rl_privacy.labels
                                                                .privacy_text +
                                                            '</div></div><button id="rl-privacy-accept" type="button"><span class="rl-accept-text">' +
                                                            e.rl_privacy.labels
                                                                .accept +
                                                            '</button><button id="rl-privacy-decline" type="button"><span class="rl-decline-text">' +
                                                            e.rl_privacy.labels
                                                                .decline +
                                                            "</button></div></div>"),
                                                            document.body.insertBefore(
                                                                t,
                                                                document.body
                                                                    .firstChild
                                                            ),
                                                            document
                                                                .getElementById(
                                                                    "rl-privacy-accept"
                                                                )
                                                                .addEventListener(
                                                                    "click",
                                                                    removeBannerOnAccept
                                                                ),
                                                            document
                                                                .getElementById(
                                                                    "rl-privacy-decline"
                                                                )
                                                                .addEventListener(
                                                                    "click",
                                                                    removeBannerOnDecline
                                                                ),
                                                            insights.track(
                                                                "PrivacyBanner::Show"
                                                            );
                                                    })()
                                                  : (function renderBottomBanner() {
                                                        var e =
                                                            translate.getTranslatedStrings();
                                                        ((t =
                                                            document.createElement(
                                                                "div"
                                                            )).innerHTML =
                                                            '<div class="rl-privacy-wrapper"><div id="rl-privacy-notice-container"><div class="rl-privacy-notice"><div id="rl-privacy-text-container"><div id="rl-privacy-text">' +
                                                            e.rl_privacy.labels
                                                                .privacy_text +
                                                            '</div></div><button id="rl-privacy-accept" type="button"><span class="rl-accept-text">' +
                                                            e.rl_privacy.labels
                                                                .accept +
                                                            '</button><button id="rl-privacy-decline" type="button"><span class="rl-decline-text">' +
                                                            e.rl_privacy.labels
                                                                .decline +
                                                            "</button></div></div></div>"),
                                                            document.body.insertBefore(
                                                                t,
                                                                document.body
                                                                    .firstChild
                                                            ),
                                                            document
                                                                .getElementById(
                                                                    "rl-privacy-accept"
                                                                )
                                                                .addEventListener(
                                                                    "click",
                                                                    removeBannerOnAccept
                                                                ),
                                                            document
                                                                .getElementById(
                                                                    "rl-privacy-decline"
                                                                )
                                                                .addEventListener(
                                                                    "click",
                                                                    removeBannerOnDecline
                                                                ),
                                                            insights.track(
                                                                "PrivacyBanner::Show"
                                                            );
                                                    })())
                                        : (events.trigger(
                                              CONSTANTS.SHOW_BANNER_EVENT
                                          ),
                                          (o || function () {})());
                            });
                    },
                    privacyBannerConsent: function () {
                        events.once(CONSTANTS.VISIT_EVENT, function (e) {
                            var t = configurator.getLocale(),
                                i = campaign.getCampaignPayload(!1),
                                o = util.extend(
                                    {
                                        locale: t,
                                        mms_version: i.capture_version,
                                    },
                                    i,
                                    e
                                );
                            localEnv.isEvaluationMode() ||
                                util.ajax({
                                    method: "POST",
                                    payload: o,
                                    url:
                                        environment.captureUriRoot +
                                        "/api/v1/privacy_banners",
                                });
                        });
                    },
                };
                return r;
            })(),
            remarketing = (function () {
                var _remarketing = {
                    init: function () {
                        events.once(CONSTANTS.VISIT_EVENT, function (e) {
                            configurator.isProductEnabled("remarketing") &&
                                !localEnv.isSecondaryMode() &&
                                _remarketing.dropPixels(e);
                        });
                    },
                    appendPixel: function (pixel) {
                        var config = configurator.current();
                        if (pixel.tags) {
                            insights.track("Remarketing::PixelTags", {
                                gmaid: config.globalMasterAdvertiserId,
                                tags: pixel.tags,
                            });
                            var tags =
                                    "<div class='rl-remarketing'>" +
                                    pixel.tags +
                                    "</div>",
                                parsedTagDocument =
                                    new DOMParser().parseFromString(
                                        tags,
                                        "text/html"
                                    ),
                                tagDiv =
                                    parsedTagDocument.querySelector(
                                        ".rl-remarketing"
                                    );
                            document.body.appendChild(tagDiv),
                                util.forEach(
                                    util.makeArray(
                                        tagDiv.getElementsByTagName("script")
                                    ),
                                    function (e) {
                                        var t =
                                            util.createExecutableScriptElement(
                                                e
                                            );
                                        e.parentNode.replaceChild(t, e);
                                    }
                                );
                        }
                        if (pixel.scripts)
                            try {
                                insights.track(
                                    "Remarketing::EvalScript::PreEval",
                                    { gmaid: config.globalMasterAdvertiserId }
                                ),
                                    eval(pixel.scripts),
                                    insights.track(
                                        "Remarketing::EvalScript::PostEval",
                                        {
                                            gmaid: config.globalMasterAdvertiserId,
                                            scriptText: pixel.scripts,
                                        }
                                    );
                            } catch (e) {
                                insights.track("Remarketing::EvalError", {
                                    gmaid: config.globalMasterAdvertiserId,
                                    message: e.message,
                                    scriptText: pixel.scripts,
                                });
                            }
                    },
                    buildPixelHash: function () {
                        var e = configurator.current().campaign_data,
                            t = configurator.getProduct("remarketing").config,
                            i = {};
                        return (
                            util.forEach(e, function (e, o) {
                                i[e] = t[o.master_campaign_id];
                            }),
                            i
                        );
                    },
                    dropOrganicPixels: function (e, t) {
                        var i = e[t] || e.OTHER;
                        i &&
                            util.forEach(i, function (e, t) {
                                _remarketing.appendPixel(t);
                            });
                    },
                    dropPaidPixels: function (e) {
                        var t = campaign.current(),
                            i = e[configurator.getPlatform() + "_" + t.cid];
                        i &&
                            (i[t.scid]
                                ? _remarketing.appendPixel(i[t.scid])
                                : _remarketing.appendPixel(i.default));
                    },
                    dropPixels: function (e) {
                        if (e.is_new) {
                            var t = _remarketing.buildPixelHash();
                            campaign.isPaidCampaign()
                                ? _remarketing.dropPaidPixels(t)
                                : _remarketing.dropOrganicPixels(
                                      t,
                                      e.referrer_type
                                  );
                        }
                    },
                };
                return _remarketing;
            })(),
            replacement = (function () {
                var e,
                    t,
                    i,
                    o,
                    r = "$EL$",
                    n = !1,
                    a = util.debounce(
                        function () {
                            c.replace("POST_INIT");
                        },
                        200,
                        !1
                    );
                function extractNumbers(e) {
                    return e.replace(/[^\d]*/gi, "");
                }
                var c = {
                    addGoogleReplacement: function (e, i) {
                        var o = { original: e, replace: i },
                            r = c.compileReplacementPhones([o]);
                        r[0] && (t.phone.push(r[0]), a());
                    },
                    addMutationListener: function () {
                        window.MutationObserver &&
                            (i && c.removeMutationListener(),
                            (i = new MutationObserver(function (e) {
                                var t = !1;
                                util.forEach(util.makeArray(e), function (e) {
                                    t ||
                                        (e &&
                                            "HEAD" !== e.target.tagName &&
                                            ("characterData" === e.type &&
                                            (e.target || {}).textContent
                                                ? (t = !0)
                                                : "childList" === e.type &&
                                                  e.addedNodes.length
                                                ? util.forEach(
                                                      util.makeArray(
                                                          e.addedNodes
                                                      ),
                                                      function (e) {
                                                          t ||
                                                              (t =
                                                                  c.isReplaceableNode(
                                                                      e
                                                                  ));
                                                      }
                                                  )
                                                : "attributes" === e.type &&
                                                  "IMG" ===
                                                      (e.target || {})
                                                          .nodeName &&
                                                  (t = !0)));
                                }),
                                    t && a();
                            })).observe(document.documentElement, {
                                childList: !0,
                                characterData: !0,
                                subtree: !0,
                                attributeFilter: ["src"],
                            }));
                    },
                    compileReplacementConfig: function (e) {
                        insights.start("RL_REPLACEMENT_COMPILE");
                        var t = util.extend(
                                {
                                    email: [],
                                    image: [],
                                    link: [],
                                    phone: [],
                                    scripts: [],
                                    strings: [],
                                },
                                e
                            ),
                            i = c.compileReplacementStrings(t.strings),
                            o = {
                                image: i.image,
                                link: i.link,
                                strings: i.strings,
                                scripts: c.compileReplacementScripts(t.script),
                                email: c.compileReplacementEmail(t.email),
                                phone: c.compileReplacementPhones(t.phone),
                            };
                        return (
                            insights.track("RL_REPLACEMENT_COMPILE", {
                                compile:
                                    o.image.length +
                                    o.link.length +
                                    o.strings.length +
                                    o.email.length +
                                    o.phone.length,
                                config:
                                    t.image.length +
                                    t.link.length +
                                    t.strings.length +
                                    t.email.length +
                                    t.phone.length,
                            }),
                            o
                        );
                    },
                    compileReplacementEmail: function (e) {
                        var t = [];
                        return (
                            util.forEach(e, function (e) {
                                e.replace.search(/formmail/i) > -1 ||
                                    (e.original && e.replace
                                        ? t.push({
                                              original:
                                                  e.original.toLowerCase(),
                                              replace: e.replace.toLowerCase(),
                                          })
                                        : insights.track(
                                              "RL_REPLACEMENT_COMPILE_FAIL",
                                              e
                                          ));
                            }),
                            t
                        );
                    },
                    compileReplacementPhone: function (e, t) {
                        var i = !1;
                        (e.indexOf("#") > -1 || t.indexOf("#") > -1) &&
                            (i = !0);
                        var o = (function getMaxDelimiterNumber(e, t) {
                            return (
                                (e = extractNumbers(e)),
                                (t = extractNumbers(t)),
                                e.length > t.length
                                    ? e.length - 1
                                    : t.length - 1
                            );
                        })(e, t);
                        return {
                            search: c.compileReplacementPhoneSearch(e, o),
                            tokens: c.compileReplacementPhoneTokens(t, o, i),
                        };
                    },
                    compileReplacementPhones: function (e) {
                        var t = [];
                        return (
                            util.forEach(e, function (e) {
                                var i = c.compileReplacementPhone(
                                    e.original,
                                    e.replace
                                );
                                i.search && i.tokens
                                    ? ((e.search = i.search),
                                      (e.tokens = i.tokens),
                                      t.push(e))
                                    : insights.track(
                                          "RL_REPLACEMENT_COMPILE_FAIL",
                                          e
                                      );
                            }),
                            t
                        );
                    },
                    compileReplacementPhoneSearch: function (e, t) {
                        if (!(e = extractNumbers(e))) return !1;
                        for (
                            var i = [e.charAt(0)], o = 0, r = 1;
                            r < e.length;
                            r++
                        )
                            i.push("([\\(\\)\\+\\-\\‐\\.\\/\\*\\~\\s­–—−‑·]*)"),
                                i.push(e.charAt(r)),
                                o++;
                        for (; o < t; ) i.push("()"), o++;
                        return new RegExp(i.join(""), "g");
                    },
                    compileReplacementPhoneTokens: function (e, t, i) {
                        if (i) return e.replace("#", "");
                        if (!(e = extractNumbers(e))) return !1;
                        function getStringParameter(e) {
                            return "$" + ("00" + e).slice(-2);
                        }
                        for (
                            var o = e.charAt(0), r = 0, n = 1;
                            n < e.length;
                            n++
                        )
                            o += getStringParameter(++r) + e.charAt(n);
                        for (; r < t; ) o += getStringParameter(++r);
                        return o;
                    },
                    compileReplacementScripts: function (e) {
                        var t = [];
                        return (
                            util.forEach(e, function (e) {
                                e.replace
                                    ? t.push({
                                          replace:
                                              e.replace.match(/src="(.*)"/)[1],
                                      })
                                    : insights.track(
                                          "RL_REPLACEMENT_COMPILE_FAIL",
                                          e
                                      );
                            }),
                            t
                        );
                    },
                    compileReplacementString: function (e) {
                        if (
                            e.search(
                                /(on[a-z]+\s*=\s*['"][^'"]+['"]|<script>|href\s*=\s*['"]\s*javascript:)/gi
                            ) > -1
                        )
                            return (
                                insights.track("ReplacementXSS", { string: e }),
                                {
                                    isImage: !1,
                                    isLink: !1,
                                    isString: !1,
                                    value: undefined,
                                }
                            );
                        var t = /<a[^>]*>[^<]*<\/a>/i,
                            i = /href\s*=\s*['"]([^'"]*)['"]/i;
                        if (e.search(t) > -1) {
                            var o = e.replace(t, r);
                            return util.trim(o) !== r
                                ? {
                                      isImage: !1,
                                      isLink: !1,
                                      isString: !0,
                                      value: o,
                                      el: (e.match(t) || [])[0],
                                      hasConversionPixel: !1,
                                  }
                                : {
                                      isImage: !1,
                                      isLink: !0,
                                      isString: !1,
                                      value: (e.match(i) || [])[1],
                                  };
                        }
                        if (e.search(i) > -1)
                            return {
                                isImage: !1,
                                isLink: !0,
                                isString: !1,
                                value: (e.match(i) || [])[1],
                            };
                        var n = /<img[^>]*>/i,
                            a = /src\s*=\s*['"]([^'"]*)['"]/i;
                        if (e.search(n) > -1) {
                            var s = e.replace(n, r);
                            if (util.trim(s) !== r) {
                                var l = (e.match(n) || [])[0],
                                    u = !1,
                                    d = c.extractConversionUrl(l);
                                return (
                                    d &&
                                        ((l = d),
                                        (u = !0),
                                        (s = util.trim(s.replace(r, "")))),
                                    {
                                        isImage: !1,
                                        isLink: !1,
                                        isString: !0,
                                        value: s,
                                        el: l,
                                        hasConversionPixel: u,
                                    }
                                );
                            }
                            return {
                                isImage: !0,
                                isLink: !1,
                                isString: !1,
                                value: (e.match(a) || [])[1],
                            };
                        }
                        if (e.search(a) > -1)
                            return {
                                isImage: !0,
                                isLink: !1,
                                isString: !1,
                                value: (e.match(a) || [])[1],
                            };
                        var m =
                            /^\s*(?:background(?:-image)?:)?\s*url\s*\(\s*["']?([^"']*)["']?\s*\);?\s*$/gi;
                        if (e.search(m) > -1)
                            return {
                                isImage: !0,
                                isLink: !1,
                                isString: !1,
                                value: e.replace(m, "$01"),
                            };
                        var g = /^\s*(.+\.(jpg|jpeg|gif|tif|png|bmp))\s*$/;
                        return e.search(g) > -1
                            ? {
                                  isImage: !0,
                                  isLink: !0,
                                  isString: !0,
                                  value: e.replace(g, "$01"),
                              }
                            : {
                                  isImage: !1,
                                  isLink: !1,
                                  isString: !0,
                                  value: e,
                              };
                    },
                    compileReplacementStrings: function (e) {
                        var t = [],
                            i = [],
                            o = [];
                        return (
                            util.forEach(e, function (e) {
                                if (!(e.replace.search(/RL_NODYN/i) > -1)) {
                                    var r = c.compileReplacementString(
                                            e.original
                                        ),
                                        n = c.compileReplacementString(
                                            e.replace
                                        ),
                                        a = !1;
                                    if (
                                        (r.isImage &&
                                            n.isImage &&
                                            ((a = !0),
                                            t.push({
                                                original: r.value,
                                                replace: n.value,
                                            })),
                                        r.isLink &&
                                            n.isLink &&
                                            ((a = !0),
                                            i.push({
                                                original: r.value,
                                                replace: n.value,
                                            })),
                                        r.isString && n.isString)
                                    )
                                        try {
                                            (a = !0),
                                                o.push({
                                                    original: r.value,
                                                    replace: n.value,
                                                    search: new RegExp(
                                                        r.value,
                                                        "g"
                                                    ),
                                                    el: n.el,
                                                    hasConversionPixel:
                                                        n.hasConversionPixel,
                                                });
                                        } catch (t) {
                                            window.RLCAP.onFault(
                                                t.message + ": " + e,
                                                "replacement.compileReplacementStrings"
                                            );
                                            var s =
                                                "[CaptureJS] The original string " +
                                                r.value +
                                                " contains an invalid character.\nIf you are not using a regular expression, then escape the following characters with a backslash: [ \\ ^ $ . | ? * + ( )\n\nWrong: Got questions? Please call me at 1 (23) 456 7890.\nRight: Got questions\\? Please call me at \\+1 \\(23\\) 456 7890\\.";
                                            console.warn(s);
                                        }
                                    a ||
                                        insights.track(
                                            "RL_REPLACEMENT_COMPILE_FAIL",
                                            e
                                        );
                                }
                            }),
                            { image: t, link: i, strings: o }
                        );
                    },
                    createCssRuleObject: function (e) {
                        return {
                            selectorText: e.selectorText,
                            parentRule: e.parentRule,
                            style: {
                                content: {
                                    value: e.style.content,
                                    replaced: !1,
                                },
                                bgImage: {
                                    value: e.style.backgroundImage,
                                    replaced: !1,
                                },
                            },
                        };
                    },
                    cssReplaceEmailLink: function (e, t) {
                        if (localEnv.isPhoneDisabledOnCurrentPlatform())
                            return 0;
                        if (!t.length) return 0;
                        var i = 0;
                        return (
                            util.forEach(t, function (t) {
                                var o = new RegExp(t.original, "gi");
                                if (e.style.content.value.search(o) > -1) {
                                    var r = e.style.content.value;
                                    (e.style.content.value =
                                        e.style.content.value.replace(
                                            o,
                                            t.replace
                                        )),
                                        e.style.content.value !== r &&
                                            ((e.style.content.replaced = !0),
                                            i++);
                                }
                            }),
                            i
                        );
                    },
                    cssReplaceImage: function (e, t) {
                        if (localEnv.isPhoneDisabledOnCurrentPlatform())
                            return 0;
                        if (!t.length) return 0;
                        var i = 0;
                        return (
                            util.forEach(t, function (t) {
                                var o = new RegExp(t.original, "g");
                                if (e.style.content.value.search(o) > -1) {
                                    var r = e.style.content.value;
                                    (e.style.content.value =
                                        e.style.content.value.replace(
                                            o,
                                            t.replace
                                        )),
                                        e.style.content.value !== r &&
                                            ((e.style.content.replaced = !0),
                                            i++);
                                }
                                if (e.style.bgImage.value.search(o) > -1) {
                                    var n = e.style.bgImage.value;
                                    (e.style.bgImage.value =
                                        e.style.bgImage.value.replace(
                                            o,
                                            t.replace
                                        )),
                                        e.style.bgImage.value !== n &&
                                            ((e.style.bgImage.replaced = !0),
                                            i++);
                                }
                            }),
                            i
                        );
                    },
                    cssReplaceLink: function (e, t) {
                        if (localEnv.isPhoneDisabledOnCurrentPlatform())
                            return 0;
                        if (!t.length) return 0;
                        var i = 0;
                        return (
                            util.forEach(t, function (t) {
                                var o = new RegExp(t.original, "g");
                                if (e.style.content.value.search(o) > -1) {
                                    var r = e.style.content.value;
                                    (e.style.content.value =
                                        e.style.content.value.replace(
                                            o,
                                            t.replace
                                        )),
                                        e.style.content.value !== r &&
                                            ((e.style.content.replaced = !0),
                                            i++);
                                }
                            }),
                            i
                        );
                    },
                    cssReplacePhoneNumbers: function (e, t) {
                        if (localEnv.isPhoneDisabledOnCurrentPlatform())
                            return 0;
                        if (!t.length) return 0;
                        var i = 0;
                        return (
                            util.forEach(t, function (t) {
                                if (
                                    e.style.content.value.search(t.search) > -1
                                ) {
                                    var o = e.style.content.value;
                                    (e.style.content.value =
                                        e.style.content.value.replace(
                                            t.search,
                                            t.tokens
                                        )),
                                        e.style.content.value !== o &&
                                            ((e.style.content.replaced = !0),
                                            i++);
                                }
                            }),
                            i
                        );
                    },
                    cssReplaceString: function (e, t) {
                        if (localEnv.isPhoneDisabledOnCurrentPlatform())
                            return 0;
                        if (!t.length) return 0;
                        var i = 0;
                        return (
                            util.forEach(t, function (t) {
                                if (
                                    e.style.content.value.search(t.search) > -1
                                ) {
                                    var o = e.style.content.value;
                                    (e.style.content.value =
                                        e.style.content.value.replace(
                                            t.search,
                                            t.replace
                                        )),
                                        e.style.content.value !== o &&
                                            ((e.style.content.replaced = !0),
                                            i++);
                                }
                            }),
                            i
                        );
                    },
                    cufonRerun: function () {
                        n && Cufon && Cufon.refresh && Cufon.refresh(),
                            (n = !1);
                    },
                    cufonReset: function () {
                        util.forEach(
                            util.makeArray(document.querySelectorAll(".cufon")),
                            function (e) {
                                var t = e.parentNode;
                                if (t) {
                                    var i = "";
                                    if (
                                        (util.forEach(
                                            util.makeArray(
                                                e.querySelectorAll("cufontext")
                                            ),
                                            function (e) {
                                                i += e.textContent;
                                            }
                                        ),
                                        i)
                                    ) {
                                        var o = document.createTextNode(i);
                                        t.insertBefore(o, e),
                                            t.removeChild(e),
                                            (n = !0);
                                    }
                                }
                            }
                        );
                    },
                    dropReplacementScripts: function (e) {
                        localEnv.isSecondaryMode() ||
                            util.forEach(e, function (e) {
                                util.getScript({
                                    src: e.replace,
                                    success: function () {},
                                    error: function () {},
                                });
                            });
                    },
                    extractConversionUrl: function (e) {
                        var t = (e.match(/src\s*=\s*['"]([^'"]*)['"]/i) ||
                            [])[1];
                        if (t) {
                            var i = urlUtil.parse(t);
                            if (i.path.endsWith("/event/")) {
                                var o = i.queryKey;
                                if (o.event)
                                    if (o.options)
                                        return urlUtil.deparam(o.options).fname;
                            }
                        }
                    },
                    getCssRules: function () {
                        var e = [];
                        return (
                            util.forEach(
                                util.makeArray(document.styleSheets),
                                function (t) {
                                    var i;
                                    try {
                                        i = t.cssRules;
                                    } catch (e) {
                                        return;
                                    }
                                    i && (e = e.concat(c.processCssRules(i)));
                                }
                            ),
                            e
                        );
                    },
                    getReplacementType: function (e) {
                        if (e.campaign || e.history_campaign) {
                            if (campaign.isPaidCampaign())
                                return (
                                    configurator.getPlatform() +
                                    "_" +
                                    campaign.current().scid
                                );
                            if (e.campaign.uid) return e.referrer_type;
                            if (!e.bot_type || "DIRECT" !== e.referrer_type)
                                return e.referrer_type;
                        } else {
                            if (localEnv.isEvaluationMode() && !e.referrer_type)
                                return "DIRECT";
                            if (
                                !(
                                    campaign.isPaidCampaign() ||
                                    (e.bot_type && "DIRECT" === e.referrer_type)
                                )
                            )
                                return e.referrer_type;
                        }
                        return null;
                    },
                    init: function () {
                        events.once(CONSTANTS.VISIT_EVENT, function (i) {
                            if (
                                "true" !== sessionStorage.getItem("repl_false")
                            ) {
                                if (
                                    location.search.match(/all_repl=false/) ||
                                    !0 === window.repl_false
                                )
                                    return (
                                        (window.repl_false = !0),
                                        void sessionStorage.setItem(
                                            "repl_false",
                                            "true"
                                        )
                                    );
                                (e = c.getReplacementType(i)),
                                    (t = c.compileReplacementConfig(
                                        configurator.getReplacementConfig(e)
                                    )),
                                    (window.RLCAP.replace = c.replace),
                                    configurator.isProductEnabledForSource(
                                        "string_replacement",
                                        i.referrer_source
                                    ) &&
                                        (c.cufonReset(),
                                        c.replace(),
                                        c.dropReplacementScripts(t.scripts),
                                        c.cufonRerun(),
                                        c.sendGooglePhoneConversions(),
                                        c.addMutationListener());
                            }
                        });
                    },
                    injectCssReplacement: function (e) {
                        var t = /::before|::after/g,
                            i =
                                e.selectorText.replace(t, function (e) {
                                    return ".rl-css-replacement" + e;
                                }) +
                                " { " +
                                (e.style.content.replaced
                                    ? "content: " + e.style.content.value + "; "
                                    : "") +
                                (e.style.bgImage.replaced
                                    ? "background-image: " +
                                      e.style.bgImage.value +
                                      "; "
                                    : "") +
                                "}";
                        (i = c.wrapCssWithParentRule(i, e.parentRule)),
                            o ||
                                ((o = document.createElement("style")),
                                document.head.appendChild(o)),
                            -1 === o.innerHTML.indexOf(i) && (o.innerHTML += i);
                        var r = document.querySelectorAll(
                            e.selectorText.replace(t, "")
                        );
                        util.forEach(util.makeArray(r), function (e) {
                            e.classList.add("rl-css-replacement");
                        });
                    },
                    isReplaceableNode: function (e) {
                        return (
                            (1 === e.nodeType || 3 === e.nodeType) &&
                            "SCRIPT" !== e.nodeName &&
                            "IFRAME" !== e.nodeName
                        );
                    },
                    processCssRules: function (e) {
                        var t = [];
                        return (
                            util.forEach(util.makeArray(e), function (e) {
                                e.cssRules &&
                                util.makeArray(e.cssRules).length > 0
                                    ? (t = t.concat(
                                          c.processCssRules(e.cssRules)
                                      ))
                                    : /[^\s*](::before|::after)/.test(
                                          e.selectorText
                                      ) &&
                                      (e.style.content ||
                                          e.style.backgroundImage) &&
                                      t.push(c.createCssRuleObject(e));
                            }),
                            t
                        );
                    },
                    removeMutationListener: function () {
                        i && (i.disconnect(), (i = null));
                    },
                    replace: function (e) {
                        "POST_INIT" !== (e = e || "ALL") &&
                            insights.start("RL_REPLACEMENT");
                        var i = util.makeArray(
                            document.body.querySelectorAll(
                                "* :not([phone-capture-ignore]"
                            )
                        );
                        i.push(document.documentElement), i.push(document.body);
                        var o = [];
                        util.forEach(i, function (e) {
                            e.hasChildNodes() &&
                                util.forEach(
                                    util.makeArray(e.childNodes),
                                    function (e) {
                                        3 === e.nodeType && o.push(e);
                                    }
                                );
                        });
                        var r = i.concat(o),
                            n = {
                                link: 0,
                                image: 0,
                                string: 0,
                                phone: 0,
                                email: 0,
                            },
                            a = {
                                link: 0,
                                image: 0,
                                string: 0,
                                phone: 0,
                                email: 0,
                            };
                        c.removeMutationListener(),
                            util.forEach(r.reverse(), function (e) {
                                c.isReplaceableNode(e) &&
                                    ((n.link += c.replaceLink(e, t.link)),
                                    (n.image += c.replaceImage(e, t.image)),
                                    (n.string += c.replaceString(e, t.strings)),
                                    (n.phone += c.replacePhoneNumbers(
                                        e,
                                        t.phone
                                    )),
                                    (n.email += c.replaceEmailLink(
                                        e,
                                        t.email
                                    )));
                            }),
                            util.forEach(c.getCssRules(), function (e) {
                                (a.link += c.cssReplaceLink(e, t.link)),
                                    (a.image += c.cssReplaceImage(e, t.image)),
                                    (a.string += c.cssReplaceString(
                                        e,
                                        t.strings
                                    )),
                                    (a.phone += c.cssReplacePhoneNumbers(
                                        e,
                                        t.phone
                                    )),
                                    (a.email += c.cssReplaceEmailLink(
                                        e,
                                        t.email
                                    )),
                                    (e.style.content.replaced ||
                                        e.style.bgImage.replaced) &&
                                        c.injectCssReplacement(e);
                            }),
                            c.addMutationListener();
                        var s =
                                t.link.length +
                                t.image.length +
                                t.strings.length +
                                t.phone.length +
                                t.email.length,
                            l = n.link + n.image + n.string + n.phone + n.email,
                            u = a.link + a.image + a.string + a.phone + a.email,
                            d = l + u;
                        return (
                            "POST_INIT" !== e &&
                                (insights.track("TimeToReplacements"),
                                insights.track("RL_REPLACEMENT", {
                                    type: e,
                                    compiled: s,
                                    replaced: d,
                                    replacementCount: n,
                                    cssReplacementCount: a,
                                })),
                            util.isFunction(window.RLEvaluator) &&
                                window.RLEvaluator(
                                    "/api/v1/replacements",
                                    "trackReplacements-" + util.randomString(7),
                                    {
                                        linkReplacedCount: n.link,
                                        imageReplacedCount: n.image,
                                        phoneReplacedCount: n.phone,
                                        stringReplacedCount: n.string,
                                        emailReplacedCount: n.email,
                                        cssReplaceCount: u,
                                    }
                                ),
                            d
                        );
                    },
                    replaceEmailLink: function (e, t) {
                        var i = 0;
                        if (!configurator.isProductEnabled("email_replacement"))
                            return i;
                        if (!t.length) return i;
                        if (
                            1 === e.nodeType &&
                            "A" === e.nodeName &&
                            e.href.match(/^mailto/gi)
                        ) {
                            var o = e.href.replace("mailto:", "").toLowerCase();
                            util.forEach(t, function (t) {
                                t.original === o &&
                                    ((e.href = "mailto:" + t.replace),
                                    (o = t.replace),
                                    i++);
                            });
                        }
                        return i;
                    },
                    replaceImage: function (e, t) {
                        var i = 0;
                        return localEnv.isPhoneDisabledOnCurrentPlatform()
                            ? i
                            : t.length
                            ? (1 === e.nodeType &&
                                  "IMG" === e.nodeName &&
                                  util.forEach(t, function (t) {
                                      var o = e.getAttribute("src");
                                      util.isString(o) &&
                                          o.indexOf(t.original) > -1 &&
                                          (e.setAttribute(
                                              "src",
                                              o.replace(t.original, t.replace)
                                          ),
                                          i++);
                                      var r = e.getAttribute("srcset");
                                      if (
                                          util.isString(r) &&
                                          r.indexOf(t.original) > -1
                                      ) {
                                          var n = r.replace(
                                              t.original,
                                              t.replace
                                          );
                                          e.setAttribute("srcset", n), i++;
                                      }
                                  }),
                              1 === e.nodeType &&
                                  "LINK" !== e.nodeName &&
                                  "STYLE" !== e.nodeName &&
                                  "META" !== e.nodeName &&
                                  "TITLE" !== e.nodeName &&
                                  "NOSCRIPT" !== e.nodeName &&
                                  util.forEach(t, function (t) {
                                      window
                                          .getComputedStyle(e)
                                          ["background-image"].indexOf(
                                              t.original
                                          ) > -1 &&
                                          ((e.style.backgroundImage =
                                              "url(" + t.replace + ")"),
                                          i++);
                                  }),
                              i)
                            : i;
                    },
                    replaceLink: function (e, t) {
                        var i = 0;
                        return t.length
                            ? (1 === e.nodeType &&
                                  "A" === e.nodeName &&
                                  util.forEach(t, function (t) {
                                      t.original === e.getAttribute("href") &&
                                          ((e.href = t.replace), i++);
                                  }),
                              i)
                            : i;
                    },
                    replacePhoneNumbers: function (e, t) {
                        var i = 0;
                        if (localEnv.isPhoneDisabledOnCurrentPlatform())
                            return i;
                        if (!t.length) return i;
                        if (
                            (3 === e.nodeType &&
                                util.forEach(t, function (t) {
                                    -1 !== e.nodeValue.search(t.search) &&
                                        ((e.nodeValue = e.nodeValue.replace(
                                            t.search,
                                            t.tokens
                                        )),
                                        i++);
                                }),
                            1 !== e.nodeType || "A" !== e.nodeName)
                        )
                            return i;
                        util.forEach(
                            ["data-phone", "title", "data-href"],
                            function (o) {
                                e.hasAttribute(o) &&
                                    util.forEach(t, function (t) {
                                        if (
                                            -1 !==
                                            e.getAttribute(o).search(t.search)
                                        ) {
                                            var r = e
                                                .getAttribute(o)
                                                .replace(t.search, t.replace);
                                            "1" === r.charAt(4) &&
                                                15 === r.length &&
                                                (r =
                                                    r.slice(0, 5) +
                                                    "-" +
                                                    r.slice(5)),
                                                e.setAttribute(o, r),
                                                i++;
                                        }
                                    });
                            }
                        );
                        var o =
                            e.href.match(/^tel:/gi) ||
                            e.href.match(/.*\/clkg\/tel\//gi);
                        if (!o) return i;
                        var r = o[0],
                            n = decodeURIComponent(e.href.replace(r, ""));
                        return (
                            util.forEach(t, function (t) {
                                -1 !== n.search(t.search) &&
                                    ((e.href =
                                        r + n.replace(t.search, t.replace)),
                                    (n = decodeURIComponent(
                                        e.href.replace(r, "")
                                    )),
                                    i++);
                            }),
                            i
                        );
                    },
                    replaceString: function (e, t) {
                        var i = 0;
                        if (localEnv.isPhoneDisabledOnCurrentPlatform())
                            return i;
                        if (!t.length) return i;
                        if (3 === e.nodeType)
                            util.forEach(t, function (t) {
                                -1 !== e.nodeValue.search(t.search) &&
                                    (t.hasConversionPixel &&
                                        !t.conversionTracked &&
                                        (conversionTracking.trackCVTUrl(t.el),
                                        (t.conversionTracked = !0)),
                                    t.original !== t.replace &&
                                        ((e.nodeValue = e.nodeValue.replace(
                                            t.search,
                                            t.replace
                                        )),
                                        t.el &&
                                            e.parentNode &&
                                            (e.parentNode.innerHTML =
                                                e.parentNode.innerHTML.replace(
                                                    r,
                                                    t.el
                                                )),
                                        i++));
                            });
                        else if (
                            1 === e.nodeType &&
                            "CUFON" === e.nodeName &&
                            e.hasAttribute("alt")
                        ) {
                            var o = e.getAttribute("alt");
                            util.forEach(t, function (t) {
                                o.search(t.search) > -1 &&
                                    (e.setAttribute(
                                        "alt",
                                        o.replace(t.search, t.replace)
                                    ),
                                    (n = !0),
                                    i++);
                            });
                        }
                        return i;
                    },
                    sendGooglePhoneConversions: function () {
                        var e = [];
                        util.forEach(t.phone, function (t) {
                            t.label && e.push(t);
                        }),
                            events.trigger(
                                CONSTANTS.GOOGLE_PHONE_CONVERSION,
                                e
                            );
                    },
                    wrapCssWithParentRule: function (e, t) {
                        for (; t; ) {
                            var i = /^@.*?{/.exec(t.cssText);
                            if (!i) return e;
                            (e = i[0] + " " + e + " }"), (t = t.parentRule);
                        }
                        return e;
                    },
                };
                return c;
            })(),
            simplifiPixel =
                ((_simplifiPixel = {
                    init: function () {
                        pixels.init({
                            product_name: "simplifi_pixel",
                            status_label: "SIMPLIFI_PIXEL",
                            insights: "Pixel::Simplifi",
                            validator: (e) => e && util.isString(e),
                            loadPixel: _simplifiPixel.loadSimplifiTracking,
                        });
                    },
                    loadSimplifiTracking: function (e, t) {
                        "Universal" === e &&
                            (e = localEnv.getUniversalSimplifiPixel());
                        var i = document.createElement("script");
                        (i.type = "text/javascript"),
                            (i.async = !0),
                            (i.referrerPolicy = "no-referrer-when-downgrade"),
                            e.match(
                                /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
                            )
                                ? (i.src = "https://tag.simpli.fi/sifitag/" + e)
                                : (i.src = "https://i.simpli.fi/dpx.js?" + e);
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(i, o), t();
                    },
                }),
                _simplifiPixel),
            _simplifiPixel,
            snapchatPixel =
                ((_snapchatPixel = {
                    init: function () {
                        pixels.init({
                            product_name: "snap_chat_pixel",
                            status_label: "SNAPCHAT_PIXEL",
                            insights: "Pixel::SnapChat",
                            validator: (e) => e && util.isString(e),
                            loadPixel: _snapchatPixel.loadSnapChat,
                        });
                    },
                    loadSnapChat: function (e, t) {
                        !(function (e, t, i) {
                            if (!e.snaptr) {
                                var o = (e.snaptr = function () {
                                    o.handleRequest
                                        ? o.handleRequest.apply(o, arguments)
                                        : o.queue.push(arguments);
                                });
                                o.queue = [];
                                var r = "script",
                                    n = t.createElement(r);
                                (n.async = !0),
                                    (n.src =
                                        "https://sc-static.net/scevent.min.js");
                                var a = t.getElementsByTagName(r)[0];
                                a.parentNode.insertBefore(n, a);
                            }
                        })(window, document),
                            snaptr("init", e, {}),
                            snaptr("track", "PAGE_VIEW"),
                            t();
                    },
                }),
                _snapchatPixel),
            _snapchatPixel,
            tiktokPixel =
                ((_tiktokPixel = {
                    init: function () {
                        pixels.init({
                            product_name: "tik_tok_pixel",
                            status_label: "TIKTOK_PIXEL",
                            insights: "Pixel::TikTok",
                            validator: (e) => e && util.isString(e),
                            loadPixel: _tiktokPixel.loadTikTok,
                        });
                    },
                    loadTikTok: function (e, t) {
                        var i = document.createElement("script");
                        (i.type = "text/javascript"),
                            (i.async = !0),
                            (i.src =
                                "https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=" +
                                e);
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(i, o), t();
                    },
                }),
                _tiktokPixel),
            _tiktokPixel,
            gannettSimplifiPixel =
                ((_gannettSimplifiPixel = {
                    init: function () {
                        pixels.init({
                            product_name: "gannett_simplifi_pixel",
                            status_label: "GANNETT_SIMPLIFI_PIXEL",
                            insights: "Pixel::GannettSimplifi",
                            validator: (e) => e && util.isString(e),
                            loadPixel:
                                _gannettSimplifiPixel.loadGannettSimplifiTracking,
                        });
                    },
                    loadGannettSimplifiTracking: function (e, t) {
                        var i = document.createElement("script");
                        (i.type = "text/javascript"),
                            (i.async = !0),
                            (i.referrerPolicy = "no-referrer-when-downgrade"),
                            (i.src = "https://tag.simpli.fi/sifitag/" + e);
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(i, o), t();
                    },
                }),
                _gannettSimplifiPixel),
            _gannettSimplifiPixel,
            totalLiveChat =
                ((_totalLiveChat = {
                    init: function () {
                        var e = localEnv.getPageUri().queryKey.tlcDisabled,
                            t = configurator.getPageConfig("tlcDisabled");
                        if (
                            configurator.isProductEnabled("chat") &&
                            !e &&
                            !t &&
                            !localEnv.isSecondaryMode()
                        ) {
                            var i = configurator.getProduct("chat").config;
                            i.apex_chat_id &&
                                util.isString(i.apex_chat_id) &&
                                util.getScript({
                                    src: "//www.reachlocallivechat.com/scripts/dyns.js",
                                    success: util.bind(
                                        _totalLiveChat.initializeChatWidget,
                                        _totalLiveChat
                                    ),
                                });
                        }
                    },
                    initializeChatWidget: function () {
                        var e = configurator.getProduct("chat").config;
                        configurator.isCaptureEnabled()
                            ? events.once(CONSTANTS.VISIT_EVENT, function () {
                                  util.isFunction(window.init) &&
                                      window.init(e.apex_chat_id);
                              })
                            : util.isFunction(window.init) &&
                              window.init(e.apex_chat_id);
                    },
                }),
                _totalLiveChat),
            _totalLiveChat,
            visitTracking =
                ((DIRECT_REFERRER = "DIRECT"),
                (OTHER_REFERRER = "OTHER"),
                (REFERRER_TYPE_KEY = "capture_referrer_type"),
                (_visitTracking = {
                    init: function () {
                        configurator.isProductEnabled("capture") &&
                            (campaign.isPaidCampaign() ||
                                "EUR" !== configurator.getPlatform()) &&
                            (localEnv.isSecondaryMode()
                                ? events.once(
                                      CONSTANTS.VISIT_EVENT,
                                      function (e) {
                                          conversionTracking.trackPageCVT(e),
                                              conversionTracking.trackPageCVTOnURLChange(
                                                  e
                                              );
                                      }
                                  )
                                : _visitTracking.getStoredVisitData(
                                      _visitTracking.trackVisit
                                  ));
                    },
                    ensureValidValue: function (e) {
                        return util.isObject(e) && e.value
                            ? e.value
                            : util.isString(e) && e.indexOf("value") > 0
                            ? util.parse(e).value
                            : e;
                    },
                    generateAnonymousUuid: function () {
                        var e = util.generateUuid();
                        return e.replace(e.slice(0, 8), "declined");
                    },
                    getStoredVisitData: function (e) {
                        storage.getItems(
                            [
                                "bot_type",
                                "history_campaign",
                                "history_referrer_type",
                                "last_activity_at",
                                "visitor_id",
                                "sifi_user_id",
                                "visit_id",
                            ],
                            function (t) {
                                t.visitor_id &&
                                    -1 !== t.visitor_id.indexOf("SameSite") &&
                                    (t.visitor_id = util.generateUuid()),
                                    (t.history_campaign = util.parse(
                                        t.history_campaign
                                    )),
                                    e(t);
                            }
                        );
                    },
                    inheritVisitAttribution: function (e) {
                        return (
                            (e.referrer_type =
                                e.referrer_type || e.history_referrer_type),
                            e.history_campaign
                                ? ((e.referrer_type = e.history_referrer_type),
                                  (e.campaign = e.history_campaign))
                                : e.history_referrer_type &&
                                  "OTHER" !== e.history_referrer_type &&
                                  (e.referrer_type = e.history_referrer_type),
                            (e.history_campaign = e.campaign),
                            (e.history_referrer_type = e.referrer_type),
                            e
                        );
                    },
                    isActiveVisit: function (e) {
                        if (!e.visit_id || !e.visitor_id || !e.last_activity_at)
                            return !1;
                        var t = parseInt(e.last_activity_at, 10);
                        return !(isNaN(t) || util.now() - t > 18e5);
                    },
                    getReferrerTypeForNeighborly: function (e, t) {
                        return t.utm_data
                            ? OTHER_REFERRER
                            : e.referrer_type === OTHER_REFERRER
                            ? DIRECT_REFERRER
                            : e.referrer_type;
                    },
                    onVisitTracked: function (e) {
                        util.isString(e) && (e = util.parse(e) || {}),
                            ((e = util.extend(_lastTrackedVisit, e)).campaign =
                                campaign.getFromQuerystring()),
                            (e.history_campaign = campaign.validateCampaign(
                                e.history_campaign
                            )),
                            (e.last_activity_at = util.now()),
                            (e = _visitTracking.inheritVisitAttribution(e)),
                            _visitTracking.updateCampaignWithVisit(e),
                            (e.referrer_source = "ORGANIC"),
                            campaign.isPaidCampaign()
                                ? (e.referrer_source = "PAID")
                                : localEnv.isNonRLPaid() &&
                                  (e.referrer_source = "NONRLPAID"),
                            localEnv.isPrivacyDeclined()
                                ? Object.defineProperties(e, {
                                      visit_id: {
                                          get: function () {
                                              return _visitTracking.generateAnonymousUuid();
                                          },
                                      },
                                      visitor_id: {
                                          get: function () {
                                              return util.generateUuid();
                                          },
                                      },
                                  })
                                : (conversionTracking.trackPageCVT(e),
                                  conversionTracking.trackPageCVTOnURLChange(e),
                                  util.setCookie(
                                      "rl_visitor_history",
                                      e.visitor_id
                                  ),
                                  util.getCookie("sifi_user_id") ||
                                      util.setCookie(
                                          "sifi_user_id",
                                          e.vendor_user_id
                                      ),
                                  _visitTracking.setStoredVisitData(
                                      e,
                                      function () {}
                                  )),
                            events.trigger(CONSTANTS.VISIT_EVENT, e);
                    },
                    removeStoredVisitData: function () {
                        storage.removeItems([
                            "bot_type",
                            "history_campaign",
                            "history_referrer_type",
                            "last_activity_at",
                            "visitor_id",
                            "sifi_user_id",
                            "visit_id",
                            "repl_false",
                        ]);
                    },
                    setStoredVisitData: function (e, t) {
                        var i = e.bot_type || "",
                            o = e.history_campaign
                                ? util.stringify(e.history_campaign)
                                : "",
                            r = e.history_referrer_type || "",
                            n = e.last_activity_at || "",
                            a = e.visit_id || "",
                            c = e.visitor_id || "",
                            s = e.vendor_user_id || "";
                        storage.setItems(
                            {
                                bot_type: i,
                                history_campaign: o,
                                history_referrer_type: r,
                                last_activity_at: n,
                                visitor_id: c,
                                sifi_user_id: s,
                                visit_id: a,
                            },
                            t
                        );
                    },
                    trackVisit: function (e) {
                        (e.visitor_id = _visitTracking.ensureValidValue(
                            e.visitor_id
                        )),
                            (e.visit_id = _visitTracking.ensureValidValue(
                                e.visit_id
                            )),
                            (e.history_referrer_type =
                                _visitTracking.ensureValidValue(
                                    e.history_referrer_type
                                )),
                            (e.bot_type = _visitTracking.ensureValidValue(
                                e.bot_type
                            )),
                            (e.last_activity_at =
                                _visitTracking.ensureValidValue(
                                    e.last_activity_at
                                ));
                        var t = localEnv.getReferrer(),
                            i = e.sifi_user_id;
                        localEnv.isPrivacyDeclined()
                            ? ((e = {
                                  is_new: !0,
                                  visitor_id: e.visitor_id,
                                  visit_id: "",
                              }),
                              (t = localEnv.getInitialReferrer()))
                            : e.visit_id
                            ? localEnv.isSameOriginAsReferrer() ||
                              _visitTracking.isActiveVisit(e)
                                ? (e.is_new = !1)
                                : (_visitTracking.removeStoredVisitData(),
                                  (e = {
                                      is_new: !0,
                                      visitor_id: e.visitor_id,
                                      visit_id: "",
                                  }))
                            : (_visitTracking.removeStoredVisitData(),
                              (e = {
                                  is_new: !0,
                                  visitor_id: e.visitor_id,
                                  visit_id: "",
                              }),
                              (t = localEnv.getInitialReferrer())),
                            (_lastTrackedVisit = e);
                        var o = campaign.getCampaignPayload(!1);
                        if (
                            ((e.referrer_type =
                                _visitTracking.getReferrerTypeFromQueryString(
                                    localEnv.getPageUri()
                                ) || _visitTracking.getReferrerType(t)),
                            configurator.current().nbly &&
                                !campaign.isPaidCampaign() &&
                                (e.referrer_type =
                                    _visitTracking.getReferrerTypeForNeighborly(
                                        e,
                                        o
                                    )),
                            e.is_new || !localEnv.isSameOriginAsReferrer())
                        ) {
                            (e.visit_id = e.visit_id || util.generateUuid()),
                                (e.visitor_id =
                                    e.visitor_id || util.generateUuid());
                            var r = "/api/v1/visits",
                                n = util.extend(
                                    {
                                        visit_id: e.visit_id,
                                        visitor_id: e.visitor_id,
                                        rl_eid:
                                            "trackVisit-" +
                                            util.randomString(7),
                                        referrer_type: e.referrer_type,
                                        visit_in_progress: !e.is_new,
                                    },
                                    o
                                );
                            if (
                                (util.isFunction(window.RLEvaluator) &&
                                    window.RLEvaluator(r, n.rl_eid, n),
                                !localEnv.isEvaluationMode() &&
                                    !localEnv.isPrivacyDeclined())
                            )
                                return configurator.isProductEnabled(
                                    "simplifi_pixel"
                                )
                                    ? void events.once(
                                          CONSTANTS.SIMPLIFI_INIT_EVENT,
                                          function (t) {
                                              var o =
                                                  i ||
                                                  n.vendor_user_id ||
                                                  util.getCookie(
                                                      "sifi_user_id"
                                                  ) ||
                                                  t ||
                                                  "";
                                              (n.vendor_user_id = o),
                                                  (e.vendor_user_id = o),
                                                  util.defer(function () {
                                                      _visitTracking.onVisitTracked(
                                                          e
                                                      );
                                                  }),
                                                  util.ajax({
                                                      method: "POST",
                                                      payload: n,
                                                      url:
                                                          environment.captureUriRoot +
                                                          r,
                                                  });
                                          }
                                      )
                                    : (util.defer(function () {
                                          _visitTracking.onVisitTracked(e);
                                      }),
                                      void util.ajax({
                                          method: "POST",
                                          payload: n,
                                          url: environment.captureUriRoot + r,
                                      }));
                            util.defer(function () {
                                _visitTracking.onVisitTracked(e);
                            });
                        } else
                            util.defer(function () {
                                _visitTracking.onVisitTracked(e);
                            });
                    },
                    getReferrerType: function (e) {
                        if (!e || !util.isString(e)) return DIRECT_REFERRER;
                        for (
                            var t = urlUtil.parse(encodeURI(e)).host.split("."),
                                i = 0;
                            i < t.length;
                            i++
                        )
                            for (var o = 0; o < 2; o++) {
                                var r = t.slice(i, t.length - o).join("."),
                                    n = REFERRERS[r];
                                if (n) return n;
                            }
                        return OTHER_REFERRER;
                    },
                    getReferrerTypeFromQueryString: function (e) {
                        return e && e.queryKey
                            ? (util.isString(e.queryKey.rl_referrer_type) &&
                                  sessionStorage.setItem(
                                      REFERRER_TYPE_KEY,
                                      e.queryKey.rl_referrer_type.toUpperCase()
                                  ),
                              sessionStorage.getItem(REFERRER_TYPE_KEY))
                            : null;
                    },
                    updateCampaignWithVisit: function (e) {
                        e.campaign &&
                        (e.campaign.scid ||
                            e.campaign.ohid ||
                            e.campaign.ecid ||
                            e.campaign.id_creative_resource)
                            ? (campaign.updateCampaignAttributes(
                                  util.clone(e.campaign)
                              ),
                              campaign.setPaidCampaign(!0))
                            : campaign.setPaidCampaign(!1);
                    },
                }),
                _visitTracking),
            _lastTrackedVisit,
            DIRECT_REFERRER,
            OTHER_REFERRER,
            REFERRER_TYPE_KEY,
            _visitTracking,
            environment = {
                captureOnDemandRoot:
                    "https://capture-on-demand-prod.gannettdigital.com/",
                captureInsightsRoot:
                    "https://capturelogger-prod-usa.localiq.com",
                captureStorageRoot: "https://<site id>.rlets.com",
                configUriRoot: "https://cdn.rlets.com/capture_configs",
                disablePhoneOnPlatforms: util.parse("[]"),
                diyChatBotUriRoot: "https://freemiumleadsservice.localiq.com",
                diyBookingUriRoot: "https://scheduler.localiq.com",
                diyWidgetUriRoot: "https://freemiumleadsservice.localiq.com",
                faultUriRoot: "https://fault.rlets.com",
                globalIgnoredUrls: util.parse(
                    '["https://www.facebook.com/tr*","https://connect.facebook.net/log/fbevents_telemetry*","https://tr.snapchat.com/p*","https://tr.snapchat.com/cm/s*","https://tm.smedia.ca/*","https://pureinfluencer.idrove.it/*","https://securepubads.g.doubleclick.net/*","https://bloggernetwork-d.openx.net/*","https://prebid.adnxs.com/*","https://ib.adnxs.com/*","https://www.google.com/recaptcha/api2/reload*","https://heatmap-events-collector.instapage.com/api/raw-data*","*://*.dca0.com/*","*://*.pusher.com/*","*://ec.instapagemetrics.com/*","https://reachlocallivechat.com/*","*://*.google-analytics.com/*","*://analytics.google.com/*","*://forms.hsforms.com/emailcheck/*","*://rum.browser-intake-datadoghq.com/*","*://d.btttag.com/*","*://*.hotjar.com/*","*://*.optimizely.com/*","*://api2-unifiedsyncplatform.dwyergroup.com/*/Booking/Reschedule*","*://api2-unifiedsyncplatform.dwyergroup.com/*/Booking/Cancel*","*://api2-unifiedsyncplatform.dwyergroup.com/*/ConceptLead/CheckDuplicates*","*://api2-unifiedsyncplatform.dwyergroup.com/*/CurrentJobsByFranchise*","*://api2-unifiedsyncplatform.dwyergroup.com/*/Franchise*","*://api2-unifiedsyncplatform.dwyergroup.com/*/Reviews*","*://api2-unifiedsyncplatform.dwyergroup.com/*/TechAvailability*","*://api2-unifiedsyncplatform.dwyergroup.com/*/CalculateEstimate*","*://api2-test-unifiedsyncplatform.dwyergroup.com/*/Booking/Reschedule*","*://api2-test-unifiedsyncplatform.dwyergroup.com/*/Booking/Cancel*","*://api2-test-unifiedsyncplatform.dwyergroup.com/*/ConceptLead/CheckDuplicates*","*://api2-test-unifiedsyncplatform.dwyergroup.com/*/CurrentJobsByFranchise*","*://api2-test-unifiedsyncplatform.dwyergroup.com/*/Franchise*","*://api2-test-unifiedsyncplatform.dwyergroup.com/*/Reviews*","*://api2-test-unifiedsyncplatform.dwyergroup.com/*/TechAvailability*","*://api2-test-unifiedsyncplatform.dwyergroup.com/*/CalculateEstimate*","*://api.neighborly.com/*/Booking/Reschedule*","*://api.neighborly.com/*/Booking/Cancel*","*://api.neighborly.com/*/ConceptLead/CheckDuplicates*","*://api.neighborly.com/*/CurrentJobsByFranchise*","*://api.neighborly.com/*/Franchise*","*://api.neighborly.com/*/Reviews*","*://api.neighborly.com/*/TechAvailability*","*://*.googleadservices.com/*","*://graph.facebook.com/*","*://stats.g.doubleclick.net/*","*://*.web-2-tel.com/*","*://api.userway.org/*","*://*.ads.linkedin.com/*","*://api.chilipiper.com/*","*://tags.srv.stackadapt.com/*","*://gtm.marvin.com/*","*://ariane.abtasty.com/*","*://*/com.snowplowanalytics.snowplow/tp2*"]'
                ),
                gtagScriptSource: "https://www.googletagmanager.com/gtag/js",
                originCountryURL:
                    "https://capture-api.reachlocalservices.com/originCountry",
                rawConfigUriRoot: "https://cdn.rlets.com/raw_capture_configs",
                simplifiServiceRoot: "https://um.simpli.fi/gannett",
                staticUriRoot: "https://cdn.rlets.com/capture_static",
                universalSimplifiPixel: util.parse(
                    '{"USA":"3f25cc00-b9ab-0134-0eba-0cc47a63c1a4","CAN":"ad9a87a0-aaa8-0134-f7f7-0cc47a63c1a4","AUS":"f06958d0-3cb8-0134-bba9-0cc47abc2b4e","EUR":"49b7e500-23f3-0136-46cf-067f653fa718","GBR":"33159060-23f3-0136-46cf-067f653fa718"}'
                ),
            };
        (window.RLCAP.onFault = function (e, t) {
            (new Image().src =
                "https://fault.rlets.com/static/_.gif?s=" +
                localEnv.getBaseSiteId() +
                "&m=" +
                encodeURIComponent(e) +
                "&f=" +
                encodeURIComponent(t)),
                console && console.error && console.error(e);
        }),
            (window.RLCAP.init = function init() {
                localEnv.getBaseSiteId()
                    ? (insights.start("Kernel::Init"),
                      insights.start("TimeToReplacements"),
                      localEnv.isBrowserABot() ||
                          (localEnv.isBrowserCompatible() &&
                              (localEnv.isSecondaryMode() ||
                              localEnv.isCookieEnabled()
                                  ? hasInitialized
                                      ? console &&
                                        console.warn &&
                                        console.warn(
                                            "Capture has already been initialized."
                                        )
                                      : ((hasInitialized = !0),
                                        localEnv.isDebugMode() &&
                                            console.info(
                                                "[CaptureJS] Debug mode enabled."
                                            ),
                                        events.init(),
                                        (storage = CaptureStorage(
                                            localEnv.getBaseSiteId()
                                        )),
                                        insights.start("Kernel::Config"),
                                        configurator.load(function (e) {
                                            if (e)
                                                return window.RLCAP.onFault(
                                                    e,
                                                    "Kernel"
                                                );
                                            if (
                                                localEnv.getBaseSiteId() !==
                                                configurator.getSiteId()
                                            ) {
                                                var t =
                                                    configurator.getSiteId();
                                                localEnv.setOverrideSiteId(t),
                                                    storage.setItems({
                                                        [CONSTANTS.OVERRIDE_ID_STORAGE_KEY]:
                                                            t,
                                                    }),
                                                    (storage =
                                                        CaptureStorage(t));
                                            }
                                            environment.captureUriRoot =
                                                "https://<site id>.rlets.com".replace(
                                                    "<site id>",
                                                    configurator.getSiteId()
                                                );
                                            var i = configurator.isReachCode()
                                                ? "RL_ReachCode"
                                                : "RL_Edge_Code";
                                            insights.track("Kernel::Config", {
                                                subscriptionLevel: i,
                                            }),
                                                insights.start(
                                                    "Kernel::StartModules"
                                                ),
                                                configurator.isCaptureEnabled() &&
                                                    (euVisitorCheck.init(),
                                                    events.once(
                                                        CONSTANTS.EU_VISITOR_CHECK_EVENT,
                                                        function () {
                                                            var e =
                                                                    "RlocalOptOut",
                                                                t =
                                                                    "RlocalOptOut_" +
                                                                    configurator.current()
                                                                        .globalMasterAdvertiserId,
                                                                i =
                                                                    "RlocalSessionOptOut",
                                                                o =
                                                                    sessionStorage.getItem(
                                                                        i
                                                                    );
                                                            o
                                                                ? events.trigger(
                                                                      CONSTANTS.OPT_OUT_CHECK_EVENT,
                                                                      {
                                                                          isOptedOut:
                                                                              "1" ===
                                                                              o,
                                                                      }
                                                                  )
                                                                : storage.getItems(
                                                                      [e, t],
                                                                      function (
                                                                          o
                                                                      ) {
                                                                          var r =
                                                                              "1" ===
                                                                                  o[
                                                                                      e
                                                                                  ] ||
                                                                              "1" ===
                                                                                  o[
                                                                                      t
                                                                                  ];
                                                                          sessionStorage.setItem(
                                                                              i,
                                                                              r
                                                                                  ? "1"
                                                                                  : "0"
                                                                          ),
                                                                              events.trigger(
                                                                                  CONSTANTS.OPT_OUT_CHECK_EVENT,
                                                                                  {
                                                                                      isOptedOut:
                                                                                          r,
                                                                                  }
                                                                              );
                                                                      }
                                                                  ),
                                                                events.once(
                                                                    CONSTANTS.OPT_OUT_CHECK_EVENT,
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        if (
                                                                            e.isOptedOut
                                                                        )
                                                                            insights.track(
                                                                                "OptOut"
                                                                            );
                                                                        else {
                                                                            marketingPolicy.init(),
                                                                                campaign.init(
                                                                                    function () {
                                                                                        privacyBanner.showBanner(
                                                                                            function () {
                                                                                                insights.start(
                                                                                                    "RL_LOADER_INIT"
                                                                                                ),
                                                                                                    formCapture.init(),
                                                                                                    diyChatBot.init(),
                                                                                                    diyBooking.init(),
                                                                                                    diyWidget.init(),
                                                                                                    visitTracking.init(),
                                                                                                    replacement.init(),
                                                                                                    externalJS.init(),
                                                                                                    localEnv.isPrivacyDeclined() ||
                                                                                                        (emailCapture.init(),
                                                                                                        iframeProxy.init(),
                                                                                                        onClickCVT.init(),
                                                                                                        remarketing.init(),
                                                                                                        bingUET.init(),
                                                                                                        cheqBotPixel.init(),
                                                                                                        dfpPixel.init(),
                                                                                                        dmpPixel.init(),
                                                                                                        facebookPixel.init(),
                                                                                                        googleDisplayNetwork.init(),
                                                                                                        googlePixels.init(),
                                                                                                        mediaMath.init(),
                                                                                                        simplifiPixel.init(),
                                                                                                        snapchatPixel.init(),
                                                                                                        tiktokPixel.init(),
                                                                                                        gannettSimplifiPixel.init(),
                                                                                                        linkClick.init(),
                                                                                                        callClick.init(),
                                                                                                        totalLiveChat.init(),
                                                                                                        insights.track(
                                                                                                            "RL_LOADER_INIT"
                                                                                                        ),
                                                                                                        (window.captureStatus.CAPTUREJS =
                                                                                                            "initialized"));
                                                                                            }
                                                                                        );
                                                                                    }
                                                                                ),
                                                                                insights.track(
                                                                                    "Kernel::StartModules"
                                                                                );
                                                                            var t =
                                                                                    util.getResourceLoadDuration(
                                                                                        "capture_static/mms/capture.js"
                                                                                    ),
                                                                                i =
                                                                                    t <
                                                                                    0
                                                                                        ? {}
                                                                                        : {
                                                                                              scriptLoadTime:
                                                                                                  t,
                                                                                          };
                                                                            insights.track(
                                                                                "Kernel::Init",
                                                                                i
                                                                            );
                                                                        }
                                                                    }
                                                                );
                                                        }
                                                    ));
                                        }))
                                  : insights.track(
                                        "FIRST_PARTY_COOKIE_ACCESS_DENIED",
                                        null,
                                        { forceTrack: !0 }
                                    ))))
                    : console &&
                      console.error &&
                      console.error("Could not resolve value for site ID");
            }),
            location.search.match(/rl-no-init/) ||
                !0 === window.rl_no_init ||
                window.RLCAP.init();
    }
})(window, document);
