---
title: API Pagination
description: Light Services bot API reference.
---

Some endpoints return a lot of data and hence allow paginating to reduce data sent. This guide explains how paginating works in detail.

:::note
If you’re wondering which endpoints allow pagination, look for a “_Paginated_” badge in the route’s table.
:::

Paginated endpoints allow query parameters:

-   page - show a certain page
-   limit - decides how many items there are per page

For example, for a request like: `/paginated-endpoint?page=1&limit=10` the result will be 10 items on the first page.

Each endpoint that is paginated will also always return a `totalCount` property in the response JSON. You can get the total amount of pages by calculating:

`totalPages = ceil(totalCount / limit)`

This will give you the total number of pages needed to display all the data. You can then use this information to create your own pagination UI or to control how many pages are fetched at once when making requests programmatically.

You can also use the `/<endpoint>/count` endpoint to get the total count, if available.
