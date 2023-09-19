---
title: "Route: Transcripts"
description: Light Services bot API reference.
---

| Endpoint                 | Method | Query Params                  | Description                                                                                                    | Requires Authentication? | Is Paginated? | Added In |
|--------------------------|--------|-------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------|---------------|----------|
| /transcripts/\:ticketId  | GET    | \:ticketId - ID of the ticket | Gets transcript data (messages sent) for the ticket.                                                           | ✅                        | ✅             | v2.2.0   |
| /tickets/\:ticketId/file | GET    | \:ticketId - ID of the ticket | Returns transcript data just like the endpoint above, but in a TXT file transmitted over with an octet-stream. | ✅                        | ❌             | v2.2.0   |
