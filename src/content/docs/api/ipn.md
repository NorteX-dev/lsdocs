---
title: "Route: IPN Webhooks"
description: Light Services bot API reference.
---

:::danger
IPN routes are not designed to be used manually. They are designed to handle webhooks sent in by payment gateways, like PayPal.
:::

| Endpoint      | Method | Query Params | Description                                     | Requires Authentication?            | Is Paginated? | Added In |
|---------------|--------|--------------|-------------------------------------------------|-------------------------------------|---------------|----------|
| /ipn/paypal   | POST   | -            | Handles PayPal webhook notifications.           | ❌ (but requires PayPal signature)   | ❌             | v1.6.0   |
| /ipn/coinbase | POST   | -            | Handles Coinbase Commece webhook notifications. | ❌ (but requires Coinbase signature) | ❌             | v1.6.0   |
