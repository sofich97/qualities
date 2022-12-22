import * as Sentry from "@sentry/react";
import {BrowserTracing} from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://5f6190c35d054d4bb898ef63bfb533ac@o4504367582412800.ingest.sentry.io/4504367587459073",
        integrations: [new BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log(error) {
    Sentry.captureException(error);
}

const logger = {
    init,
    log
};

export default logger;