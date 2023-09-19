---
title: "Route: Tickets"
description: Light Services bot API reference.
---

| Endpoint       | Method | Query Params            | Description                              | Requires Authentication? | Is Paginated? | Added In |
|----------------|--------|-------------------------|------------------------------------------|--------------------------|---------------|----------|
| /tickets       | GET    | -                       | Get all tickets.                         | ✅                        | ✅             | v2.2.0   |
| /tickets/count | GET    | -                       | Get a total count of all tickets.        | ✅                        | ❌             | v2.2.0   |
| /tickets/\:id  | GET    | \:id - ID of the ticket | Get information about a specific ticket. | ✅                        | ❌             | v2.2.0   |
