export interface paths {
    "/account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Account Info
         * @description Get your Vultr account, permission, and billing information.
         */
        get: operations["get-account"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account/bandwidth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Account Bandwidth Info
         * @description Get your Vultr account bandwidth information.
         */
        get: operations["get-account-bandwidth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Applications
         * @description Get a list of all available Applications.
         */
        get: operations["list-applications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/backups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Backups
         * @description Get information about Backups in your account.
         */
        get: operations["list-backups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/backups/{backup-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Backup id](#operation/list-backups). */
                "backup-id": string;
            };
            cookie?: never;
        };
        /**
         * Get a Backup
         * @description Get the information for the Backup.
         */
        get: operations["get-backup"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Bare Metal Instances
         * @description List all Bare Metal instances in your account.
         */
        get: operations["list-baremetals"];
        put?: never;
        /**
         * Create Bare Metal Instance
         * @description Create a new Bare Metal instance in a `region` with the desired `plan`. Choose one of the following to deploy the instance:
         *
         *     * `os_id`
         *     * `snapshot_id`
         *     * `app_id`
         *     * `image_id`
         *
         *     Supply other attributes as desired.
         */
        post: operations["create-baremetal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Bare Metal
         * @description Get information for a Bare Metal instance.
         */
        get: operations["get-baremetal"];
        put?: never;
        post?: never;
        /**
         * Delete Bare Metal
         * @description Delete a Bare Metal instance.
         */
        delete: operations["delete-baremetal"];
        options?: never;
        head?: never;
        /**
         * Update Bare Metal
         * @description Update a Bare Metal instance. All attributes are optional. If not set, the attributes will retain their original values.
         *
         *     **Note:** Changing `os_id`, `app_id` or `image_id` may take a few extra seconds to complete.
         */
        patch: operations["update-baremetal"];
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/bandwidth": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * Bare Metal Bandwidth
         * @description Get bandwidth information for the Bare Metal instance.<br><br>The `bandwidth` object in a successful response contains objects representing a day in the month. The date is denoted by the nested object keys. Days begin and end in the UTC timezone. Bandwidth utilization data contained within the date object is refreshed periodically. We do not recommend using this endpoint to gather real-time metrics.
         */
        get: operations["get-bandwidth-baremetal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/halt": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Halt Bare Metal
         * @description Halt the Bare Metal instance.
         */
        post: operations["halt-baremetal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/ipv4": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * Bare Metal IPv4 Addresses
         * @description Get the IPv4 information for the Bare Metal instance.
         */
        get: operations["get-ipv4-baremetal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/ipv6": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * Bare Metal IPv6 Addresses
         * @description Get the IPv6 information for the Bare Metal instance.
         */
        get: operations["get-ipv6-baremetal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reboot Bare Metal
         * @description Reboot the Bare Metal instance.
         */
        post: operations["reboot-baremetal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/reinstall": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reinstall Bare Metal
         * @description Reinstall the Bare Metal instance using an optional `hostname`.
         *
         *
         *     **Note:** This action may take some time to complete.
         */
        post: operations["reinstall-baremetal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/start": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start Bare Metal
         * @description Start the Bare Metal instance.
         */
        post: operations["start-baremetal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/upgrades": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Available Bare Metal Upgrades
         * @description Get available upgrades for a Bare Metal
         */
        get: operations["get-bare-metals-upgrades"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/user-data": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Bare Metal User Data
         * @description Get the user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) for a Bare Metal.
         */
        get: operations["get-bare-metal-userdata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/vnc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * Get VNC URL for a Bare Metal
         * @description Get the VNC URL for a Bare Metal
         */
        get: operations["get-bare-metal-vnc"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * List Bare Metal Instance VPC 2.0 Networks
         * @description List the VPC 2.0 networks for a Bare Metal Instance.
         */
        get: operations["list-baremetal-vpc2"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/vpc2/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach VPC 2.0 Network to Bare Metal Instance
         * @description Attach a VPC 2.0 Network to a Bare Metal Instance.
         */
        post: operations["attach-baremetals-vpc2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/vpc2/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [bare-metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Detach VPC 2.0 Network from Bare Metal Instance
         * @description Detach a VPC 2.0 Network from an Bare Metal Instance.
         */
        post: operations["detach-baremetal-vpc2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/vpcs": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /**
         * List Bare Metal Instance VPC Networks
         * @description List the VPC networks for a Bare Metal Instance.
         */
        get: operations["list-baremetal-vpcs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/vpcs/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach VPC Network to Bare Metal Instance
         * @description Attach a VPC Network to a Bare Metal Instance.
         */
        post: operations["attach-baremetals-vpcs"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/{baremetal-id}/vpcs/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [bare-metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Detach VPC Network from Bare Metal Instance
         * @description Detach a VPC Network from an Bare Metal Instance.
         */
        post: operations["detach-baremetal-vpcs"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/halt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Halt Bare Metals
         * @description Halt Bare Metals.
         */
        post: operations["halt-baremetals"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reboot Bare Metals
         * @description Reboot Bare Metals.
         */
        post: operations["reboot-bare-metals"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bare-metals/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start Bare Metals
         * @description Start Bare Metals.
         */
        post: operations["start-bare-metals"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Billing History
         * @description Retrieve list of billing history
         */
        get: operations["list-billing-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Invoices
         * @description Retrieve a list of invoices
         */
        get: operations["list-invoices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing/invoices/{invoice-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of invoice */
                "invoice-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Invoice
         * @description Retrieve specified invoice
         */
        get: operations["get-invoice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing/invoices/{invoice-id}/items": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of invoice */
                "invoice-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Invoice Items
         * @description Retrieve full specified invoice
         */
        get: operations["get-invoice-items"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing/pending-charges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Pending Charges
         * @description Retrieve list of billing pending charges
         */
        get: operations["pending-charges"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/blocks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Block storages
         * @description List all Block Storage in your account.
         */
        get: operations["list-blocks"];
        put?: never;
        /**
         * Create Block Storage
         * @description Create new Block Storage in a `region` with a size of `size_gb`. Size may range between 10 and 40000 depending on the `block_type`.
         */
        post: operations["create-block"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/blocks/{block-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Block Storage id](#operation/list-blocks). */
                "block-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Block Storage
         * @description Get information for Block Storage.
         */
        get: operations["get-block"];
        put?: never;
        post?: never;
        /**
         * Delete Block Storage
         * @description Delete Block Storage.
         */
        delete: operations["delete-block"];
        options?: never;
        head?: never;
        /**
         * Update Block Storage
         * @description Update information for Block Storage.
         *
         */
        patch: operations["update-block"];
        trace?: never;
    };
    "/blocks/{block-id}/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Block Storage id](#operation/list-blocks). */
                "block-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach Block Storage
         * @description Attach Block Storage to Instance `instance_id`.
         */
        post: operations["attach-block"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/blocks/{block-id}/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Block Storage id](#operation/list-blocks). */
                "block-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Detach Block Storage
         * @description Detach Block Storage.
         */
        post: operations["detach-block"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cdns/pull-zones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List CDN Pull Zones
         * @description List CDN Pull Zones
         */
        get: operations["list-pullzones"];
        put?: never;
        /**
         * Create CDN Pull Zones
         * @description Create a new CDN Pull Zone.
         */
        post: operations["create-pullzone"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cdns/pull-zones/{pullzone-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Pull Zone ID](#operation/list-pullzones). */
                "pullzone-id": string;
            };
            cookie?: never;
        };
        /**
         * Get CDN Pull Zone
         * @description Get information about a CDN Pull Zones
         */
        get: operations["get-pullzone"];
        /**
         * Update CDN Pull Zone
         * @description Update information for a CDN Pullzone. All attributes are optional. If not set, the attributes will retain their original values.
         */
        put: operations["update-pullzone"];
        post?: never;
        /**
         * Delete CDN Pullzone
         * @description Delete a CDN Pull Zone.
         */
        delete: operations["delete-pullzone"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cdns/pull-zones/{pullzone-id}/purge": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Pull Zone ID](#operation/list-pullzones). */
                "pullzone-id": string;
            };
            cookie?: never;
        };
        /**
         * Purge CDN Pull Zone
         * @description Clears cached content on server proxies so that visitors can get the latest page versions.
         *
         *     **Note:** This action may only be performed once every six hours.
         *
         *     **Note:** This action may take a few extra seconds to complete.
         */
        get: operations["purge-pullzone"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cdns/push-zones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List CDN Push Zones
         * @description List CDN Push Zones
         */
        get: operations["list-pushzones"];
        put?: never;
        /**
         * Create CDN Push Zones
         * @description Create a new CDN Push Zone.
         */
        post: operations["create-pushzone"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cdns/push-zones/{pushzone-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        /**
         * Get CDN Push Zone
         * @description Get information about a CDN Push Zone
         */
        get: operations["get-pushzone"];
        /**
         * Update CDN Push Zone
         * @description Update information for a CDN Pushzone. All attributes are optional. If not set, the attributes will retain their original values.
         */
        put: operations["update-pushzone"];
        post?: never;
        /**
         * Delete CDN Pushzone
         * @description Delete a CDN Push Zone.
         */
        delete: operations["delete-pushzone"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cdns/push-zones/{pushzone-id}/files": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        /**
         * List CDN Push Zone Files
         * @description Get a list of files that have been uploaded to a specific CDN Push Zones
         */
        get: operations["get-pushzone-files"];
        put?: never;
        /**
         * Create CDN Push Zone File Upload Endpoint
         * @description Create a presigned post endpoint that can be used to upload a file to your Push Zone.  After sending this request you must send a second POST request to the returned URL. Include all of the returned inputs as form-data fields using the same key and value.  You must also include a field named "file" that holds the file to be uploaded.
         */
        post: operations["create-pushzone-upload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cdns/push-zones/{pushzone-id}/files/{file-name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [File Name](#operation/list-pushzone-files). */
                "file-name": string;
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        /**
         * Get CDN Push Zone File
         * @description Get information about a CDN Push Zone file
         */
        get: operations["get-pushzone"];
        put?: never;
        post?: never;
        /**
         * Delete CDN Pushzone File
         * @description Delete a CDN Push Zone file.
         */
        delete: operations["delete-pushzone-file"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Managed Databases
         * @description List all Managed Databases in your account.
         */
        get: operations["list-databases"];
        put?: never;
        /**
         * Create Managed Database
         * @description Create a new Managed Database in a `region` with the desired `plan`. Supply optional attributes as desired.
         */
        post: operations["create-database"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Managed Database
         * @description Get information about a Managed Database.
         */
        get: operations["get-database"];
        /**
         * Update Managed Database
         * @description Update information for a Managed Database. All attributes are optional. If not set, the attributes will retain their original values.
         */
        put: operations["update-database"];
        post?: never;
        /**
         * Delete Managed Database
         * @description Delete a Managed Database.
         */
        delete: operations["delete-database"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/advanced-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Advanced Options
         * @description List all configured and available advanced options for the Managed Database (PostgreSQL engine types only).
         */
        get: operations["list-advanced-options"];
        /**
         * Update Advanced Options
         * @description Updates an advanced configuration option for the Managed Database (PostgreSQL engine types only).
         */
        put: operations["update-advanced-options"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List Service Alerts
         * @description List service alert messages for the Managed Database.
         */
        post: operations["list-service-alerts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/backups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Backup Information
         * @description Get backup information for the Managed Database.
         */
        get: operations["get-backup-information"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/connection-pools": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Connection Pools
         * @description List all connection pools within the Managed Database (PostgreSQL engine types only).
         */
        get: operations["list-connection-pools"];
        put?: never;
        /**
         * Create Connection Pool
         * @description Create a new connection pool within the Managed Database (PostgreSQL engine types only).
         */
        post: operations["create-connection-pool"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/connection-pools/{pool-name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [connection pool name](#operation/list-connection-pools). */
                "pool-name": string;
            };
            cookie?: never;
        };
        /**
         * Get Connection Pool
         * @description Get information about a Managed Database connection pool (PostgreSQL engine types only).
         */
        get: operations["get-connection-pool"];
        /**
         * Update Connection Pool
         * @description Update connection-pool information within a Managed Database (PostgreSQL engine types only).
         */
        put: operations["update-connection-pool"];
        post?: never;
        /**
         * Delete Connection Pool
         * @description Delete a connection pool within a Managed Database (PostgreSQL engine types only).
         */
        delete: operations["delete-connection-pool"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/dbs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Logical Databases
         * @description List all logical databases within the Managed Database (MySQL and PostgreSQL only).
         */
        get: operations["list-database-dbs"];
        put?: never;
        /**
         * Create Logical Database
         * @description Create a new logical database within the Managed Database (MySQL and PostgreSQL only).
         */
        post: operations["create-database-db"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/dbs/{db-name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [logical database name](#operation/list-database-dbs). */
                "db-name": string;
            };
            cookie?: never;
        };
        /**
         * Get Logical Database
         * @description Get information about a logical database within a Managed Database (MySQL and PostgreSQL only).
         */
        get: operations["get-database-db"];
        put?: never;
        post?: never;
        /**
         * Delete Logical Database
         * @description Delete a logical database within a Managed Database (MySQL and PostgreSQL only).
         */
        delete: operations["delete-database-db"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/fork": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Fork Managed Database
         * @description Fork a Managed Database to a new subscription from a backup.
         */
        post: operations["database-fork"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/maintenance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Maintenance Updates
         * @description List all available version upgrades within the Managed Database.
         */
        get: operations["list-maintenance-updates"];
        put?: never;
        /**
         * Start Maintenance Updates
         * @description Start maintenance updates for the Managed Database.
         */
        post: operations["start-maintenance-updates"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/migration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Migration Status
         * @description View the status of a migration attached to the Managed Database.
         */
        get: operations["view-migration-status"];
        put?: never;
        /**
         * Start Migration
         * @description Start a migration to the Managed Database.
         */
        post: operations["database-start-migration"];
        /**
         * Detach Migration
         * @description Detach a migration from the Managed Database.
         */
        delete: operations["database-detach-migration"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/promote-read-replica": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Promote Read-Only Replica
         * @description Promote a read-only replica node to its own primary Managed Database.
         */
        post: operations["database-promote-read-replica"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/read-replica": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Read-Only Replica
         * @description Create a read-only replica node for the Managed Database.
         */
        post: operations["database-add-read-replica"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Restore from Backup
         * @description Create a new Managed Database from a backup.
         */
        post: operations["database-restore-from-backup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Database Usage Information
         * @description Get disk, memory, and vCPU usage information for a Managed Database.
         */
        get: operations["get-database-usage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Database Users
         * @description List all database users within the Managed Database.
         */
        get: operations["list-database-users"];
        put?: never;
        /**
         * Create Database User
         * @description Create a new database user within the Managed Database. Supply optional attributes as desired.
         */
        post: operations["create-database-user"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/users/{username}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [database user](#operation/list-database-users). */
                username: string;
            };
            cookie?: never;
        };
        /**
         * Get Database User
         * @description Get information about a Managed Database user.
         */
        get: operations["get-database-user"];
        /**
         * Update Database User
         * @description Update database user information within a Managed Database.
         */
        put: operations["update-database-user"];
        post?: never;
        /**
         * Delete Database User
         * @description Delete a database user within a Managed Database.
         */
        delete: operations["delete-database-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/users/{username}/access-control": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [database user](#operation/list-database-users). */
                username: string;
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Set Database User Access Control
         * @description Configure access control settings for a Managed Database user (Redis engine type only).
         */
        put: operations["set-database-user-acl"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/{database-id}/version-upgrade": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Available Versions
         * @description List all available version upgrades within the Managed Database (PostgreSQL engine types only).
         */
        get: operations["list-available-versions"];
        put?: never;
        /**
         * Start Version Upgrade
         * @description Start a version upgrade for the Managed Database (PostgreSQL engine types only).
         */
        post: operations["start-version-upgrade"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/databases/plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Managed Database Plans
         * @description List all Managed Databases plans.
         */
        get: operations["list-database-plans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List DNS Domains
         * @description List all DNS Domains in your account.
         */
        get: operations["list-dns-domains"];
        put?: never;
        /**
         * Create DNS Domain
         * @description Create a DNS Domain for `domain`. If no `ip` address is supplied a domain with no records will be created.
         */
        post: operations["create-dns-domain"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/domains/{dns-domain}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        /**
         * Get DNS Domain
         * @description Get information for the DNS Domain.
         */
        get: operations["get-dns-domain"];
        /**
         * Update a DNS Domain
         * @description Update the DNS Domain.
         */
        put: operations["update-dns-domain"];
        post?: never;
        /**
         * Delete Domain
         * @description Delete the DNS Domain.
         */
        delete: operations["delete-dns-domain"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/domains/{dns-domain}/dnssec": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        /**
         * Get DNSSec Info
         * @description Get the DNSSEC information for the DNS Domain.
         */
        get: operations["get-dns-domain-dnssec"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/domains/{dns-domain}/records": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        /**
         * List Records
         * @description Get the DNS records for the Domain.
         */
        get: operations["list-dns-domain-records"];
        put?: never;
        /**
         * Create Record
         * @description Create a DNS record.
         */
        post: operations["create-dns-domain-record"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/domains/{dns-domain}/records/{record-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
                /** @description The [DNS Record id](#operation/list-dns-domain-records). */
                "record-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Record
         * @description Get information for a DNS Record.
         */
        get: operations["get-dns-domain-record"];
        put?: never;
        post?: never;
        /**
         * Delete Record
         * @description Delete the DNS record.
         */
        delete: operations["delete-dns-domain-record"];
        options?: never;
        head?: never;
        /**
         * Update Record
         * @description Update the information for a DNS record. All attributes are optional. If not set, the attributes will retain their original values.
         */
        patch: operations["update-dns-domain-record"];
        trace?: never;
    };
    "/domains/{dns-domain}/soa": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        /**
         * Get SOA information
         * @description Get SOA information for the DNS Domain.
         */
        get: operations["get-dns-domain-soa"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update SOA information
         * @description Update the SOA information for the DNS Domain. All attributes are optional. If not set, the attributes will retain their original values.
         */
        patch: operations["update-dns-domain-soa"];
        trace?: never;
    };
    "/firewalls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Firewall Groups
         * @description Get a list of all Firewall Groups.
         */
        get: operations["list-firewall-groups"];
        put?: never;
        /**
         * Create Firewall Group
         * @description Create a new Firewall Group.
         */
        post: operations["create-firewall-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/firewalls/{firewall-group-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Firewall Group
         * @description Get information for a Firewall Group.
         */
        get: operations["get-firewall-group"];
        /**
         * Update Firewall Group
         * @description Update information for a Firewall Group.
         */
        put: operations["update-firewall-group"];
        post?: never;
        /**
         * Delete Firewall Group
         * @description Delete a Firewall Group.
         */
        delete: operations["delete-firewall-group"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/firewalls/{firewall-group-id}/rules": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
            };
            cookie?: never;
        };
        /**
         * List Firewall Rules
         * @description Get the Firewall Rules for a Firewall Group.
         */
        get: operations["list-firewall-group-rules"];
        put?: never;
        /**
         * Create Firewall Rules
         * @description Create a Firewall Rule for a Firewall Group. The attributes `ip_type`, `protocol`, `subnet`, and `subnet_size` are required.
         */
        post: operations["post-firewalls-firewall-group-id-rules"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/firewalls/{firewall-group-id}/rules/{firewall-rule-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
                /** @description The [Firewall Rule id](#operation/list-firewall-group-rules). */
                "firewall-rule-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Firewall Rule
         * @description Get a Firewall Rule.
         */
        get: operations["get-firewall-group-rule"];
        put?: never;
        post?: never;
        /**
         * Delete Firewall Rule
         * @description Delete a Firewall Rule.
         */
        delete: operations["delete-firewall-group-rule"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/inference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Serverless Inference
         * @description List all Serverless Inference subscriptions in your account.
         */
        get: operations["list-inference"];
        put?: never;
        /**
         * Create Serverless Inference
         * @description Create a new Serverless Inference subscription.
         */
        post: operations["create-inference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/inference/{inference-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Inference ID](#operation/list-inference). */
                "inference-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Serverless Inference
         * @description Get information about a Serverless Inference subscription.
         */
        get: operations["get-inference"];
        put?: never;
        post?: never;
        /**
         * Delete Serverless Inference
         * @description Delete a Serverless Inference subscription.
         */
        delete: operations["delete-inference"];
        options?: never;
        head?: never;
        /**
         * Update Serverless Inference
         * @description Update information for a Serverless Inference subscription.
         */
        patch: operations["update-inference"];
        trace?: never;
    };
    "/inference/{inference-id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Serverless Inference Usage Information
         * @description Get usage information for a Serverless Inference subscription.
         */
        get: operations["get-inference-usage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Instances
         * @description List all VPS instances in your account.
         */
        get: operations["list-instances"];
        put?: never;
        /**
         * Create Instance
         * @description Create a new VPS Instance in a `region` with the desired `plan`. Choose one of the following to deploy the instance:
         *
         *     * `os_id`
         *     * `iso_id`
         *     * `snapshot_id`
         *     * `app_id`
         *     * `image_id`
         *
         *     Supply other attributes as desired.
         */
        post: operations["create-instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Instance
         * @description Get information about an Instance.
         */
        get: operations["get-instance"];
        put?: never;
        post?: never;
        /**
         * Delete Instance
         * @description Delete an Instance.
         */
        delete: operations["delete-instance"];
        options?: never;
        head?: never;
        /**
         * Update Instance
         * @description Update information for an Instance. All attributes are optional. If not set, the attributes will retain their original values.
         *
         *     **Note:** Changing `os_id`, `app_id` or `image_id` may take a few extra seconds to complete.
         */
        patch: operations["update-instance"];
        trace?: never;
    };
    "/instances/{instance-id}/backup-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Instance Backup Schedule
         * @description Get the backup schedule for an Instance.
         */
        get: operations["get-instance-backup-schedule"];
        put?: never;
        /**
         * Set Instance Backup Schedule
         * @description Set the backup schedule for an Instance in UTC. The `type` is required.
         */
        post: operations["create-instance-backup-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/bandwidth": {
        parameters: {
            query?: {
                /** @description The range of days to include, represented as the number of days relative to the current date. Default 30, Minimum 1 and Max 180. */
                date_range?: number;
            };
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * Instance Bandwidth
         * @description Get bandwidth information about an Instance.<br><br>The `bandwidth` object in a successful response contains objects representing a day in the month. The date is denoted by the nested object keys. Days begin and end in the UTC timezone. The bandwidth utilization data contained within the date object is refreshed periodically. We do not recommend using this endpoint to gather real-time metrics.
         */
        get: operations["get-instance-bandwidth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/halt": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Halt Instance
         * @description Halt an Instance.
         */
        post: operations["halt-instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/ipv4": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * List Instance IPv4 Information
         * @description List the IPv4 information for an Instance.
         */
        get: operations["get-instance-ipv4"];
        put?: never;
        /**
         * Create IPv4
         * @description Create an IPv4 address for an Instance.
         */
        post: operations["create-instance-ipv4"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/ipv4/{ipv4}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
                /** @description The IPv4 address. */
                ipv4: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete IPv4 Address
         * @description Delete an IPv4 address from an Instance.
         */
        delete: operations["delete-instance-ipv4"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/ipv4/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Instance Reverse IPv4
         * @description Create a reverse IPv4 entry for an Instance. The `ip` and `reverse` attributes are required.
         */
        post: operations["create-instance-reverse-ipv4"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/ipv4/reverse/default": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set Default Reverse DNS Entry
         * @description Set a reverse DNS entry for an IPv4 address
         */
        post: operations["post-instances-instance-id-ipv4-reverse-default"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/ipv6": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Instance IPv6 Information
         * @description Get the IPv6 information for an VPS Instance.
         */
        get: operations["get-instance-ipv6"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/ipv6/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * List Instance IPv6 Reverse
         * @description List the reverse IPv6 information for an Instance.
         */
        get: operations["list-instance-ipv6-reverse"];
        put?: never;
        /**
         * Create Instance Reverse IPv6
         * @description Create a reverse IPv6 entry for an Instance. The `ip` and `reverse` attributes are required. IP address must be in full, expanded format.
         */
        post: operations["create-instance-reverse-ipv6"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/ipv6/reverse/{ipv6}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
                /** @description The IPv6 address. */
                ipv6: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Instance Reverse IPv6
         * @description Delete the reverse IPv6 for an Instance.
         */
        delete: operations["delete-instance-reverse-ipv6"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/iso": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Instance ISO Status
         * @description Get the ISO status for an Instance.
         */
        get: operations["get-instance-iso-status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/iso/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach ISO to Instance
         * @description Attach an ISO to an Instance.
         */
        post: operations["attach-instance-iso"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/iso/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Detach ISO from instance
         * @description Detach the ISO from an Instance.
         */
        post: operations["detach-instance-iso"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/neighbors": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Instance neighbors
         * @description Get a list of other instances in the same location as this Instance.
         */
        get: operations["get-instance-neighbors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/private-networks": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * List instance Private Networks
         * @deprecated
         * @description **Deprecated**: use [List Instance VPCs](#operation/list-instance-vpcs) instead.<br><br>List the private networks for an Instance.
         */
        get: operations["list-instance-private-networks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/private-networks/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach Private Network to Instance
         * @deprecated
         * @description Attach Private Network to an Instance.<br><br>**Deprecated**: use [Attach VPC to Instance](#operation/attach-instance-vpc) instead.
         */
        post: operations["attach-instance-network"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/private-networks/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Detach Private Network from Instance.
         * @deprecated
         * @description Detach Private Network from an Instance.<br><br>**Deprecated**: use [Detach VPC from Instance](#operation/detach-instance-vpc) instead.
         */
        post: operations["detach-instance-network"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reboot Instance
         * @description Reboot an Instance.
         */
        post: operations["reboot-instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/reinstall": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reinstall Instance
         * @description Reinstall an Instance using an optional `hostname`.
         *
         *     **Note:** This action may take a few extra seconds to complete.
         */
        post: operations["reinstall-instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Restore Instance
         * @description Restore an Instance from either `backup_id` or `snapshot_id`.
         */
        post: operations["restore-instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/start": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start instance
         * @description Start an Instance.
         */
        post: operations["start-instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/upgrades": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Available Instance Upgrades
         * @description Get available upgrades for an Instance
         */
        get: operations["get-instance-upgrades"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/user-data": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Instance User Data
         * @description Get the user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) for an Instance.
         */
        get: operations["get-instance-userdata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * List Instance VPC 2.0 Networks
         * @description List the VPC 2.0 networks for an Instance.
         */
        get: operations["list-instance-vpc2"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/vpc2/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach VPC 2.0 Network to Instance
         * @description Attach a VPC 2.0 Network to an Instance.
         */
        post: operations["attach-instance-vpc2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/vpc2/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Detach VPC 2.0 Network from Instance
         * @description Detach a VPC 2.0 Network from an Instance.
         */
        post: operations["detach-instance-vpc2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/vpcs": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /**
         * List instance VPCs
         * @description List the VPCs for an Instance.
         */
        get: operations["list-instance-vpcs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/vpcs/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach VPC to Instance
         * @description Attach a VPC to an Instance.
         */
        post: operations["attach-instance-vpc"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/{instance-id}/vpcs/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Detach VPC from Instance
         * @description Detach a VPC from an Instance.
         */
        post: operations["detach-instance-vpc"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/halt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Halt Instances
         * @description Halt Instances.
         */
        post: operations["halt-instances"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reboot instances
         * @description Reboot Instances.
         */
        post: operations["reboot-instances"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instances/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start instances
         * @description Start Instances.
         */
        post: operations["start-instances"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/iso": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List ISOs
         * @description Get the ISOs in your account.
         */
        get: operations["list-isos"];
        put?: never;
        /**
         * Create ISO
         * @description Create a new ISO in your account from `url`.
         */
        post: operations["create-iso"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/iso-public": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Public ISOs
         * @description List all Vultr Public ISOs.
         */
        get: operations["list-public-isos"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/iso/{iso-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [ISO id](#operation/list-isos). */
                "iso-id": string;
            };
            cookie?: never;
        };
        /**
         * Get ISO
         * @description Get information for an ISO.
         */
        get: operations["iso-get"];
        put?: never;
        post?: never;
        /**
         * Delete ISO
         * @description Delete an ISO.
         */
        delete: operations["delete-iso"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all Kubernetes Clusters
         * @description List all Kubernetes clusters currently deployed
         */
        get: operations["list-kubernetes-clusters"];
        put?: never;
        /**
         * Create Kubernetes Cluster
         * @description Create Kubernetes Cluster
         */
        post: operations["create-kubernetes-cluster"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Kubernetes Cluster
         * @description Get Kubernetes Cluster
         */
        get: operations["get-kubernetes-clusters"];
        /**
         * Update Kubernetes Cluster
         * @description Update Kubernetes Cluster
         */
        put: operations["update-kubernetes-cluster"];
        post?: never;
        /**
         * Delete Kubernetes Cluster
         * @description Delete Kubernetes Cluster
         */
        delete: operations["delete-kubernetes-cluster"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/available-upgrades": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Kubernetes Available Upgrades
         * @description Get the available upgrades for the specified Kubernetes cluster.
         */
        get: operations["get-kubernetes-available-upgrades"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/config": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Kubernetes Cluster Kubeconfig
         * @description Get Kubernetes Cluster Kubeconfig
         */
        get: operations["get-kubernetes-clusters-config"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/delete-with-linked-resources": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                "vke-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete VKE Cluster and All Related Resources
         * @description Delete Kubernetes Cluster and all related resources.
         */
        delete: operations["delete-kubernetes-cluster-vke-id-delete-with-linked-resources"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/node-pools": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /**
         * List NodePools
         * @description List all available NodePools on a Kubernetes Cluster
         */
        get: operations["get-nodepools"];
        put?: never;
        /**
         * Create NodePool
         * @description Create NodePool for a Existing Kubernetes Cluster
         */
        post: operations["create-nodepools"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/node-pools/{nodepool-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [NodePool ID](#operation/get-nodepools). */
                "nodepool-id": string;
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /**
         * Get NodePool
         * @description Get Nodepool from a Kubernetes Cluster
         */
        get: operations["get-nodepool"];
        put?: never;
        post?: never;
        /**
         * Delete Nodepool
         * @description Delete a NodePool from a Kubernetes Cluster
         */
        delete: operations["delete-nodepool"];
        options?: never;
        head?: never;
        /**
         * Update Nodepool
         * @description Update a Nodepool on a Kubernetes Cluster
         */
        patch: operations["update-nodepool"];
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/node-pools/{nodepool-id}/nodes/{node-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "node-id": string;
                /** @description The [NodePool ID](#operation/get-nodepools). */
                "nodepool-id": string;
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete NodePool Instance
         * @description Delete a single nodepool instance from a given Nodepool
         */
        delete: operations["delete-nodepool-instance"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/node-pools/{nodepool-id}/nodes/{node-id}/recycle": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Node ID */
                "node-id": string;
                /** @description The [NodePool ID](#operation/get-nodepools). */
                "nodepool-id": string;
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Recycle a NodePool Instance
         * @description Recycle a specific NodePool Instance
         */
        post: operations["recycle-nodepool-instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/resources": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Kubernetes Resources
         * @description Get the block storage volumes and load balancers deployed by the specified Kubernetes cluster.
         */
        get: operations["get-kubernetes-resources"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/clusters/{vke-id}/upgrades": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start Kubernetes Cluster Upgrade
         * @description Start a Kubernetes cluster upgrade.
         */
        post: operations["start-kubernetes-cluster-upgrade"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Kubernetes Versions
         * @description Get a list of supported Kubernetes versions
         */
        get: operations["get-kubernetes-versions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/load-balancers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Load Balancers
         * @description List the Load Balancers in your account.
         */
        get: operations["list-load-balancers"];
        put?: never;
        /**
         * Create Load Balancer
         * @description Create a new Load Balancer in a particular `region`.
         */
        post: operations["create-load-balancer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/load-balancers/{load-balancer-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Load Balancer
         * @description Get information for a Load Balancer.
         */
        get: operations["get-load-balancer"];
        put?: never;
        post?: never;
        /**
         * Delete Load Balancer
         * @description Delete a Load Balancer.
         */
        delete: operations["delete-load-balancer"];
        options?: never;
        head?: never;
        /**
         * Update Load Balancer
         * @description Update information for a Load Balancer. All attributes are optional. If not set, the attributes will retain their original values.
         */
        patch: operations["update-load-balancer"];
        trace?: never;
    };
    "/load-balancers/{load-balancer-id}/auto_ssl": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Remove Load Balancer Auto SSL
         * @description Remove a Load Balancer Auto SSL. This will not remove an ssl certificate from the load balancer.
         */
        delete: operations["delete-load-balancer-auto-ssl"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/load-balancers/{load-balancer-id}/forwarding-rules": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        /**
         * List Forwarding Rules
         * @description List the fowarding rules for a Load Balancer.
         */
        get: operations["list-load-balancer-forwarding-rules"];
        put?: never;
        /**
         * Create Forwarding Rule
         * @description Create a new forwarding rule for a Load Balancer.
         */
        post: operations["create-load-balancer-forwarding-rules"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/load-balancers/{load-balancer-id}/forwarding-rules/{forwarding-rule-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Forwarding Rule id](#operation/list-load-balancer-forwarding-rules). */
                "forwarding-rule-id": string;
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Forwarding Rule
         * @description Get information for a Forwarding Rule on a Load Balancer.
         */
        get: operations["get-load-balancer-forwarding-rule"];
        put?: never;
        post?: never;
        /**
         * Delete Forwarding Rule
         * @description Delete a Forwarding Rule on a Load Balancer.
         */
        delete: operations["delete-load-balancer-forwarding-rule"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/load-balancers/{load-balancer-id}/ssl": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Load Balancer SSL
         * @description Delete a Load Balancer SSL.
         */
        delete: operations["delete-load-balancer-ssl"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/load-balancers/{loadbalancer-id}/firewall-rules": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                "loadbalancer-id": string;
            };
            cookie?: never;
        };
        /**
         * List Firewall Rules
         * @description List the firewall rules for a Load Balancer.
         */
        get: operations["list-loadbalancer-firewall-rules"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/load-balancers/{loadbalancer-id}/firewall-rules/{firewall-rule-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                "firewall-rule-id": string;
                "loadbalancer-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Firewall Rule
         * @description Get a firewall rule for a Load Balancer.
         */
        get: operations["get-loadbalancer-firewall-rule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/marketplace/apps/{image-id}/variables": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The application's [Image ID](#operation/list-applications). */
                "image-id": string;
            };
            cookie?: never;
        };
        /**
         * List Marketplace App Variables
         * @description List all user-supplied variables for a Marketplace App.
         */
        get: operations["list-marketplace-app-variables"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/object-storage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Object Storages
         * @description Get a list of all Object Storage in your account.
         */
        get: operations["list-object-storages"];
        put?: never;
        /**
         * Create Object Storage
         * @description Create new Object Storage. The `cluster_id` attribute is required.
         */
        post: operations["create-object-storage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/object-storage/{object-storage-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Object Storage id](#operation/list-object-storages). */
                "object-storage-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Object Storage
         * @description Get information about an Object Storage.
         */
        get: operations["get-object-storage"];
        /**
         * Update Object Storage
         * @description Update the label for an Object Storage.
         */
        put: operations["update-object-storage"];
        post?: never;
        /**
         * Delete Object Storage
         * @description Delete an Object Storage.
         */
        delete: operations["delete-object-storage"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/object-storage/{object-storage-id}/regenerate-keys": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Object Storage id](#operation/list-object-storages). */
                "object-storage-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Regenerate Object Storage Keys
         * @description Regenerate the keys for an Object Storage.
         */
        post: operations["regenerate-object-storage-keys"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/object-storage/clusters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get All Clusters
         * @description Get a list of all Object Storage Clusters.
         */
        get: operations["list-object-storage-clusters"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/os": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List OS
         * @description List the OS images available for installation at Vultr.
         */
        get: operations["list-os"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Plans
         * @description Get a list of all VPS plans at Vultr.
         *
         *     The response is an array of JSON `plan` objects, with unique `id` with sub-fields in the general format of:
         *
         *       <type>-<number of cores>-<memory size>-<optional modifier>
         *
         *     For example: `vc2-24c-96gb-sc1`
         *
         *     More about the sub-fields:
         *
         *     * `<type>`: The Vultr type code. For example, `vc2`, `vhf`, `vdc`, etc.
         *     * `<number of cores>`: The number of cores, such as `4c` for "4 cores", `8c` for "8 cores", etc.
         *     * `<memory size>`: Size in GB, such as `32gb`.
         *     * `<optional modifier>`: Some plans include a modifier for internal identification purposes, such as CPU type or location surcharges.
         *
         *     > Note: This information about plan id format is for general education. Vultr may change the sub-field format or values at any time. You should not attempt to parse the plan ID sub-fields in your code for any specific purpose.
         *
         */
        get: operations["list-plans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/plans-metal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Bare Metal Plans
         * @description Get a list of all Bare Metal plans at Vultr.
         *
         *     The response is an array of JSON `plan` objects, with unique `id` with sub-fields in the general format of:
         *
         *       <type>-<number of cores>-<memory size>-<optional modifier>
         *
         *     For example: `vc2-24c-96gb-sc1`
         *
         *     More about the sub-fields:
         *
         *     * `<type>`: The Vultr type code. For example, `vc2`, `vhf`, `vdc`, etc.
         *     * `<number of cores>`: The number of cores, such as `4c` for "4 cores", `8c` for "8 cores", etc.
         *     * `<memory size>`: Size in GB, such as `32gb`.
         *     * `<optional modifier>`: Some plans include a modifier for internal identification purposes, such as CPU type or location surcharges.
         *
         *     > Note: This information about plan id format is for general education. Vultr may change the sub-field format or values at any time. You should not attempt to parse the plan ID sub-fields in your code for any specific purpose.
         *
         */
        get: operations["list-metal-plans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/private-networks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Private Networks
         * @deprecated
         * @description Get a list of all Private Networks in your account.<br><br>**Deprecated**: Use [List VPCs](#operation/list-vpcs) instead.
         */
        get: operations["list-networks"];
        put?: never;
        /**
         * Create a Private Network
         * @deprecated
         * @description Create a new Private Network in a `region`.
         *
         *     **Deprecated**: Use [Create VPC](#operation/create-vpc) instead.
         *
         *         Private networks should use [RFC1918 private address space](https://tools.ietf.org/html/rfc1918):
         *
         *         10.0.0.0    - 10.255.255.255  (10/8 prefix)
         *         172.16.0.0  - 172.31.255.255  (172.16/12 prefix)
         *         192.168.0.0 - 192.168.255.255 (192.168/16 prefix)
         *
         */
        post: operations["create-network"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/private-networks/{network-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Network id](#operation/list-networks). */
                "network-id": string;
            };
            cookie?: never;
        };
        /**
         * Get a private network
         * @deprecated
         * @description Get information about a Private Network.<br><br>**Deprecated**: Use [Get VPC](#operation/get-vpc) instead.
         */
        get: operations["get-network"];
        /**
         * Update a Private Network
         * @deprecated
         * @description Update information for a Private Network.<br><br>**Deprecated**: Use [Update VPC](#operation/update-vpc) instead.
         */
        put: operations["update-network"];
        post?: never;
        /**
         * Delete a private network
         * @deprecated
         * @description Delete a Private Network.<br><br>**Deprecated**: Use [Delete VPC](#operation/delete-vpc) instead.
         */
        delete: operations["delete-network"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Regions
         * @description List all Regions at Vultr.
         */
        get: operations["list-regions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/regions/{region-id}/availability": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Region id](#operation/list-regions). */
                "region-id": string;
            };
            cookie?: never;
        };
        /**
         * List available plans in region
         * @description Get a list of the available plans in Region `region-id`. Not all plans are available in all regions.
         */
        get: operations["list-available-plans-region"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Container Registries
         * @description List All Container Registry Subscriptions for this account
         */
        get: operations["list-registries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Container Registry
         * @description Create a new Container Registry Subscription
         */
        post: operations["create-registry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registry/{registry-id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read Container Registry
         * @description Get a single Container Registry Subscription
         */
        get: operations["read-registry"];
        /**
         * Update Container Registry
         * @description Update a Container Registry Subscription
         */
        put: operations["update-registry"];
        post?: never;
        /**
         * Delete Container Registry
         * @description Deletes a Container Registry Subscription
         */
        delete: operations["delete-registry"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registry/{registry-id}/docker-credentials?expiry_seconds=0&read_write=false": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        /**
         * Create Docker Credentials
         * @description Create a fresh set of Docker Credentials for this Container Registry Subscription
         */
        options: operations["create-registry-docker-credentials"];
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registry/{registry-id}/docker-credentials/kubernetes?expiry_seconds=0&read_write=false&base64_encode=false": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        /**
         * Create Docker Credentials for Kubernetes
         * @description Create a fresh set of Docker Credentials for this Container Registry Subscription and return them in a Kubernetes friendly YAML format
         */
        options: operations["create-registry-kubernetes-docker-credentials"];
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registry/{registry-id}/repositories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Repositories
         * @description List All Repositories in a Container Registry Subscription
         */
        get: operations["list-registry-repositories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registry/{registry-id}/repository/{repository-image}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read Repository
         * @description Get a single Repository in a Container Registry Subscription
         */
        get: operations["read-registry-repository"];
        /**
         * Update Repository
         * @description Update a Repository in a Container Registry Subscription
         */
        put: operations["update-repository"];
        post?: never;
        /**
         * Delete Repository
         * @description Deletes a Repository from a Container Registry Subscription
         */
        delete: operations["delete-repository"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registry/plan/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Registry Plans
         * @description List All Plans to help choose which one is the best fit for your Container Registry
         */
        get: operations["list-registry-plans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registry/region/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Registry Regions
         * @description List All Regions where a Container Registry can be deployed
         */
        get: operations["list-registry-regions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reserved-ips": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Reserved IPs
         * @description List all Reserved IPs in your account.
         */
        get: operations["list-reserved-ips"];
        put?: never;
        /**
         * Create Reserved IP
         * @description Create a new Reserved IP. The `region` and `ip_type` attributes are required.
         */
        post: operations["create-reserved-ip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reserved-ips/{reserved-ip}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Reserved IP id](#operation/list-reserved-ips). */
                "reserved-ip": string;
            };
            cookie?: never;
        };
        /**
         * Get Reserved IP
         * @description Get information about a Reserved IP.
         */
        get: operations["get-reserved-ip"];
        put?: never;
        post?: never;
        /**
         * Delete Reserved IP
         * @description Delete a Reserved IP.
         */
        delete: operations["delete-reserved-ip"];
        options?: never;
        head?: never;
        /**
         * Update Reserved IP
         * @description Update information on a Reserved IP.
         */
        patch: operations["patch-reserved-ips-reserved-ip"];
        trace?: never;
    };
    "/reserved-ips/{reserved-ip}/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Reserved IP id](#operation/list-reserved-ips) */
                "reserved-ip": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach Reserved IP
         * @description Attach a Reserved IP to an compute instance or a baremetal instance - `instance_id`.
         */
        post: operations["attach-reserved-ip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reserved-ips/{reserved-ip}/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Reserved IP id](#operation/list-reserved-ips) */
                "reserved-ip": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Detach Reserved IP
         * @description Detach a Reserved IP.
         */
        post: operations["detach-reserved-ip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reserved-ips/convert": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Convert Instance IP to Reserved IP
         * @description Convert the `ip_address` of an existing [instance](#operation/list-instances) into a Reserved IP.
         */
        post: operations["convert-reserved-ip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/snapshots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Snapshots
         * @description Get information about all Snapshots in your account.
         */
        get: operations["list-snapshots"];
        put?: never;
        /**
         * Create Snapshot
         * @description Create a new Snapshot for `instance_id`.
         */
        post: operations["create-snapshot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/snapshots/{snapshot-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Snapshot id](#operation/list-snapshots). */
                "snapshot-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Snapshot
         * @description Get information about a Snapshot.
         */
        get: operations["get-snapshot"];
        /**
         * Update Snapshot
         * @description Update the description for a Snapshot.
         */
        put: operations["put-snapshots-snapshot-id"];
        post?: never;
        /**
         * Delete Snapshot
         * @description Delete a Snapshot.
         */
        delete: operations["delete-snapshot"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/snapshots/create-from-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Snapshot from URL
         * @description Create a new Snapshot from a RAW image located at `url`.
         */
        post: operations["create-snapshot-create-from-url"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ssh-keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List SSH Keys
         * @description List all SSH Keys in your account.
         */
        get: operations["list-ssh-keys"];
        put?: never;
        /**
         * Create SSH key
         * @description Create a new SSH Key for use with future instances. This does not update any running instances.
         */
        post: operations["create-ssh-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ssh-keys/{ssh-key-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [SSH Key id](#operation/list-ssh-keys). */
                "ssh-key-id": string;
            };
            cookie?: never;
        };
        /**
         * Get SSH Key
         * @description Get information about an SSH Key.
         */
        get: operations["get-ssh-key"];
        put?: never;
        post?: never;
        /**
         * Delete SSH Key
         * @description Delete an SSH Key.
         */
        delete: operations["delete-ssh-key"];
        options?: never;
        head?: never;
        /**
         * Update SSH Key
         * @description Update an SSH Key. The attributes `name` and `ssh_key` are optional. If not set, the attributes will retain their original values. New deployments will use the updated key, but this action does not update previously deployed instances.
         */
        patch: operations["update-ssh-key"];
        trace?: never;
    };
    "/startup-scripts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Startup Scripts
         * @description Get a list of all Startup Scripts.
         */
        get: operations["list-startup-scripts"];
        put?: never;
        /**
         * Create Startup Script
         * @description Create a new Startup Script. The `name` and `script` attributes are required, and scripts are base-64 encoded.
         */
        post: operations["create-startup-script"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/startup-scripts/{startup-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Startup Script id](#operation/list-startup-scripts). */
                "startup-id": string;
            };
            cookie?: never;
        };
        /**
         * Get Startup Script
         * @description Get information for a Startup Script.
         */
        get: operations["get-startup-script"];
        put?: never;
        post?: never;
        /**
         * Delete Startup Script
         * @description Delete a Startup Script.
         */
        delete: operations["delete-startup-script"];
        options?: never;
        head?: never;
        /**
         * Update Startup Script
         * @description Update a Startup Script. The attributes `name` and `script` are optional. If not set, the attributes will retain their original values. The `script` attribute is base-64 encoded. New deployments will use the updated script, but this action does not update previously deployed instances.
         */
        patch: operations["update-startup-script"];
        trace?: never;
    };
    "/subaccounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Sub-Accounts
         * @description Get information about all sub-accounts for your account.
         */
        get: operations["list-subaccounts"];
        put?: never;
        /**
         * Create Sub-Account
         * @description Create a new subaccount.
         */
        post: operations["create-subaccount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Users
         * @description Get a list of all Users in your account.
         */
        get: operations["list-users"];
        put?: never;
        /**
         * Create User
         * @description Create a new User. The `email`, `name`, and `password` attributes are required.
         */
        post: operations["create-user"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [User id](#operation/list-users). */
                "user-id": string;
            };
            cookie?: never;
        };
        /**
         * Get User
         * @description Get information about a User.
         */
        get: operations["get-user"];
        put?: never;
        post?: never;
        /**
         * Delete User
         * @description Delete a User.
         */
        delete: operations["delete-user"];
        options?: never;
        head?: never;
        /**
         * Update User
         * @description Update information for a User. All attributes are optional. If not set, the attributes will retain their original values.
         */
        patch: operations["update-user"];
        trace?: never;
    };
    "/vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List VPC 2.0 networks
         * @description Get a list of all VPC 2.0 networks in your account.
         */
        get: operations["list-vpc2"];
        put?: never;
        /**
         * Create a VPC 2.0 network
         * @description Create a new VPC 2.0 network in a `region`. VPCs should use [RFC1918 private address space](https://tools.ietf.org/html/rfc1918):
         *
         *         10.0.0.0    - 10.255.255.255  (10/8 prefix)
         *         172.16.0.0  - 172.31.255.255  (172.16/12 prefix)
         *         192.168.0.0 - 192.168.255.255 (192.168/16 prefix)
         *
         */
        post: operations["create-vpc2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vpc2/{vpc-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        /**
         * Get a VPC 2.0 network
         * @description Get information about a VPC 2.0 network.
         */
        get: operations["get-vpc2"];
        /**
         * Update a VPC 2.0 network
         * @description Update information for a VPC 2.0 network.
         */
        put: operations["update-vpc2"];
        post?: never;
        /**
         * Delete a VPC 2.0 network
         * @description Delete a VPC 2.0 network.
         */
        delete: operations["delete-vpc2"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vpc2/{vpc-id}/nodes": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        /**
         * Get a list of nodes attached to a VPC 2.0 network
         * @description Get a list of nodes attached to a VPC 2.0 network.
         */
        get: operations["list-vpc2-nodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vpc2/{vpc-id}/nodes/attach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach nodes to a VPC 2.0 network
         * @description Attach nodes to a VPC 2.0 network.
         */
        post: operations["attach-vpc2-nodes"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vpc2/{vpc-id}/nodes/detach": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove nodes from a VPC 2.0 network
         * @description Remove nodes from a VPC 2.0 network.
         */
        post: operations["detach-vpc2-nodes"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vpcs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List VPCs
         * @description Get a list of all VPCs in your account.
         */
        get: operations["list-vpcs"];
        put?: never;
        /**
         * Create a VPC
         * @description Create a new VPC in a `region`. VPCs should use [RFC1918 private address space](https://tools.ietf.org/html/rfc1918):
         *
         *         10.0.0.0    - 10.255.255.255  (10/8 prefix)
         *         172.16.0.0  - 172.31.255.255  (172.16/12 prefix)
         *         192.168.0.0 - 192.168.255.255 (192.168/16 prefix)
         *
         */
        post: operations["create-vpc"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vpcs/{vpc-id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        /**
         * Get a VPC
         * @description Get information about a VPC.
         */
        get: operations["get-vpc"];
        /**
         * Update a VPC
         * @description Update information for a VPC.
         */
        put: operations["update-vpc"];
        post?: never;
        /**
         * Delete a VPC
         * @description Delete a VPC.
         */
        delete: operations["delete-vpc"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * account
         * @description Account information.
         */
        account: {
            /** @description An array of permission granted.
             *     * manage\_users
             *     * subscriptions_view
             *     * subscriptions
             *     * billing
             *     * support
             *     * provisioning
             *     * dns
             *     * abuse
             *     * upgrade
             *     * firewall
             *     * alerts
             *     * objstore
             *     * loadbalancer */
            acls?: string[];
            /** @description Your current account balance. */
            balance?: number;
            /** @description Your email address. */
            email?: string;
            /** @description The amount of your last payment. */
            last_payment_amount?: number;
            /** @description Date of your last payment. */
            last_payment_date?: string;
            /** @description Your user name. */
            name?: string;
            /** @description Unbilled charges for this month. */
            pending_charges?: number;
        };
        /**
         * bandwidth
         * @description Account Bandwidth information.
         */
        "account-bandwidth": {
            /** @description Current month projected bandwidth data. */
            currentMonthProjected?: {
                /** @description Free bandwidth credit */
                freeBandwidthCredits?: number;
                /** @description Gigabytes In */
                gb_in?: number;
                /** @description Gigabytes Out */
                gb_out?: number;
                /** @description Credits for instance bandwidth */
                instanceBandwidthCredits?: number;
                /** @description Amount in overages */
                overage?: number;
                /** @description Total amount due of overages */
                overage_cost?: number;
                /** @description Unit cost of overage */
                overage_unit_cost?: number;
                /** @description Bandwidth credit purchased */
                purchasedBandwidthCredits?: number;
                /** @description Timestamp end date */
                timestampEnd?: string;
                /** @description Timestamp start date */
                timestampStart?: string;
                /** @description Amount of Instances */
                totalInstanceCount?: number;
                /** @description Total Hours in Instances */
                totalInstanceHours?: number;
            };
            /** @description Current month to date of bandwidth data */
            currentMonthToDate?: {
                /** @description Free bandwidth credit */
                freeBandwidthCredits?: number;
                /** @description Gigabytes In */
                gb_in?: number;
                /** @description Gigabytes Out */
                gb_out?: number;
                /** @description Credits for instance bandwidth */
                instanceBandwidthCredits?: number;
                /** @description Amount in overages */
                overage?: number;
                /** @description Total amount due of overages */
                overage_cost?: number;
                /** @description Unit cost of overage */
                overage_unit_cost?: number;
                /** @description Bandwidth credit purchased */
                purchasedBandwidthCredits?: number;
                /** @description Timestamp end date */
                timestampEnd?: string;
                /** @description Timestamp start date */
                timestampStart?: string;
                /** @description Amount of Instances */
                totalInstanceCount?: number;
                /** @description Total Hours in Instances */
                totalInstanceHours?: number;
            };
            /** @description Previous month bandwidth */
            previousMonth?: {
                /** @description Free bandwidth credit */
                freeBandwidthCredits?: number;
                /** @description Gigabytes In */
                gb_in?: number;
                /** @description Gigabytes Out */
                gb_out?: number;
                /** @description Credits for instance bandwidth */
                instanceBandwidthCredits?: number;
                /** @description Amount in overages */
                overage?: number;
                /** @description Total amount due of overages */
                overage_cost?: number;
                /** @description Unit cost of overage */
                overage_unit_cost?: number;
                /** @description Bandwidth credit purchased */
                purchasedBandwidthCredits?: number;
                /** @description Timestamp end date */
                timestampEnd?: string;
                /** @description Timestamp start date */
                timestampStart?: string;
                /** @description Amount of Instances */
                totalInstanceCount?: number;
                /** @description Total Hours in Instances */
                totalInstanceHours?: number;
            };
        };
        /**
         * app-variable
         * @description Marketplace app variable information.
         */
        "app-variable": {
            /** @description The detailed description for the marketplace app variable. */
            description?: string;
            /** @description The name of the marketplace app variable. */
            name?: string;
            /** @description Indicates if this variable is required to deploy this marketplace application. */
            required?: boolean;
        };
        /**
         * application
         * @description Application information.
         */
        application: {
            /** @description A long description of the application. */
            deploy_name?: string;
            /** @description A unique ID for the application. */
            id?: number;
            /** @description A unique ID for marketplace applications. */
            image_id?: string;
            /** @description The application name. */
            name?: string;
            /** @description The short application name. */
            short_name?: string;
            /** @description The type of application.
             *
             *     * one-click - use app_id to deploy one-click applications.
             *     * marketplace - use image_id to deploy marketplace applications. */
            type?: string;
            /** @description The application vendor name. */
            vendor?: string;
        };
        /**
         * backup
         * @description Backup information.
         */
        backup: {
            /** @description The date the backup was created. */
            date_created?: string;
            /** @description The user-supplied description of this backup. */
            description?: string;
            /** @description A unique ID for the backup. */
            id?: string;
            /** @description The size of the backup in Bytes. */
            size?: number;
            /** @description The Backup status.
             *
             *     * complete
             *     * pending */
            status?: string;
        };
        /**
         * backup-schedule
         * @description Backup schedule information.
         */
        "backup-schedule": {
            /** @description Day of month to run. Use values between 1 and 28. */
            dom?: number;
            /** @description Day of week to run.
             *
             *     |   | Value | Description |
             *     | - | ------ | ------------- |
             *     |   | 1 | Sunday |
             *     |   | 2 | Monday |
             *     |   | 3 | Tuesday |
             *     |   | 4 | Wednesday |
             *     |   | 5 | Thursday |
             *     |   | 6 | Friday |
             *     |   | 7 | Saturday | */
            dow?: number;
            /** @description Indicates if backup is enabled:
             *
             *     * true
             *     * false */
            enabled?: boolean;
            /** @description Scheduled hour of day in UTC. */
            hour?: number;
            /** @description Time of next backup run in UTC. */
            next_scheduled_time_utc?: string;
            /** @description Type of backup schedule:
             *
             *     |   | Value | Description |
             *     | - | ------ | ------------- |
             *     |   | daily | Back up once per day at `hour`. |
             *     |   | weekly | Back up once per week on `dow` at `hour`. |
             *     |   | monthly | Back up each month at `dom` at `hour`. |
             *     |   | daily\_alt\_even | Back up on even dates at `hour`. |
             *     |   | daily\_alt\_odd | Back up on odd dates at `hour`. | */
            type?: string;
        };
        /**
         * bandwidth
         * @description Bandwidth information.
         */
        bandwidth: {
            /** @description Total bytes received by this instance on the date (UTC) denoted by the object key. */
            incoming_bytes?: number;
            /** @description Total bytes sent by this instance on the date (UTC) denoted by the object key. */
            outgoing_bytes?: number;
        };
        /**
         * baremetal
         * @description Bare Metal information.
         */
        baremetal: {
            /** @description The [Application id](#operation/list-applications). */
            app_id?: number;
            /** @description Number of CPUs. */
            cpu_count?: number;
            /** @description The date this instance was created. */
            date_created?: string;
            /** @description The default password assigned at deployment. Only available for ten minutes after deployment. */
            default_password?: string;
            /** @description Text description of the instances' disk configuration. */
            disk?: string;
            /** @description The IPv4 gateway address. */
            gateway_v4?: string;
            /** @description A unique ID for the Bare Metal instance. */
            id?: string;
            /** @description The [Application image_id](#operation/list-applications). */
            image_id?: string;
            /** @description The user-supplied label for this instance. */
            label?: string;
            /** @description The MAC address for a Bare Metal server. */
            mac_address?: number;
            /** @description The main IPv4 address. */
            main_ip?: string;
            /** @description The IPv4 netmask in dot-decimal notation. */
            netmask_v4?: string;
            /** @description The [Operating System name](#operation/list-os). */
            os?: string;
            /** @description The [Operating System id](#operation/list-os). */
            os_id?: number;
            /** @description The [Bare Metal Plan id](#operation/list-metal-plans) used by this instance. */
            plan?: string;
            /** @description Text description of the instances' RAM. */
            ram?: string;
            /** @description The [Region id](#operation/list-regions) where the instance is located. */
            region?: string;
            /** @description The current status.
             *
             *     * active
             *     * pending
             *     * suspended */
            status?: string;
            /**
             * @deprecated
             * @description Use `tags` instead. The user-supplied tag for this instance.
             */
            tag?: string;
            /** @description Tags to apply to the instance. */
            tags?: string[];
            /** @description The user scheme.
             *
             *     * root
             *     * limited */
            user_scheme?: string;
            /** @description The main IPv6 network address. */
            v6_main_ip?: string;
            /** @description The IPv6 network size in bits. */
            v6_network?: string;
            /** @description The IPv6 subnet. */
            v6_network_size?: number;
        };
        /**
         * baremetal-ipv4
         * @description Bare Metal IPv4 information.
         */
        "baremetal-ipv4": {
            /** @description The gateway IP address. */
            gateway?: string;
            /** @description The IPv4 address. */
            ip?: string;
            /** @description The MAC address associated with this IP address. */
            mac_address?: string;
            /** @description The IPv4 netmask in dot-decimal notation. */
            netmask?: string;
            /** @description The reverse DNS information for this IP address. */
            reverse?: string;
            /** @description The type of IP address.
             *
             *     * main_ip */
            type?: string;
        };
        /**
         * baremetal-ipv6
         * @description Bare Metal IPv6 information.
         */
        "baremetal-ipv6": {
            /** @description A unique ID for the IPv6 address. */
            ip?: string;
            /** @description The IPv6 subnet. */
            network?: string;
            /** @description The IPv6 network size in bits. */
            network_size?: number;
            /** @description The type of IP address.
             *
             *     * main_ip */
            type?: string;
        };
        /**
         * billing
         * @description Invoice
         */
        billing: {
            /** @description Amount for the billing history item in dollars */
            amount?: number;
            /** @description The accounts balance in dollars */
            balance?: number;
            /** @description Date billing history item was generated */
            date?: string;
            /** @description Description of billing history item */
            description?: string;
            /** @description ID of the billing history item */
            id?: number;
            /** @description Type of billing history item */
            type?: string;
        };
        /**
         * blockstorage
         * @description Block Storage information.
         */
        blockstorage: {
            /** @description The [Instance id](#operation/list-instances) with this Block Storage attached. */
            attached_to_instance?: string;
            /** @description The monthly cost of this Block Storage. */
            cost?: number;
            /** @description The date this Block Storage was created. */
            date_created?: string;
            /** @description A unique ID for the Block Storage. */
            id?: string;
            /** @description The user-supplied label. */
            label?: string;
            /** @description An ID associated with the instance, when mounted the ID can be found in /dev/disk/by-id prefixed with virtio. */
            mount_id?: string;
            /** @description The [Region id](#operation/list-regions) where the Block Storage is located. */
            region?: string;
            /** @description Size of the Block Storage in GB. */
            size_gb?: number;
            /** @description The current status of this Block Storage.
             *
             *     * active */
            status?: string;
        };
        /**
         * clusters
         * @description Object Storage Cluster information.
         */
        clusters: {
            /** @description The Cluster is eligible for Object Storage deployment.
             *
             *     * yes
             *     * no */
            deploy?: string;
            /** @description The cluster host name. */
            hostname?: string;
            /** @description A unique ID for the Object Storage cluster. */
            id?: number;
            /** @description The [Region id](#operation/list-regions) where the cluster is located. */
            region?: string;
        };
        /**
         * connection_pool
         * @description Managed Database connection pool information.
         */
        "connection-pool": {
            /** @description The logical database associated with the connection pool. */
            database?: string;
            /** @description The mode for the connection pool.
             *     * `session`
             *     * `transaction`
             *     * `statement` */
            mode?: string;
            /** @description The name of the connection pool. */
            name?: string;
            /** @description The size of the connection pool. */
            size?: number;
            /** @description The database user associated with the connection pool. */
            username?: string;
        };
        /**
         * database
         * @description Managed Database information.
         */
        database: {
            /** @description The configured time zone of the Managed Database in TZ database format. */
            cluster_time_zone?: string;
            /** @description The database engine type (MySQL, PostgreSQL, Redis). */
            database_engine?: string;
            /** @description The version number of the database engine in use. */
            database_engine_version?: string;
            /** @description The date this database was created. */
            date_created?: string;
            /** @description The default database name. */
            dbname?: string;
            /** @description The public hostname for database connections, or private hostname if this managed database is attached to a VPC network. */
            host?: string;
            /** @description A unique ID for the Managed Database. */
            id?: string;
            /** @description The user-supplied label for this managed database. */
            label?: string;
            /** @description The date for the latest backup stored on the Managed Database. */
            latest_backup?: string;
            /** @description The chosen date of week for routine maintenance updates. */
            maintenance_dow?: string;
            /** @description The chosen hour for routine maintenance updates. */
            maintenance_time?: string;
            /** @description The number of seconds to denote a slow query when logging is enabled for MySQL engine types only. */
            mysql_long_query_time?: number;
            /** @description Configuration value for requiring table primary keys for MySQL engine types only. */
            mysql_require_primary_key?: boolean;
            /** @description Configuration value for slow query logging on the Managed Database for MySQL engine types only. */
            mysql_slow_query_log?: boolean;
            /** @description A list names of enabled SQL Modes for MySQL engine types only. */
            mysql_sql_modes?: string[];
            /** @description The default user's secure password generated on creation. */
            password?: string;
            /** @description A list of objects containing names and versions (when applicable) of available extensions for PostgreSQL engine types only. */
            pg_available_extensions?: Record<string, never>[];
            /** @description The name of the Managed Database plan. */
            plan?: string;
            /** @description The size of the disk in GB (excluded for Redis engine types). */
            plan_disk?: number;
            /** @description The amount of RAM in MB. */
            plan_ram?: number;
            /** @description Number of replica nodes. */
            plan_replicas?: number;
            /** @description Number of vCPUs. */
            plan_vcpus?: number;
            /** @description The assigned port for connecting to the Managed Database. */
            port?: string;
            /** @description The public hostname for database connections. Only visible when the managed database is attached to a VPC network. */
            public_host?: string;
            /** @description A list of database objects containing details for all attached read-only replica nodes. */
            read_replicas?: Record<string, never>[];
            /** @description The current configured data eviction policy for Redis engine types only. */
            redis_eviction_policy?: string;
            /** @description The [Region id](#operation/list-regions) where the Managed Database is located. */
            region?: string;
            /** @description The current status.
             *
             *     * Rebuilding
             *     * Rebalancing
             *     * Running */
            status?: string;
            /** @description The user-supplied tag for this managed database. */
            tag?: string;
            /** @description A list of trusted IP addresses for connecting to this Managed Database (in CIDR notation). */
            trusted_ips?: string[];
            /** @description The default user configured on creation. */
            user?: string;
            /** @description The ID of the [VPC Network](#operation/get-vpc) attached to the Managed Database. */
            vpc_id?: string;
        };
        /**
         * connection
         * @description Managed Database connection information.
         */
        "database-connections": {
            /** @description The number of available database connections. */
            available?: number;
            /** @description The maximum number of database connections. */
            max?: number;
            /** @description The number of used database connections. */
            used?: number;
        };
        /**
         * db
         * @description Managed Database logical database information.
         */
        "database-db": {
            /** @description The name of the logical database. */
            name?: string;
        };
        /**
         * backup
         * @description Managed Database latest backup information.
         */
        "database-latest-backup": {
            /** @description The date of the most recently available backup. */
            date?: string;
            /** @description The time of the most recently available backup. */
            time?: string;
        };
        /**
         * backup
         * @description Managed Database oldest backup information.
         */
        "database-oldest-backup": {
            /** @description The date of the oldest available backup. */
            date?: string;
            /** @description The time of the oldest available backup. */
            time?: string;
        };
        /**
         * usage
         * @description Managed Database usage information.
         */
        "database-usage": {
            /** @description Metrics for the vCPU(s) of the Managed Database. */
            cpu?: {
                /** @description The average percent of vCPU utilization for the Managed Database over the last hour. */
                percentage?: string;
            };
            /** @description Metrics for the disk storage of the Managed Database. */
            disk?: {
                /** @description The current amount of space used on the Managed Database (in GB). */
                current_gb?: string;
                /** @description The maximum available space on the Managed Database (in GB). */
                max_gb?: string;
                /** @description The percentage of space used on the Managed Database relative to its capacity. */
                percentage?: string;
            };
            /** @description Metrics for the memory of the Managed Database. */
            memory?: {
                /** @description The current amount of memory used on the Managed Database (in MB). */
                current_mb?: string;
                /** @description The maximum available memory on the Managed Database (in MB). */
                max_mb?: string;
                /** @description The average percent of memory utilization for the Managed Database over the last hour. */
                percentage?: string;
            };
        };
        /**
         * user
         * @description Managed Database user information.
         */
        "database-user": {
            /** @description Access control settings for the database user (Redis engine type only). */
            access_control?: {
                /** @description List of configured rules for command categories. */
                redis_acl_categories?: string[];
                /** @description List of configured publish/subscribe channel patterns. */
                redis_acl_channels?: string[];
                /** @description List of configured rules for individual commands. */
                redis_acl_commands?: string[];
                /** @description List of configured key access rules. */
                redis_acl_keys?: string[];
            };
            /** @description The password encryption for the database user (MySQL engine type only).
             *     * `Default (MySQL 8+)`
             *     * `Legacy (MySQL 5.x)` */
            encryption?: string;
            /** @description The password for the database user. */
            password?: string;
            /** @description The username for the database user. */
            username?: string;
        };
        /**
         * alert
         * @description Managed Database alerts information.
         */
        "dbaas-alerts": {
            /** @description A verbose description of the associated alert category. */
            description?: string;
            /** @description The time in which mandatory maintenance has been scheduled with the associated alert. Only included for certain alert types. */
            maintenance_scheduled?: string;
            /** @description The category of alert that was sent.
             *     * `DB MASTER PROMOTION`
             *     * `MAINTENANCE SCHEDULED`
             *     * `MISSING MYSQL PRIMARY KEYS`
             *     * `RESOURCE USAGE DISK`
             *     * `RESOURCE USAGE OOM KILLED`
             *     * `RESOURCE USAGE PG REPLICATION SLOTS` */
            message_type?: string;
            /** @description A description of the recommended action the customer should take. Only included for certain alert types. */
            recommendation?: string;
            /** @description The affected resource related to the associated alert. Only included for certain alert types. */
            resource_type?: string;
            /** @description The number of affected tables related to the associated alert. Only included for certain alert types. */
            table_count?: number;
            /** @description The date and time in which the alert was sent. */
            timestamp?: string;
        };
        /**
         * available_option
         * @description Managed Database PostgreSQL advanced configuration options.
         */
        "dbaas-available-options": {
            /** @description Any alternate value accepted for the configuration option. */
            alt_values?: number[];
            /** @description Valid enumerals for `enum` type configuration options only. */
            enumerals?: string[];
            /** @description The largest value accepted for the configuration option. */
            max_value?: number;
            /** @description The smallest value accepted for the configuration option. */
            min_value?: number;
            /** @description The name of the configuration option. */
            name?: string;
            /** @description The type of the configuration option.
             *     * `int`
             *     * `float`
             *     * `bool`
             *     * `enum` */
            type?: string;
            /** @description The units associated with the configuration option. */
            units?: string;
        };
        /**
         * meta
         * @description The meta information object.
         */
        "dbaas-meta": {
            /** @description Total objects available in the list. */
            total?: number;
        };
        /**
         * migration
         * @description Managed Database migration information.
         */
        "dbaas-migration": {
            /** @description Associated list of connection details for the source database server. */
            credentials?: {
                /** @description The database of the source server. Excluded for Redis engine types. */
                database?: string;
                /** @description The host name of the source server. */
                host?: string;
                /** @description Comma-separated list of ignored databases on the source server. Excluded for Redis engine types. */
                ignored_databases?: string;
                /** @description The password of the source server. */
                password?: string;
                /** @description The connection port of the source server. */
                port?: number;
                /** @description The true/false value for whether SSL is needed to connect to the source server. */
                ssl?: boolean;
                /** @description The username of the source server. */
                username?: string;
            };
            /** @description The verbose error message output for migrations with an `error` status. */
            error?: string;
            /** @description The type of migration performed (dump or replication). Only shows if status is `complete`. */
            method?: string;
            /** @description The current status of the attached migration.
             *     * `complete`
             *     * `error`
             *     * `pending`
             *     * `running` */
            status?: string;
        };
        /**
         * plan
         * @description Managed Database plan information.
         */
        "dbaas-plan": {
            /** @description The size of the disk in GB (excluded for Redis engine types). */
            disk?: number;
            /** @description A unique ID for the plan. */
            id?: string;
            /** @description A list of available regions in which this plan is currently available. */
            locations?: string[];
            /** @description A list of key/value pairs with database engine types (excluding Redis) and integers of max connection values. */
            max_connections?: Record<string, never>;
            /** @description The monthly cost of this Managed Database plan. */
            monthly_cost?: number;
            /** @description The total number of nodes for this plan. */
            number_of_nodes?: number;
            /** @description The amount of RAM in MB. */
            ram?: number;
            /** @description A list of key/value pairs with database engine types and boolean values. */
            supported_engines?: Record<string, never>;
            /** @description The type of plan this is. */
            type?: string;
            /** @description Number of vCPUs. */
            vcpu_count?: number;
        };
        /**
         * dns-record
         * @description DNS Record information.
         */
        "dns-record": {
            /** @description The DNS data for this record type. */
            data?: string;
            /** @description A unique ID for the DNS Record. */
            id?: string;
            /** @description The hostname for this DNS record. */
            name?: string;
            /** @description DNS priority. Does not apply to all record types. */
            priority?: number;
            /** @description Time to Live in seconds. */
            ttl?: number;
            /** @description The DNS record type.
             *
             *     * A
             *     * AAAA
             *     * CNAME
             *     * NS
             *     * MX
             *     * SRV
             *     * TXT
             *     * CAA
             *     * SSHFP */
            type?: string;
        };
        /**
         * dns-soa
         * @description SOA Record information.
         */
        "dns-soa": {
            /** @description Domain contact email address. */
            email?: string;
            /** @description Primary nameserver for this domain. */
            nsprimary?: string;
        };
        /**
         * domain
         * @description DNS Domain information.
         */
        domain: {
            /** @description Date the DNS Domain was created. */
            date_created?: string;
            /** @description The domain's DNSSEC status
             *
             *     * enabled
             *     * disabled */
            dns_sec?: string;
            /** @description Your registered domain name. */
            domain?: string;
        };
        /**
         * firewall-group
         * @description Firewall Group information.
         */
        "firewall-group": {
            /** @description Date the Firewall Group was originally created. */
            date_created?: string;
            /** @description Date of the last modification to this Firewall Group. */
            date_modified?: string;
            /** @description User-supplied description of this Firewall Group. */
            description?: string;
            /** @description A unique ID for the Firewall Group. */
            id?: string;
            /** @description The number of instances linked to this Firewall Group. */
            instance_count?: number;
            /** @description The maximum number of rules allowed for this Firewall Group. */
            max_rule_count?: number;
            /** @description The number of rules in this Firewall Group. */
            rule_count?: number;
        };
        /**
         * firewall-rule
         * @description Firewall rule information.
         */
        "firewall-rule": {
            /** @description Action to take when this rule is met.
             *
             *     * accept */
            action?: string;
            /** @description A unique ID for the Firewall Rule. */
            id?: number;
            /** @description The type of IP rule.
             *
             *     * v4
             *     * v6 */
            ip_type?: string;
            /** @description User-supplied notes for this rule. */
            notes?: string;
            /** @description Port or port range for this rule. */
            port?: string;
            /** @description The protocol for this rule.
             *
             *     * ICMP
             *     * TCP
             *     * UDP
             *     * GRE
             *      */
            protocol?: string;
            /** @description If the source string is given a value of "cloudflare" subnet and subnet_size will both be ignored.
             *     Possible values:
             *
             *     |   | Value | Description |
             *     | - | ------ | ------------- |
             *     |   | "" | Use the value from `subnet` and `subnet_size`. |
             *     |   | cloudflare | Allow all of Cloudflare's IP space through the firewall | */
            source?: string;
            /** @description IP address representing a subnet. The IP address format must match with the "ip_type" parameter value. */
            subnet?: string;
            /** @description The number of bits for the netmask in CIDR notation. Example: 24 */
            subnet_size?: number;
            /**
             * @deprecated
             * @description This field is deprecated. Use `ip_type` instead.
             *
             *     The type of IP rule.
             *
             *     * v4
             *     * v6
             */
            type?: string;
        };
        /**
         * forwarding-rule
         * @description Forwarding Rule information.
         */
        "forwarding-rule": {
            /** @description The port number destination on the backend server. */
            backend_port?: number;
            /** @description The protocol destination on the backend server.
             *
             *     * HTTP
             *     * HTTPS
             *     * TCP */
            backend_protocol?: string;
            /** @description The port number on the Load Balancer to forward to the backend. */
            frontend_port?: number;
            /** @description The protocol on the Load Balancer to forward to the backend.
             *
             *     * HTTP
             *     * HTTPS
             *     * TCP */
            frontend_protocol?: string;
            /** @description A unique ID for the Forwarding Rule. */
            id?: string;
        };
        /**
         * inference-subscription
         * @description Serverless Inference information.
         */
        "inference-subscription": {
            /** @description The API key used to access the Vultr Inference API. */
            api_key?: string;
            /** @description The date this Serverless Inference subscription was created. */
            date_created?: string;
            /** @description A unique ID for the Serverless Inference subscription. */
            id?: string;
            /** @description The user-supplied label for this Serverless Inference subscription. */
            label?: string;
        };
        /**
         * inference-usage
         * @description Serverless Inference usage information.
         */
        "inference-usage": {
            /** @description Metrics for audio generation usage of the Serverless Inference subscription. */
            audio?: {
                /** @description The total number of text-to-speech input characters used this period with the HD model. */
                tts_characters?: string;
                /** @description The total number of text-to-speech input characters used this period with the basic model. */
                tts_sm_characters?: string;
            };
            /** @description Metrics for chat/embeddings usage of the Serverless Inference subscription. */
            chat?: {
                /** @description The total number of chat completion tokens used in this monthly period. */
                current_tokens?: string;
                /** @description The monthly token allotment for this Serverless Inference subscription. */
                monthly_allotment?: string;
                /** @description The number of overage chat completion tokens in this monthly period. */
                overage?: string;
            };
        };
        /**
         * instance
         * @description Instance information.
         */
        instance: {
            /** @description Monthly bandwidth quota in GB. */
            allowed_bandwidth?: number;
            /** @description The [Application id](#operation/list-applications) used by this instance. */
            app_id?: number;
            /** @description The date this instance was created. */
            date_created?: string;
            /** @description The default password assigned at deployment. Only available for ten minutes after deployment. */
            default_password?: string;
            /** @description The size of the disk in GB. */
            disk?: number;
            /** @description "auto_backups", "ipv6", "ddos_protection" */
            features?: string[];
            /** @description The [Firewall Group id](#operation/list-firewall-groups) linked to this Instance. */
            firewall_group_id?: string;
            /** @description The gateway IP address. */
            gateway_v4?: string;
            /** @description The hostname for this instance. */
            hostname?: string;
            /** @description A unique ID for the VPS Instance. */
            id?: string;
            /** @description The [Application image_id](#operation/list-applications) used by this instance. */
            image_id?: string;
            /** @description The internal IP used by this instance, if set. Only relevant when a VPC is attached. */
            internal_ip?: string;
            /** @description HTTPS link to the Vultr noVNC Web Console. */
            kvm?: string;
            /** @description The user-supplied label for this instance. */
            label?: string;
            /** @description The main IPv4 address. */
            main_ip?: string;
            /** @description The IPv4 netmask in dot-decimal notation. */
            netmask_v4?: string;
            /** @description The [Operating System name](#operation/list-os). */
            os?: string;
            /** @description The [Operating System id](#operation/list-os) used by this instance. */
            os_id?: number;
            /** @description A unique ID for the Plan. */
            plan?: string;
            /** @description The power-on status.
             *
             *     * running
             *     * stopped */
            power_status?: string;
            /** @description The amount of RAM in MB. */
            ram?: number;
            /** @description The [Region id](#operation/list-regions) where the Instance is located. */
            region?: string;
            /** @description The server health status.
             *
             *     * none
             *     * locked
             *     * installingbooting
             *     * ok */
            server_status?: string;
            /** @description The current status.
             *
             *     * active
             *     * pending
             *     * suspended
             *     * resizing */
            status?: string;
            /**
             * @deprecated
             * @description Use `tags` instead. The user-supplied tag for this instance.
             */
            tag?: string;
            /** @description Tags to apply to the instance. */
            tags?: string[];
            /** @description The user scheme.
             *
             *     * root
             *     * limited */
            user_scheme?: string;
            /** @description An array of IPv6 objects. */
            v6_networks?: {
                /** @description The main IPv6 network address. */
                main_ip?: string;
                /** @description The IPv6 subnet. */
                network?: string;
                /** @description The IPv6 network size in bits. */
                network_size?: number;
            }[];
            /** @description Number of vCPUs. */
            vcpu_count?: number;
        };
        /**
         * instance-vpc
         * @description VPC information.
         */
        "instance-vpc": {
            /** @description A unique ID for the VPC. */
            id?: string;
            /** @description The IP address to use for this instance on the attached VPC network. */
            ip_address?: string;
            /** @description The MAC address to use for this instance on the attached VPC network. */
            mac_address?: string;
        };
        /**
         * instance-vpc2
         * @description VPC 2.0 information.
         */
        "instance-vpc2": {
            /** @description A unique ID for the VPC. */
            id: string;
            /** @description The IP address to use for this instance on the attached VPC 2.0 network. */
            ip_address?: string;
            /** @description The MAC address to use for this instance on the attached VPC 2.0 network. */
            mac_address?: string;
        };
        /** invoice */
        invoice: {
            /** @description Amount due in dollars */
            amount?: number;
            /** @description Account balance amount in dollars */
            balance?: number;
            /** @description Date invoice was generated */
            date?: string;
            /** @description description of item */
            description?: string;
            /** @description ID of the invoice */
            id?: number;
        };
        /**
         * iso
         * @description ISO information.
         */
        iso: {
            /** @description Date the ISO was created. */
            date_created?: string;
            /** @description The ISO filename. */
            filename?: string;
            /** @description A unique ID for the ISO. */
            id?: string;
            /** @description The calculated md5sum of the ISO. */
            md5sum?: string;
            /** @description The calculated sha512sum of the ISO. */
            sha512sum?: string;
            /** @description The ISO size in KB. */
            size?: number;
            /** @description The current status of the ISO.
             *
             *     * complete
             *     * pending */
            status?: string;
        };
        /**
         * iso-public
         * @description Public ISO  information.
         */
        "iso-public": {
            /** @description The long description of the Public ISO. */
            description?: string;
            /** @description A unique ID for the Vultr Public ISO. */
            id?: string;
            md5sum?: string;
            /** @description The short name of the Public ISO. */
            name?: string;
        };
        /**
         * loadbalancer
         * @description Load Balancer information.
         */
        loadbalancer: {
            /** @description The Auto SSL configuration. */
            auto_ssl?: {
                /** @description Full domain including domain zone and subdomain. (subdomain.example.com) */
                domain?: string;
                /** @description The domain zone. (example.com) */
                domain_zone?: string;
            };
            /** @description Date this Load Balancer was created. */
            date_created?: string;
            /** @description An array of firewall rule objects. */
            firewall_rules?: {
                /** @description A unique ID for the firewall rule. */
                id?: string;
                /** @description The type of IP rule.
                 *
                 *     * v4
                 *     * v6
                 *      */
                ip_type?: string;
                /** @description Port for this rule. */
                port?: number;
                /** @description If the source string is given a value of "cloudflare" then cloudflare IPs will be supplied. Otherwise enter a IP address with subnet size that you wish to permit through the firewall.
                 *
                 *       Possible values:
                 *
                 *       |   | Value | Description |
                 *       | - | ------ | ------------- |
                 *       |   | "192.168.1.1/16" | Ip address with a subnet size. |
                 *       |   | cloudflare | Allow all of Cloudflare's IP space through the firewall | */
                source?: string;
            }[];
            /** @description An array of forwarding rule objects. */
            forward_rules?: {
                /** @description The port number destination on the backend server.  */
                backend_port?: number;
                /** @description The protocol destination on the backend server.
                 *
                 *     * HTTP
                 *     * HTTPS
                 *     * TCP */
                backend_portocol?: string;
                /** @description The port number on the Load Balancer to forward to the backend. */
                frontend_port?: number;
                /** @description The protocol on the Load Balancer to forward to the backend.
                 *
                 *     * HTTP
                 *     * HTTPS
                 *     * TCP */
                frontend_protocol?: string;
                /** @description A unique ID for the forwarding rule. */
                id?: string;
            }[];
            /** @description An object containing additional options. */
            generic_info?: {
                /** @description The balancing algorithm.
                 *
                 *     * roundrobin (default)
                 *     * leastconn */
                balancing_algorithm?: string;
                /**
                 * @deprecated
                 * @description Use `vpc` instead. ID of the private network you wish to use. If private_network is omitted it will default to the public network.
                 */
                private_network?: string;
                /** @description "If `true`, you must configure backend nodes to accept Proxy protocol. \n\n* true\n* false (Default)" */
                proxy_protocol?: boolean;
                /** @description If `true`, this will redirect all HTTP traffic to HTTPS. You must have an HTTPS rule and SSL certificate installed on the load balancer to enable this option.
                 *
                 *     * true
                 *     * false */
                ssl_redirect?: boolean;
                /** @description Array of sticky session cookies. */
                sticky_sessions?: {
                    /** @description The cookie name to make sticky. See [Load Balancer documentation](https://www.vultr.com/docs/vultr-load-balancers/#Load_Balancer_Configuration). */
                    cookie_name?: string;
                };
                /** @description The maximum time allowed for the connection to remain inactive before timing out in seconds. This defaults to 600. */
                timeout?: number;
                /** @description ID of the VPC you wish to use. If a VPC ID is omitted it will default to the public network. */
                vpc?: string;
            };
            /** @description Indicates if this Load Balancer has an SSL certificate installed. */
            has_ssl?: boolean;
            /** @description The health check object configuration. See [Load Balancer documentation](https://www.vultr.com/docs/vultr-load-balancers/#Load_Balancer_Configuration). */
            health_check?: {
                /** @description Interval between health checks. */
                check_interval?: number;
                /** @description Number of times a check must succeed before returning to healthy status. */
                healthy_threshold?: number;
                /** @description HTTP Path to check. Only applies if Protocol is HTTP or HTTPS. */
                path?: string;
                /** @description The port to use for health checks. */
                port?: number;
                /** @description The protocol to use for health checks.
                 *
                 *     * HTTPS
                 *     * HTTP
                 *     * TCP */
                protocol?: string;
                /** @description Timeout before health check fails. */
                response_timeout?: number;
                /** @description Number times a check must fail before becoming unhealthy. */
                unhealthy_threshold?: number;
            };
            /** @description Indicates if this Load Balancer has HTTP2 enabled. */
            http2?: boolean;
            /** @description Indicates if this Load Balancer has HTTP3 enabled. */
            http3?: boolean;
            /** @description A unique ID for the Load Balancer. */
            id?: string;
            /** @description Array of [Instance ids](#operation/list-instances) attached to this Load Balancer. */
            instances?: string[];
            /** @description The IPv4 address of this Load Balancer. */
            ipv4?: string;
            /** @description The IPv6 address of this Load Balancer. */
            ipv6?: string;
            /** @description The user-supplied label for this load-balancer. */
            label?: string;
            /** @description Public IP addresses of the load balancer nodes. */
            node_ips?: {
                /** @description IPV4 addresses of the load balancer nodes. */
                v4?: string[];
                /** @description IPV6 addresses of the load balancer nodes. */
                v6?: string[];
            };
            /** @description The number of nodes to add to the load balancer (1-99), must be an odd number. This defaults to 1. */
            nodes?: number;
            /** @description The [Region id](#operation/list-regions) where the Load Balancer is located. */
            region?: string;
            /** @description The current status.
             *
             *     * active */
            status?: string;
        };
        /** @description Load Balancer firewall rule information. */
        "loadbalancer-firewall-rule": {
            /** @description The unique ID for the firewall rule */
            id?: string;
            /** @description The type of IP rule.
             *
             *     * v4
             *     * v6
             *      */
            ip_type?: string;
            /** @description Port for this rule.
             *      */
            port?: number;
            /** @description If the source string is given a value of "cloudflare" then cloudflare IPs will be supplied. Otherwise enter a IP address with subnet size that you wish to permit through the firewall.
             *
             *     Possible values:
             *
             *     |   | Value | Description |
             *     | - | ------ | ------------- |
             *     |   | "192.168.1.1/16" | Ip address with a subnet size. |
             *     |   | cloudflare | Allow all of Cloudflare's IP space through the firewall | */
            source?: string;
        };
        /**
         * meta
         * @description The meta information object. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination) for more information.
         */
        meta: {
            /** @description Cursor values for pagination. */
            links?: {
                /** @description Cursor value for the next page. */
                next?: string;
                /** @description Cursor value for the previous page. */
                prev?: string;
            };
            /** @description Total objects available in the list. This value may be greater than the number of objects returned if `per_page` is set. */
            total?: number;
        };
        /**
         * network
         * @deprecated
         * @description Network information.
         */
        network: {
            /** @description Date the network was created. */
            date_created?: string;
            /** @description A description of the private network. */
            description?: string;
            /** @description A unique ID for the Private Network. */
            id: string;
            /** @description The [Region id](#operation/list-regions) where the network is located. */
            region?: string;
            /** @description The IPv4 network address. For example: 10.99.0.0 */
            v4_subnet?: string;
            /** @description The number of bits for the netmask in CIDR notation. Example: 24 */
            v4_subnet_mask?: number;
        };
        /**
         * nodepool-instances
         * @description Instance that belongs to a nodepool
         */
        "nodepool-instances": {
            /** @description Date of creation */
            date_created?: string;
            /** @description ID of the nodepool instance */
            id?: string;
            /** @description Label of the nodepool instance */
            label?: string;
        };
        /**
         * nodepools
         * @description NodePool
         */
        nodepools: {
            /** @description Displays if the auto scaler is enabled or disabled for your cluster. */
            auto_scaler?: boolean;
            /** @description Date of creation */
            date_created?: string;
            /** @description Date the nodepool was updated. */
            date_updated?: string;
            /** @description The [NodePool ID](#operation/get-nodepools). */
            id?: string;
            /** @description Label for nodepool */
            label?: string;
            /** @description Map of key/value pairs defining labels to automatically apply to all nodes in this nodepool. */
            labels?: Record<string, never>;
            /** @description Auto scaler field that displays the maximum nodes you want for your cluster. */
            max_nodes?: unknown;
            /** @description Auto scaler field that displays the minimum nodes you want for your cluster. */
            min_nodes?: number;
            /** @description Number of nodes in nodepool */
            node_quantity?: number;
            nodes?: components["schemas"]["nodepool-instances"][];
            /** @description Plan used for nodepool */
            plan?: string;
            /** @description Status for nodepool */
            status?: string;
            /** @description Tag for node pool */
            tag?: string;
        };
        /**
         * object-storage
         * @description Object Storage information.
         */
        "object-storage": {
            /** @description The [Cluster id](#operation/list-object-storage-clusters). */
            cluster_id?: number;
            /** @description Date the Object Store was created. */
            date_created?: string;
            /** @description A unique ID for the Object Storage. */
            id?: string;
            /** @description The user-supplied label for this Object Storage. */
            label?: string;
            /** @description The [Region id](#operation/list-regions) for this Object Storage. */
            region?: string;
            /** @description The Object Storage access key. */
            s3_access_key?: string;
            /** @description The [Cluster hostname](#operation/list-object-storage-clusters) for this Object Storage. */
            s3_hostname?: string;
            /** @description The Object Storage secret key. */
            s3_secret_key?: string;
            /** @description The status of this Object Storage.
             *
             *     * active
             *     * pending */
            status?: string;
        };
        /**
         * os
         * @description Operating System information.
         */
        os: {
            /** @description The Operating System architecture. */
            arch?: string;
            /** @description The Operating System family.  */
            family?: string;
            /** @description The Operating System id. */
            id?: number;
            /** @description The Operating System description. */
            name?: string;
        };
        /**
         * plans
         * @description Plans for VPS instances.
         */
        plans: {
            /** @description The monthly bandwidth quota in GB. */
            bandwidth?: number;
            /** @description The disk size in GB. */
            disk?: number;
            /** @description The number of disks that this plan offers. */
            disk_count?: number;
            /** @description A unique ID for the Plan. */
            id?: string;
            /** @description An array of Regions where this plan is valid for use. */
            locations?: string[];
            /** @description The monthly cost in US Dollars. */
            monthly_cost?: number;
            /** @description The Plan name. */
            name?: string;
            /** @description The amount of RAM in MB. */
            ram?: number;
            /** @description The plan type.
             *
             *     |   | Type | Description |
             *     | - | ------ | ------------- |
             *     |   | vc2 | Cloud Compute |
             *     |   | vhf | High Frequency Compute |
             *     |   | vdc | Dedicated Cloud | */
            type?: string;
            /** @description The number of vCPUs in this Plan. */
            vcpu_count?: number;
        };
        /**
         * plans-metal
         * @description Plans for Bare Metal instances.
         */
        "plans-metal": {
            /** @description The monthly bandwidth quota in GB. */
            bandwidth?: number;
            /** @description The number of CPUs in this Plan. */
            cpu_count?: number;
            /** @description The CPU model type for this instance. */
            cpu_model?: string;
            /** @description The numner of supported threads for this instance. */
            cpu_threads?: number;
            /** @description The disk size in GB. */
            disk?: string;
            /** @description The number of disks that this plan offers. */
            disk_count?: number;
            /** @description A unique ID for the Bare Metal Plan. */
            id?: string;
            /** @description An array of Regions where this plan is valid for use. */
            locations?: string[];
            /** @description The monthly cost in US Dollars. */
            monthly_cost?: number;
            /** @description The amount of RAM in MB. */
            ram?: number;
            /** @description The plan type.
             *
             *     * SSD */
            type?: string;
        };
        /**
         * private-networks
         * @deprecated
         * @description Private Network information.
         */
        "private-networks": {
            /** @description A unique ID for the Private Network. */
            id?: string;
            /** @description The assigned IP address. */
            ip_address?: string;
            /** @description The assigned MAC address. */
            mac_address?: string;
        };
        /**
         * pull_zone
         * @description CDN Pull Zone information.
         */
        pullzone: {
            /** @description Optional feature to block AI bots. */
            block_ai?: boolean;
            /** @description Optional feature to block potentially malicious bots. */
            block_bad_bots?: boolean;
            /** @description How much data may be cached on each CDN node. */
            cache_size?: number;
            /** @description The Vultr CDN endpoint to access your cached files. */
            cdn_url?: string;
            /** @description Cross-origin resource sharing. */
            cors?: boolean;
            /** @description The date this CDN Pull Zone was created. */
            date_created?: string;
            /** @description Optional feature to compress files, reduce the amount of data that's transferred. */
            gzip?: boolean;
            /** @description A unique ID for the CDN Pull Zone. */
            id?: string;
            /** @description The amount of inbound bytes allowed to the CDN. */
            in_bytes?: number;
            /** @description The user-supplied label. */
            label?: string;
            /** @description The last date and time that the cached content on server proxies was cleared */
            last_purge?: string;
            /** @description The domain name from which the content stored in the CDN will be pulled. */
            origin_domain?: string;
            /**
             * @description The URI scheme of the origin domain.
             * @enum {string}
             */
            origin_scheme?: PullzoneOrigin_scheme;
            /** @description The amount of outbound bytes allowed from the CDN. */
            out_bytes?: number;
            /** @description Per CDN rate limiting per requests/sec. */
            packets_per_sec?: number;
            /** @description A list of [Region ids](#operation/list-regions) for locations to be used for content delivery. */
            regions?: unknown[];
            /** @description The amount of requests to limit to the CDN. */
            requests?: number;
            /** @description The current status.
             *
             *     * active
             *     * pending */
            status?: string;
        };
        /**
         * push_zone
         * @description CDN Push Zone information.
         */
        pushzone: {
            /** @description Optional feature to block AI bots. */
            block_ai?: boolean;
            /** @description Optional feature to block potentially malicious bots. */
            block_bad_bots?: boolean;
            /** @description How much data may be cached on each CDN node. */
            cache_size?: number;
            /** @description The Vultr CDN endpoint to access your cached files. */
            cdn_url?: string;
            /** @description Cross-origin resource sharing. */
            cors?: boolean;
            /** @description The date this CDN Push Zone was created. */
            date_created?: string;
            /** @description Optional feature to compress files, reduce the amount of data that's transferred. */
            gzip?: boolean;
            /** @description A unique ID for the CDN Push Zone. */
            id?: string;
            /** @description The amount of inbound bytes allowed to the CDN. */
            in_bytes?: number;
            /** @description The user-supplied label. */
            label?: string;
            /** @description The amount of outbound bytes allowed from the CDN. */
            out_bytes?: number;
            /** @description Per CDN rate limiting per requests/sec. */
            packets_per_sec?: number;
            /** @description A list of [Region ids](#operation/list-regions) for locations to be used for content delivery. */
            regions?: unknown[];
            /** @description The amount of requests to limit to the CDN. */
            requests?: number;
            /** @description The current status.
             *
             *     * active
             *     * pending */
            status?: string;
        };
        /**
         * file
         * @description CDN Push Zone file information.
         */
        pushzonefile: {
            /** @description Base64 encoded string of the file's binary content. */
            content?: string;
            /** @description The date the file was last modified. */
            last_modified?: string;
            /** @description The mime type of the file. */
            mime?: string;
            /** @description The name of the file. */
            name?: string;
            /** @description The size of the file. */
            size?: string;
        };
        /**
         * file
         * @description CDN Push Zone file meta information.
         */
        pushzonefilemeta: {
            /** @description The date the file was last modified. */
            last_modified?: string;
            /** @description The name of the file. */
            name?: string;
            /** @description the size of the file. */
            size?: string;
        };
        /**
         * region
         * @description Region information.
         */
        region: {
            /** @description The name of the city for this Region. */
            city?: string;
            /** @description The name of the continent for this Region. */
            continent?: string;
            /** @description The [two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for this Region. */
            country?: string;
            /** @description A unique ID for the Region. */
            id?: string;
            /** @description An array of product features available in this Region. */
            options?: string[];
        };
        /**
         * registry
         * @description Container Registry Entity
         */
        registry: {
            /** @description The date this Registry Subscription was created */
            date_created?: string;
            /** @description The UUID to reference this registry */
            id?: string;
            /** @description The metadata containing subscription information such as the region where this registry lives and monthly price and pending charges */
            metadata?: {
                region?: components["schemas"]["registry-region"];
                /** @description Subscription information */
                subscription?: {
                    /** @description Billing information */
                    billing?: {
                        /**
                         * Format: float
                         * @description Monthly Price
                         */
                        monthly_price?: number;
                        /**
                         * Format: float
                         * @description The current charges for this subscription
                         */
                        pending_charges?: number;
                    };
                };
            };
            /** @description The globally unique name to reference this registry */
            name?: string;
            /** @description If true, this is a publically accessible registry allowing anyone to pull from it. If false, this registry is completely private */
            public?: boolean;
            root_user?: components["schemas"]["registry-user"];
            /** @description The allowed and used storage for this registry subscription. */
            storage?: {
                allowed?: components["schemas"]["registry-storage"];
                used?: components["schemas"]["registry-storage"];
            };
            /** @description The base URN (the URL without the scheme [i.e. http:// or https://]) of this registry */
            urn?: string;
        };
        /**
         * registry-docker-credentials
         * @description Container Registry Docker Credentials Entity
         */
        "registry-docker-credentials": {
            /** @description Contains a single object with the key being the URN of the region */
            auths?: {
                /** @description This object represents the auth for this region */
                "{registry-region-name}.vultrcr.com"?: {
                    /** @description The base64 encoded credentials of the Robot Account {registry-user-username}:{registry-user-password} */
                    auth?: string;
                };
            };
        };
        /**
         * registry-kubernetes-docker-credentials
         * @description Container Registry Kubernetes Docker Credentials Entity
         */
        "registry-kubernetes-docker-credentials": {
            /** @description Specifies that this is api v1 */
            apiVersion?: string;
            data?: {
                /** @description Contains the base64 encoded Docker Credentials Config JSON */
                ".dockerconfigjson"?: string;
            };
            /** @description Specifies that this is a Kubernetes Secret */
            kind?: string;
            metadata?: {
                /** @description Specifies that these are Vultr Container Registry Credentials */
                name?: string;
            };
            /** @description Specifies that this type is a kubernetes.io/dockerconfigjson */
            type?: string;
        };
        /**
         * registry-plan
         * @description Container Registry Plan Entity. The KEY of this entity is the Plan ID you will use to create/upgrade your Container Registry
         */
        "registry-plan": {
            /** @description The total allocated storage this plan allows */
            max_storage_mb?: number;
            /** @description The monthly price for this plan */
            monthly_price?: number;
            /** @description The Nice Name of the plan */
            vanity_name?: string;
        };
        /**
         * registry-region
         * @description Container Registry Region Entity
         */
        "registry-region": {
            /** @description The date this Region was added */
            added_at?: string;
            /** @description The base URL of this region */
            base_url?: string;
            /** @description Information on the datacenter this region resides in */
            data_center?: Record<string, never>;
            /** @description The Numeric ID of this region. */
            id?: number;
            /** @description The unique name of this region, this is what you will use to specify a region when creating your subscription */
            name?: string;
            /** @description If true, this is a publically accessible region allowing any customer to create new subscriptions on this region. If false, this region is not generally available yet */
            public?: boolean;
            /** @description The date this Region was last updated */
            updated_at?: string;
            /** @description The base URN (the URL without the scheme [i.e. http:// or https://]) of this region */
            urn?: string;
        };
        /**
         * registry-repository
         * @description Container Registry Repository Entity
         */
        "registry-repository": {
            /** @description The date this Repo was added */
            added_at?: string;
            /** @description The amount of artifacts of this Repo */
            artifact_count?: number;
            /** @description User defined description of this repository */
            description?: string;
            /** @description The name of the conatiner image */
            image?: string;
            /** @description The name of this repository (the name of the container image prepended with the registry name) */
            name?: string;
            /** @description The amount of pulls for this Repo */
            pull_count?: number;
            /** @description The date this Repo was last updated */
            updated_at?: string;
        };
        /**
         * registry-storage
         * @description Container Registry Storage Information
         */
        "registry-storage": {
            /**
             * Format: float
             * @description Storage in Bytes
             */
            bytes?: number;
            /**
             * Format: float
             * @description Storage in Gigabytes
             */
            gb?: number;
            /**
             * Format: float
             * @description Storage in Megabytes
             */
            mb?: number;
            /**
             * Format: float
             * @description Storage in Terabytes
             */
            tb?: number;
            /** @description The date at which the storage information was last updated */
            updated_at?: string;
        };
        /**
         * registry-user
         * @description Container Registry User Entity
         */
        "registry-user": {
            /** @description The date this User was added */
            added_at?: string;
            /** @description The Numeric ID of this user. */
            id?: number;
            /** @description The password this user will use to authenticate. */
            password?: string;
            /** @description If true, this is a root user/registry owner meaning it cannot be deleted or renamed. If false, this is an additional user added to this registry that can be modified */
            root?: boolean;
            /** @description The date this User was last updated */
            updated_at?: string;
            /** @description The globally unique name of this user. */
            username?: string;
        };
        /**
         * reserved-ip
         * @description Reserved IP information.
         */
        "reserved-ip": {
            /** @description A unique ID for the Reserved IP. */
            id?: string;
            /** @description The [Instance id](#operation/list-instances) attached to this Reserved IP. */
            instance_id?: string;
            /** @description The type of IP address.
             *
             *     * v4
             *     * v6 */
            ip_type?: string;
            /** @description The user-supplied label. */
            label?: string;
            /** @description The [Region id](#operation/list-regions) where the Reserved IP is located. */
            region?: string;
            /** @description The IP subnet. */
            subnet?: string;
            /** @description The IP network size in bits. */
            subnet_size?: number;
        };
        /**
         * snapshot
         * @description Snapshot information.
         */
        snapshot: {
            /** @description The [Application id](#operation/list-applications) for this snapshot. */
            app_id?: number;
            /** @description The date this snapshot was created. */
            date_created?: string;
            /** @description The user-supplied description of the Snapshot. */
            description?: string;
            /** @description A unique ID for the Snapshot. */
            id?: string;
            /** @description The [Operating System id](#operation/list-os) for this Snapshot. */
            os_id?: number;
            /** @description The snapshot size in bytes. */
            size?: number;
            /** @description The Snapshot status.
             *
             *     * pending
             *     * complete
             *     * deleted */
            status?: string;
        };
        /**
         * ssh
         * @description SSH Key information.
         */
        ssh: {
            /** @description The date this SSH Key was created. */
            date_created?: string;
            /** @description A unique ID for the SSH Key. */
            id?: string;
            /** @description The user-supplied name for this SSH Key. */
            name?: string;
            /** @description The SSH Key. */
            ssh_key?: string;
        };
        /**
         * startup
         * @description Startup Script information.
         */
        startup: {
            /** @description The date the Startup Script was created. */
            date_created?: string;
            /** @description The date the Startup Script was last modified. */
            date_modified?: string;
            /** @description A unique ID for the Startup Script. */
            id?: string;
            /** @description The user-supplied name of the Startup Script. */
            name?: string;
            /** @description The base-64 encoded Startup Script. */
            script?: string;
            /** @description The Startup Script type.
             *
             *     * boot
             *     * pxe */
            type?: string;
        };
        /**
         * subaccount
         * @description Sub-account information.
         */
        subaccount: {
            /** @description Has this sub-account been activated or not. */
            activated?: boolean;
            /**
             * Format: float
             * @description The current balance of the sub-account.
             */
            balance?: number;
            /** @description The email address of this sub-account. */
            email?: string;
            /** @description A unique ID for the sub-account. */
            id?: string;
            /**
             * Format: float
             * @description Charges due for this sub-account at the end of the billing period.
             */
            pending_charges?: number;
            /** @description Your ID for this sub-account. */
            subaccount_id?: string;
            /** @description Your name for this sub-account. */
            subaccount_name?: string;
        };
        /**
         * upload_endpoint
         * @description CDN Push Zone file meta information.
         */
        uploadendpoint: {
            inputs?: components["schemas"]["nodepool-instances"][];
            /** @description The URL used to upload the file. */
            URL?: string;
        };
        /**
         * inputs
         * @description CDN Push Zone file meta information.
         */
        "uploadendpoint-inputs": {
            /** @description The access control list rule assigned to requst.  Include this in the upload request from data */
            acl?: string;
            /** @description The key used to upload the file.  Include this in the upload request from data. */
            key?: string;
            /** @description The encrypted policy linked to the presigned request.  Include this in the upload request from data */
            Policy?: string;
            /** @description The algorithm that was used to create the request signature.  Include this in the upload request from data */
            "X-Amz-Algorithm"?: string;
            /** @description The credentials linked to the presigned request.  Include this in the upload request from data */
            "X-Amz-Credential"?: string;
            /** @description The signature of the presigned request.  Include this in the upload request from data */
            "X-Amz-Signature"?: string;
        };
        /**
         * user
         * @description User information.
         */
        user: {
            /** @description An array of Users. */
            user?: {
                /** @description An array of permission granted.
                 *
                 *     * abuse
                 *     * alerts
                 *     * billing
                 *     * dns
                 *     * firewall
                 *     * loadbalancer
                 *     * manage\_users
                 *     * objstore
                 *     * provisioning
                 *     * subscriptions
                 *     * subscriptions\_view
                 *     * support
                 *     * upgrade */
                acls?: string[];
                /** @description Permit API access for this User.
                 *
                 *     * true
                 *     * false */
                api_enabled?: boolean;
                /** @description The User's email address. */
                email?: string;
                /** @description The User's id. */
                id?: string;
                /** @description The User's name. */
                name?: string;
                /** @description The User's password. */
                password?: string;
            };
        };
        /**
         * vke-cluster
         * @description VKE Cluster
         */
        "vke-cluster": {
            /** @description IP range that your pods will run on in this cluster */
            cluster_subnet?: string;
            /** @description Date of creation */
            date_created?: string;
            /** @description Domain for your Kubernetes Clusters Control Plane */
            endpoint?: string;
            /** @description The [Firewall Group id](#operation/list-firewall-groups) linked to this cluster. */
            firewall_group_id?: string;
            /** @description Whether a highly available control planes configuration has been deployed
             *     * true
             *     * false (default) */
            ha_controlplanes?: boolean;
            /** @description ID for the VKE cluster */
            id?: string;
            /** @description IP for your Kubernetes Clusters Control Plane */
            ip?: string;
            /** @description Label for your cluster */
            label?: string;
            /** @description NodePools in this cluster */
            node_pools?: components["schemas"]["nodepools"][];
            /** @description Region this Kubernetes Cluster is running in */
            region?: string;
            /** @description IP range that services will run on this cluster */
            service_subnet?: string;
            /** @description Status for VKE cluster */
            status?: string;
            /** @description Version of Kubernetes this cluster is running on */
            version?: string;
        };
        /**
         * vpc
         * @description VPC information.
         */
        vpc: {
            /** @description Date the VPC was created. */
            date_created?: string;
            /** @description A description of the VPC. */
            description?: string;
            /** @description A unique ID for the VPC. */
            id: string;
            /** @description The [Region id](#operation/list-regions) where the VPC is located. */
            region?: string;
            /** @description The IPv4 VPC address. For example: 10.99.0.0 */
            v4_subnet?: string;
            /** @description The number of bits for the netmask in CIDR notation. Example: 24 */
            v4_subnet_mask?: number;
        };
        /**
         * vpc2
         * @description VPC 2.0 information.
         */
        vpc2: {
            /** @description Date the VPC was created. */
            date_created?: string;
            /** @description A description of the VPC. */
            description?: string;
            /** @description A unique ID for the VPC. */
            id: string;
            /** @description The VPC subnet IP address. For example: 10.99.0.0 */
            ip_block?: string;
            /** @description The number of bits for the netmask in CIDR notation. Example: 24 */
            prefix_length?: number;
            /** @description The [Region id](#operation/list-regions) where the VPC is located. */
            region?: string;
        };
        /**
         * vpc2-node
         * @description VPC 2.0 node information.
         */
        vpc2nodes: {
            /** @description The user-supplied label for the attached instance. */
            description?: string;
            /** @description A unique ID for the attached instance. */
            id?: string;
            /** @description The IP address to use for the attached instance. */
            ip_address?: string;
            /** @description The MAC address to use for the attached instance. */
            mac_address?: string;
            /** @description The status of the attached instance. */
            node_status?: string;
            /** @description The type of the attached instance. */
            type?: string;
        };
    };
    responses: never;
    parameters: {
        /**
         * @description The seconds until these credentials expire. When set to 0, credentials do not expire. The default value is 0
         * @default 0
         */
        "docker-credentials-expiry-seconds": number;
        /**
         * @description Whether these credentials will have only PULL access or PUSH access as well. If true these credentials can PUSH to repos in this registry. If false, these credentials can only PULL. Default is false.
         * @default false
         */
        "docker-credentials-read-write": boolean;
        /**
         * @description Whether this YAML will be returned in a base64 encoded string for ease of downloading. If true, the response will be a base64 encoded string. Default is false.
         * @default false
         */
        "kubernetes-docker-credentials-base64-encode": boolean;
        /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
        "registry-id": string;
        /** @description The [Repository Image](#components/schemas/registry-repository/properties/image). Which can be found by [List Repositories](#operation/list-registry-repositories). */
        "repository-image": string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "get-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        account?: components["schemas"]["account"];
                    };
                };
            };
        };
    };
    "get-account-bandwidth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        bandwidth?: components["schemas"]["account-bandwidth"];
                    };
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-applications": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
                /** @description Filter the results by type.
                 *
                 *     |   | Type | Description |
                 *     | - | ------ | ------------- |
                 *     |   | all | All available application types |
                 *     |   | marketplace | Marketplace applications |
                 *     |   | one-click | Vultr One-Click applications | */
                type?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        applications?: components["schemas"]["application"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
        };
    };
    "list-backups": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Filter the backup list by [Instance id](#operation/list-instances). */
                instance_id?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        backups?: components["schemas"]["backup"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-backup": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Backup id](#operation/list-backups). */
                "backup-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        backup?: components["schemas"]["backup"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-baremetals": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500.
                 *      */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        bare_metals?: components["schemas"]["baremetal"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Notify by email after deployment.
                     *
                     *     * true
                     *     * false (default) */
                    activation_email?: boolean;
                    /** @description If supplied, deploy the instance using this [Application id](#operation/list-applications). */
                    app_id?: number;
                    /** @description The [app variable inputs](#operation/list-marketplace-app-variables) for configuring the marketplace app (name/value pairs). */
                    app_variables?: Record<string, never>;
                    /** @description An array of [VPC IDs](#operation/list-vpc2) to attach to this Bare Metal Instance. This parameter takes precedence over `enable_vpc2`. Please choose one parameter. */
                    attach_vpc2?: string[];
                    /** @description An array of [VPC IDs](#operation/list-vpc2) to detach from this Bare Metal Instance. This parameter takes precedence over `enable_vpc2`. */
                    detach_vpc2?: string[];
                    /** @description Enable IPv6.
                     *
                     *     * true */
                    enable_ipv6?: boolean;
                    /** @description If `true`, VPC 2.0 support will be added to the new server.
                     *
                     *     This parameter attaches a single VPC 2.0 netowrk. When no VPC 2.0 network exists in the region, it will be automatically created.
                     *
                     *     If there are multiple VPC 2.0 networks in the instance's region, use `attach_vpc2` instead to specify a VPC 2.0 network. */
                    enable_vpc2?: boolean;
                    /** @description The user-supplied hostname to use when deploying this instance. */
                    hostname?: string;
                    /** @description If supplied, deploy the instance using this [Application image_id](#operation/list-applications). */
                    image_id?: string;
                    /** @description The user-supplied label. */
                    label?: string;
                    /** @description The RAID configuration used for the disks on this instance. The instance must be reinstalled for this change to take effect.
                     *
                     *     * raid1
                     *     * jbod
                     *     * none (default) */
                    mdisk_mode?: string;
                    /** @description If supplied, deploy the instance using this [Operating System id](#operation/list-os). */
                    os_id?: number;
                    /** @description Enable persistent PXE.
                     *
                     *     * true
                     *     * false (default) */
                    persistent_pxe?: boolean;
                    /** @description The [Bare Metal plan id](#operation/list-metal-plans) to use for this instance. */
                    plan: string;
                    /** @description The [Region id](#operation/list-regions) to create the instance. */
                    region: string;
                    /** @description The [Reserved IP id](#operation/list-reserved-ips) for this instance. */
                    reserved_ipv4?: string;
                    /** @description The [Startup Script id](#operation/list-startup-scripts) to use for this instance. */
                    script_id?: string;
                    /** @description If supplied, deploy the instance using this [Snapshot ID](#operation/list-snapshots). */
                    snapshot_id?: string;
                    /** @description The [SSH Key id](#operation/list-ssh-keys) to install on this instance. */
                    sshkey_id?: string[];
                    /**
                     * @deprecated
                     * @description Use `tags` instead. The user-supplied tag.
                     */
                    tag?: string;
                    /** @description Tags to apply to the instance. */
                    tags?: string[];
                    /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) for this Instance. */
                    user_data?: string;
                    /** @description Linux-only: The user scheme used for logging into this instance. By default, the "root" user is configured. Alternatively, a limited user with sudo permissions can be selected.
                     *
                     *     * root
                     *     * limited */
                    user_scheme?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        baremetal?: components["schemas"]["baremetal"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        bare_metal?: components["schemas"]["baremetal"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description If supplied, reinstall the instance using this [Application id](#operation/list-applications). */
                    app_id?: number;
                    /** @description An array of [VPC IDs](#operation/list-vpc2) to attach to this Bare Metal Instance. This parameter takes precedence over `enable_vpc2`. Please choose one parameter. */
                    attach_vpc2?: string[];
                    /** @description An array of [VPC IDs](#operation/list-vpc2) to detach from this Bare Metal Instance. This parameter takes precedence over `enable_vpc2`. */
                    detach_vpc2?: string[];
                    /** @description Enable IPv6.
                     *
                     *     * true */
                    enable_ipv6?: boolean;
                    /** @description If `true`, VPC 2.0 support will be added to the new server.
                     *
                     *     This parameter attaches a single VPC 2.0 netowrk. When no VPC 2.0 network exists in the region, it will be automatically created.
                     *
                     *     If there are multiple VPC 2.0 networks in the instance's region, use `attach_vpc2` instead to specify a VPC 2.0 network. */
                    enable_vpc2?: boolean;
                    /** @description If supplied, reinstall the instance using this [Application image_id](#operation/list-applications). */
                    image_id?: string;
                    /** @description The user-supplied label. */
                    label?: string;
                    /** @description The RAID configuration used for the disks on this instance. The instance must be reinstalled for this change to take effect.
                     *
                     *     * raid1
                     *     * jbod
                     *     * none (default) */
                    mdisk_mode?: string;
                    /** @description If supplied, reinstall the instance using this [Operating System id](#operation/list-os). */
                    os_id?: number;
                    /**
                     * @deprecated
                     * @description Use `tags` instead. The user-supplied tag.
                     */
                    tag?: string;
                    /** @description Tags to apply to the instance. */
                    tags?: string[];
                    /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) to attach to this instance. */
                    user_data?: string;
                    /** @description Linux-only: The user scheme used for logging into this instance. The instance must be reinstalled for this change to take effect.
                     *
                     *     * root
                     *     * limited */
                    user_scheme?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        bare_metal?: components["schemas"]["baremetal"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-bandwidth-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description This object will contain objects that represent days in the month (UTC). The date is denoted by the nested objects keys. */
                        bandwidth?: {
                            "2020-10-10"?: components["schemas"]["bandwidth"];
                            "2020-10-11"?: components["schemas"]["bandwidth"];
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "halt-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-ipv4-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ipv4s?: components["schemas"]["baremetal-ipv4"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-ipv6-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ipv6s?: components["schemas"]["baremetal-ipv6"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "reboot-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "reinstall-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The hostname to use when reinstalling this bare metal server. */
                    hostname?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        bare_metal?: components["schemas"]["baremetal"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-baremetal": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-bare-metals-upgrades": {
        parameters: {
            query?: {
                /** @description Filter upgrade by type:
                 *
                 *     - all (applications, plans)
                 *     - applications
                 *     - os */
                type?: string;
            };
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description This object will contain the available Bare Metal Upgrades */
                        upgrades?: {
                            applications?: unknown[];
                            os?: unknown[];
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-bare-metal-userdata": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user_data?: {
                            /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) attached to this bare metal. */
                            data?: string;
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-bare-metal-vnc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal id](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description This object will contain the VNC URL for the Bare Metal Instance */
                        vnc?: {
                            /** @description This is the VNC URL for the Bare Metal Instance */
                            url?: string;
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-baremetal-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vpcs?: components["schemas"]["instance-vpc2"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-baremetals-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The IP address to use for this instance on the attached VPC 2.0 network.   */
                    ip_address?: string;
                    /** @description The [VPC ID](#operation/list-vpc2) to attach to this Bare Metal Instance. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-baremetal-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [bare-metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [VPC ID](#operation/list-vpc2) to detach from this Bare Metal Instance. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-baremetal-vpcs": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vpcs?: components["schemas"]["instance-vpc"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-baremetals-vpcs": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Bare Metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [VPC ID](#operation/list-vpcs) to attach to this Bare Metal Instance. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-baremetal-vpcs": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [bare-metal ID](#operation/list-baremetals). */
                "baremetal-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [VPC ID](#operation/list-vpcs) to detach from this Bare Metal Instance. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "halt-baremetals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    baremetal_ids?: string[];
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "reboot-bare-metals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    baremetal_ids?: string[];
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-bare-metals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    baremetal_ids?: string[];
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-billing-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description List of all billing history. */
                        billing_history?: components["schemas"]["billing"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description List of billing invoices. */
                        billing_invoices?: components["schemas"]["invoice"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of invoice */
                "invoice-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        billing_invoice?: components["schemas"]["invoice"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-invoice-items": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of invoice */
                "invoice-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description List of invoice items. */
                        invoice_items?: {
                            /** @description Invoice item description */
                            description?: string;
                            /** @description End date of item */
                            end_date?: string;
                            /** @description Product name */
                            product?: string;
                            /** @description Start date of item */
                            start_date?: string;
                            /** @description Total amount due in dollars */
                            total?: number;
                            /** @description Price per unit in dollars */
                            unit_price?: number;
                            /** @description Unit type. Options include "hours", "overage", and "discount" */
                            unit_type?: string;
                            /** @description Number of units item consumed in billing period */
                            units?: number;
                        }[];
                        meta?: {
                            links?: {
                                next?: string;
                                prev?: string;
                            };
                            total?: number;
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "pending-charges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description List of pending charges. */
                        pending_charges?: components["schemas"]["billing"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-blocks": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        blocks?: components["schemas"]["blockstorage"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-block": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description An optional parameter, that determines on the type of block storage volume that will be created.
                     *     Soon to become a required parameter.
                     *
                     *     * `high_perf` from 10GB to 10,000GB
                     *     * `storage_opt` from 40GB to 40,000GB */
                    block_type?: string;
                    /** @description The user-supplied label. */
                    label?: string;
                    /** @description The [Region id](#operation/list-regions) where the Block Storage will be created. */
                    region: string;
                    /** @description Size in GB may range between 10 and 40000, depending on the `block_type`. */
                    size_gb: number;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        block?: components["schemas"]["blockstorage"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-block": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Block Storage id](#operation/list-blocks). */
                "block-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        block?: components["schemas"]["blockstorage"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-block": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Block Storage id](#operation/list-blocks). */
                "block-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-block": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Block Storage id](#operation/list-blocks). */
                "block-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The user-supplied label. */
                    label?: string;
                    /** @description New size of the Block Storage in GB. Size may range between 10 and 40000 depending on the `block_type`. */
                    size_gb?: number;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-block": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Block Storage id](#operation/list-blocks). */
                "block-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Attach the Block Storage to this [Instance id](#operation/list-instances). */
                    instance_id: string;
                    /** @description Attach Block Storage without restarting the Instance.
                     *
                     *     |   | Value | Description |
                     *     | - | ----- | ----------- |
                     *     |   | true | Attach live, do not restart the instance. |
                     *     |   | false | Restart the instance and attach the Block Storage. | */
                    live?: boolean;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-block": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Block Storage id](#operation/list-blocks). */
                "block-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Detach Block Storage without restarting the Instance.
                     *
                     *     |   | Value | Description |
                     *     | - | ----- | ----------- |
                     *     |   | true | Detach live, do not restart the instance. |
                     *     |   | false | Restart the instance and detach the Block Storage. | */
                    live?: boolean;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-pullzones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        pull_zones?: components["schemas"]["pullzone"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-pullzone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Block AI bots. */
                    block_ai?: boolean;
                    /** @description Block potentially malicious bots. */
                    block_bad_bots?: boolean;
                    /** @description Enable Cross-origin resource sharing.  CORS is a content validation mechanism used by web browsers to validate file access permissions. The Vultr CDN CORS policy protects your static assets from hotlinking threats by only accepting requests associated with your Origin URL. */
                    cors?: boolean;
                    /** @description Enable Gzip compression to reduce the static content size to speed up the delivery process. */
                    gzip?: boolean;
                    /** @description The user-supplied label. */
                    label: string;
                    /** @description The domain name from which the content stored in the CDN will be pulled. */
                    origin_domain: string;
                    /**
                     * @description The URI scheme of the origin domain.
                     * @enum {string}
                     */
                    origin_scheme: PathsCdnsPullZonesPostRequestBodyApplicationJsonOrigin_scheme;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        pull_zone?: components["schemas"]["pullzone"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-pullzone": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Pull Zone ID](#operation/list-pullzones). */
                "pullzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        pull_zone?: components["schemas"]["pullzone"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-pullzone": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Pull Zone ID](#operation/list-pullzones). */
                "pullzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Optional feature to block AI bots. */
                    block_ai?: boolean;
                    /** @description Optional feature to block potentially malicious bots. */
                    block_bad_bots?: boolean;
                    /** @description Cross-origin resource sharing. */
                    cors?: boolean;
                    /** @description Optional feature to compress files, reduce the amount of data that's transferred. */
                    gzip?: boolean;
                    /** @description The user-supplied label. */
                    label?: string;
                    /** @description a list of [Region ids](#operation/list-regions) for locations to be used for content delivery. */
                    regions?: unknown[];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        pull_zone?: components["schemas"]["pullzone"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-pullzone": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Pull Zone ID](#operation/list-pullzones). */
                "pullzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "purge-pullzone": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Pull Zone ID](#operation/list-pullzones). */
                "pullzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-pushzones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        push_zones?: components["schemas"]["pushzone"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-pushzone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Block AI bots. */
                    block_ai?: boolean;
                    /** @description Block potentially malicious bots. */
                    block_bad_bots?: boolean;
                    /** @description Enable Cross-origin resource sharing.  CORS is a content validation mechanism used by web browsers to validate file access permissions. The Vultr CDN CORS policy protects your static assets from hotlinking threats by only accepting requests associated with your Origin URL. */
                    cors?: boolean;
                    /** @description Enable Gzip compression to reduce the static content size to speed up the delivery process. */
                    gzip?: boolean;
                    /** @description The user-supplied label. */
                    label: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        push_zone?: components["schemas"]["pushzone"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-pushzone": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        push_zone?: components["schemas"]["pushzone"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-pushzone": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Optional feature to block AI bots. */
                    block_ai?: boolean;
                    /** @description Optional feature to block potentially malicious bots. */
                    block_bad_bots?: boolean;
                    /** @description Cross-origin resource sharing. */
                    cors?: boolean;
                    /** @description Optional feature to compress files, reduce the amount of data that's transferred. */
                    gzip?: boolean;
                    /** @description The user-supplied label. */
                    label?: string;
                    /** @description a list of [Region ids](#operation/list-regions) for locations to be used for content delivery. */
                    regions?: unknown[];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        push_zone?: components["schemas"]["pushzone"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-pushzone": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-pushzone-files": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description number of files. */
                        count?: number;
                        files?: components["schemas"]["pushzonefilemeta"][];
                        /** @description total size of all files. */
                        total_size?: number;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-pushzone-upload": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description the name of the file to be uploaded including the file extension. If the uploaded file does not match this name the upload will fail. */
                    name: string;
                    /** @description the size of the file to be uploaded.  If the uploaded file does not match this size the upload will fail. */
                    size: number;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        upload_endpoint?: components["schemas"]["uploadendpoint"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-pushzone": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [File Name](#operation/list-pushzone-files). */
                "file-name": string;
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        file?: components["schemas"]["pushzonefile"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-pushzone-file": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [File Name](#operation/list-pushzone-files). */
                "file-name": string;
                /** @description The [Push Zone ID](#operation/list-pushzones). */
                "pushzone-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-databases": {
        parameters: {
            query?: {
                /** @description Filter by label. */
                label?: string;
                /** @description Filter by [Region id](#operation/list-regions). */
                region?: string;
                /** @description Filter by specific tag. */
                tag?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        databases?: components["schemas"]["database"][];
                        meta?: components["schemas"]["dbaas-meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-database": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The database engine type for the Managed Database.
                     *     * `mysql`
                     *     * `pg`
                     *     * `redis` */
                    database_engine: string;
                    /** @description The version of the chosen database engine type for the Managed Database.
                     *     * MySQL: `8`
                     *     * PostgreSQL: `12` - `15`
                     *     * Redis: `7` */
                    database_engine_version: string;
                    /** @description A user-supplied label for this Managed Database. */
                    label: string;
                    /** @description The day of week for routine maintenance updates.
                     *     * `monday`
                     *     * `tuesday`
                     *     * `wednesday`
                     *     * `thursday`
                     *     * `friday`
                     *     * `saturday`
                     *     * `sunday` */
                    maintenance_dow?: string;
                    /** @description The preferred time (UTC) for routine maintenance updates to occur in 24-hour HH:00 format (e.g. `01:00`, `13:00`, `23:00`, etc.). */
                    maintenance_time?: string;
                    /** @description The number of seconds to denote a slow query when logging is enabled (MySQL engine type only). */
                    mysql_long_query_time?: number;
                    /** @description Require a primary key for all tables on the Managed Database (MySQL engine type only). */
                    mysql_require_primary_key?: boolean;
                    /** @description Enable or disable slow query logging on the Managed Database (MySQL engine type only). */
                    mysql_slow_query_log?: boolean;
                    /** @description A list of SQL modes to enable on the Managed Database (MySQL engine type only).
                     *     * `ALLOW_INVALID_DATES`
                     *     * `ANSI` (Combination Mode)
                     *     * `ANSI_QUOTES`
                     *     * `ERROR_FOR_DIVISION_BY_ZERO`
                     *     * `HIGH_NOT_PRECEDENCE`
                     *     * `IGNORE_SPACE`
                     *     * `NO_AUTO_VALUE_ON_ZERO`
                     *     * `NO_DIR_IN_CREATE`
                     *     * `NO_ENGINE_SUBSTITUTION`
                     *     * `NO_UNSIGNED_SUBTRACTION`
                     *     * `NO_ZERO_DATE`
                     *     * `NO_ZERO_IN_DATE`
                     *     * `ONLY_FULL_GROUP_BY`
                     *     * `PIPES_AS_CONCAT`
                     *     * `REAL_AS_FLOAT`
                     *     * `STRICT_ALL_TABLES`
                     *     * `STRICT_TRANS_TABLES`
                     *     * `TIME_TRUNCATE_FRACTIONAL`
                     *     * `TRADITIONAL` (Combination Mode) */
                    mysql_sql_modes?: string[];
                    /** @description The [Plan id](#operation/list-database-plans) to use when deploying this Managed Database. */
                    plan: string;
                    /** @description Set the data eviction policy for the Managed Database (Redis engine type only) */
                    redis_eviction_policy?: string;
                    /** @description The [Region id](#operation/list-regions) where the Managed Database is located. */
                    region: string;
                    /** @description The user-supplied tag for this Managed Database. */
                    tag?: string;
                    /** @description A list of IP addresses allowed to access the Managed Database in CIDR notation (defaults to /32 if excluded). */
                    trusted_ips?: string[];
                    /** @description The [VPC id](#operation/list-vpcs) to use when deploying this Managed Database. It can also be set to `new` to configure a new VPC network with this deployment. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        database?: components["schemas"]["database"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-database": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        database?: components["schemas"]["database"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-database": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The configured time zone for the Managed Database in TZ database format (e.g. `UTC`, `America/New_York`, `Europe/London`, etc.). */
                    cluster_time_zone?: string;
                    /** @description A user-supplied label for this Managed Database. */
                    label?: string;
                    /** @description The day of week for routine maintenance updates.
                     *     * `monday`
                     *     * `tuesday`
                     *     * `wednesday`
                     *     * `thursday`
                     *     * `friday`
                     *     * `saturday`
                     *     * `sunday` */
                    maintenance_dow?: string;
                    /** @description The preferred time (UTC) for routine maintenance updates to occur in 24-hour HH:00 format (e.g. `01:00`, `13:00`, `23:00`, etc.). */
                    maintenance_time?: string;
                    /** @description The number of seconds to denote a slow query when logging is enabled (MySQL engine type only). */
                    mysql_long_query_time?: number;
                    /** @description Require a primary key for all tables on the Managed Database (MySQL engine type only). */
                    mysql_require_primary_key?: boolean;
                    /** @description Enable or disable slow query logging on the Managed Database (MySQL engine type only). */
                    mysql_slow_query_log?: boolean;
                    /** @description A list of SQL modes to enable on the Managed Database (MySQL engine type only).
                     *     * `ALLOW_INVALID_DATES`
                     *     * `ANSI` (Combination Mode)
                     *     * `ANSI_QUOTES`
                     *     * `ERROR_FOR_DIVISION_BY_ZERO`
                     *     * `HIGH_NOT_PRECEDENCE`
                     *     * `IGNORE_SPACE`
                     *     * `NO_AUTO_VALUE_ON_ZERO`
                     *     * `NO_DIR_IN_CREATE`
                     *     * `NO_ENGINE_SUBSTITUTION`
                     *     * `NO_UNSIGNED_SUBTRACTION`
                     *     * `NO_ZERO_DATE`
                     *     * `NO_ZERO_IN_DATE`
                     *     * `ONLY_FULL_GROUP_BY`
                     *     * `PIPES_AS_CONCAT`
                     *     * `REAL_AS_FLOAT`
                     *     * `STRICT_ALL_TABLES`
                     *     * `STRICT_TRANS_TABLES`
                     *     * `TIME_TRUNCATE_FRACTIONAL`
                     *     * `TRADITIONAL` (Combination Mode) */
                    mysql_sql_modes?: string[];
                    /** @description The [Plan id](#operation/list-database-plans) for this Managed Database. */
                    plan?: string;
                    /** @description Set the data eviction policy for the Managed Database (Redis engine type only) */
                    redis_eviction_policy?: string;
                    /** @description The [Region id](#operation/list-regions) where the Managed Database is located. */
                    region?: string;
                    /** @description The user-supplied tag for this Managed Database. */
                    tag?: string;
                    /** @description A list of IP addresses allowed to access the Managed Database in CIDR notation (defaults to /32 if excluded). */
                    trusted_ips?: string[];
                    /** @description The [VPC id](#operation/list-vpcs) for this Managed Database. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        database?: components["schemas"]["database"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-database": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-advanced-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        available_options?: components["schemas"]["dbaas-available-options"][];
                        configured_options?: Record<string, never>;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-advanced-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: float
                     * @description Accepted values: 0 - 1
                     */
                    autovacuum_analyze_scale_factor?: number;
                    /** @description Accepted values: 0 - 2147483647 */
                    autovacuum_analyze_threshold?: number;
                    /** @description Accepted values: 200000000 - 1500000000 */
                    autovacuum_freeze_max_age?: number;
                    /** @description Accepted values: 1 - 20 */
                    autovacuum_max_workers?: number;
                    /** @description Accepted values: 1 - 86400 */
                    autovacuum_naptime?: number;
                    /** @description Accepted values: -1 - 100 */
                    autovacuum_vacuum_cost_delay?: number;
                    /** @description Accepted values: -1 - 10000 */
                    autovacuum_vacuum_cost_limit?: number;
                    /**
                     * Format: float
                     * @description Accepted values: 0 - 1
                     */
                    autovacuum_vacuum_scale_factor?: number;
                    /** @description Accepted values: 0 - 2147483647 */
                    autovacuum_vacuum_threshold?: number;
                    /** @description Accepted values: 10 - 10000 */
                    bgwriter_delay?: number;
                    /** @description Accepted values: 0 - 2048 */
                    bgwriter_flush_after?: number;
                    /** @description Accepted values: 0 - 1073741823 */
                    bgwriter_lru_maxpages?: number;
                    /**
                     * Format: float
                     * @description Accepted values: 0 - 10
                     */
                    bgwriter_lru_multiplier?: number;
                    /** @description Accepted values: 500 - 1800000 */
                    deadlock_timeout?: number;
                    /**
                     * @description Accepted values:
                     *     * `lz4`
                     *     * `pglz`
                     * @enum {string}
                     */
                    default_toast_compression?: PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonDefault_toast_compression;
                    /** @description Accepted values: 0 - 604800000 */
                    idle_in_transaction_session_timeout?: number;
                    /** @description Accepted values:
                     *     * `true`
                     *     * `false` */
                    jit?: boolean;
                    /** @description Accepted values: -1 - 2147483647 */
                    log_autovacuum_min_duration?: number;
                    /**
                     * @description Accepted values:
                     *     * `TERSE`
                     *     * `DEFAULT`
                     *     * `VERBOSE`
                     * @enum {string}
                     */
                    log_error_verbosity?: PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonLog_error_verbosity;
                    /**
                     * @description Accepted values:
                     *     * `'pid=%p,user=%u,db=%d,app=%a,client=%h '`
                     *     * `'%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '`
                     *     * `'%m [%p] %q[user=%u,db=%d,app=%a] '`
                     * @enum {string}
                     */
                    log_line_prefix?: PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonLog_line_prefix;
                    /** @description Accepted values: -1 - 86400000 */
                    log_min_duration_statement?: number;
                    /** @description Accepted values: 1000 - 4096 */
                    max_files_per_process?: number;
                    /** @description Accepted values: 64 - 6400 */
                    max_locks_per_transaction?: number;
                    /** @description Accepted values: 4 - 64 */
                    max_logical_replication_workers?: number;
                    /** @description Accepted values: 0 - 96 */
                    max_parallel_workers?: number;
                    /** @description Accepted values: 0 - 96 */
                    max_parallel_workers_per_gather?: number;
                    /** @description Accepted values: 64 - 5120 */
                    max_pred_locks_per_transaction?: number;
                    /** @description Accepted values: 0 - 10000 */
                    max_prepared_transactions?: number;
                    /** @description Accepted values: 8 - 64 */
                    max_replication_slots?: number;
                    /** @description Accepted values: 2097152 - 6291456 */
                    max_stack_depth?: number;
                    /** @description Accepted values: 1 - 43200000 */
                    max_standby_archive_delay?: number;
                    /** @description Accepted values: 1 - 43200000 */
                    max_standby_streaming_delay?: number;
                    /** @description Accepted values: 20 - 64 */
                    max_wal_senders?: number;
                    /** @description Accepted values: 8 - 96 */
                    max_worker_processes?: number;
                    /** @description Accepted values: 3600 - 604800 */
                    "pg_partman_bgw.interval"?: number;
                    /** @description Maximum length: 64 characters */
                    "pg_partman_bgw.role"?: string;
                    /**
                     * @description Accepted values:
                     *     * `all`
                     *     * `top`
                     *     * `none`
                     * @enum {string}
                     */
                    "pg_stat_statements.track"?: PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonPg_stat_statementsTrack;
                    /** @description Accepted values: -1 - 2147483647 */
                    temp_file_limit?: number;
                    /** @description Accepted values: 1024 - 10240 */
                    track_activity_query_size?: number;
                    /**
                     * @description Accepted values:
                     *     * `off`
                     *     * `on`
                     * @enum {string}
                     */
                    track_commit_timestamp?: PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonTrack_commit_timestamp;
                    /**
                     * @description Accepted values:
                     *     * `all`
                     *     * `pl`
                     *     * `none`
                     * @enum {string}
                     */
                    track_functions?: PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonTrack_functions;
                    /**
                     * @description Accepted values:
                     *     * `off`
                     *     * `on`
                     * @enum {string}
                     */
                    track_io_timing?: PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonTrack_io_timing;
                    /** @description Accepted values: 0, 5000 - 10800000 */
                    wal_sender_timeout?: number;
                    /** @description Accepted values: 10 - 200 */
                    wal_writer_delay?: number;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        available_options?: components["schemas"]["dbaas-available-options"][];
                        configured_options?: Record<string, never>;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-service-alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The time range to list Managed Database service alerts from. */
                    period: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        alerts?: components["schemas"]["dbaas-alerts"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-backup-information": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        latest_backup?: components["schemas"]["database-latest-backup"];
                        oldest_backup?: components["schemas"]["database-oldest-backup"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-connection-pools": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        connection_pools?: components["schemas"]["connection-pool"][];
                        connections?: components["schemas"]["database-connections"];
                        meta?: components["schemas"]["dbaas-meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-connection-pool": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The logical database associated with the connection pool. */
                    database: string;
                    /** @description The mode for the connection pool.
                     *     * `session`
                     *     * `transaction`
                     *     * `statement` */
                    mode: string;
                    /** @description The name of the connection pool. */
                    name: string;
                    /** @description The size of the connection pool. */
                    size: number;
                    /** @description The database user associated with the connection pool. */
                    username: string;
                };
            };
        };
        responses: {
            /** @description Created */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        connection_pool?: components["schemas"]["connection-pool"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-connection-pool": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [connection pool name](#operation/list-connection-pools). */
                "pool-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        connection_pool?: components["schemas"]["connection-pool"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-connection-pool": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [connection pool name](#operation/list-connection-pools). */
                "pool-name": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The logical database associated with the connection pool. */
                    database?: string;
                    /** @description The mode for the connection pool.
                     *     * `session`
                     *     * `transaction`
                     *     * `statement` */
                    mode?: string;
                    /** @description The size of the connection pool. */
                    size?: number;
                    /** @description The database user associated with the connection pool. */
                    username?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        connection_pool?: components["schemas"]["connection-pool"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-connection-pool": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [connection pool name](#operation/list-connection-pools). */
                "pool-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-database-dbs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        dbs?: components["schemas"]["database-db"][];
                        meta?: components["schemas"]["dbaas-meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-database-db": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The name of the logical database. */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Created */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        db?: components["schemas"]["database-db"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-database-db": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [logical database name](#operation/list-database-dbs). */
                "db-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        db?: components["schemas"]["database-db"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-database-db": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [logical database name](#operation/list-database-dbs). */
                "db-name": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "database-fork": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [backup date](#operation/get-backup-information) to use when restoring the Managed Database in YYYY-MM-DD date format. Required for `pitr` type requests. */
                    date?: string;
                    /** @description A user-supplied label for this Managed Database. */
                    label: string;
                    /** @description The [Plan id](#operation/list-database-plans) to use when deploying this Managed Database. */
                    plan: string;
                    /** @description The [Region id](#operation/list-regions) where the Managed Database is located. */
                    region: string;
                    /** @description The [backup time](#operation/get-backup-information) to use when restoring the Managed Database in HH-MM-SS time format (24-hour UTC). Required for `pitr` type requests. */
                    time?: string;
                    /** @description The type of backup restoration to use for this Managed Database.
                     *     * `pitr`: Point-in-time recovery
                     *     * `basebackup`: Latest backup (default if omitted) */
                    type?: string;
                    /** @description The [VPC id](#operation/list-vpcs) to use when deploying this Managed Database. It can also be set to `new` to configure a new VPC network with this deployment. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        database?: components["schemas"]["database"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-maintenance-updates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A list of available maintenance updates for the Managed Database. */
                        available_updates?: string[];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-maintenance-updates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A message indicating whether the maintenance updates were successfully initialized. */
                        message?: string;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "view-migration-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        migration?: components["schemas"]["dbaas-migration"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "database-start-migration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The database of the source server. Required for MySQL/PostgreSQL engine types, but excluded for Redis. */
                    database?: string;
                    /** @description The host name of the source server. */
                    host: string;
                    /** @description Comma-separated list of ignored databases on the source server. Excluded for Redis engine types. */
                    ignored_databases?: string;
                    /** @description The password of the source server. */
                    password: string;
                    /** @description The connection port of the source server. */
                    port: number;
                    /** @description The true/false value for whether SSL is needed to connect to the source server. */
                    ssl: boolean;
                    /** @description The username of the source server. Uses `default` for Redis if left empty or unset. */
                    username: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        migration?: components["schemas"]["dbaas-migration"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "database-detach-migration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "database-promote-read-replica": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "database-add-read-replica": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A user-supplied label for this Managed Database. */
                    label: string;
                    /** @description The [Region id](#operation/list-regions) where the Managed Database is located. */
                    region: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        database?: components["schemas"]["database"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "database-restore-from-backup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [backup date](#operation/get-backup-information) to use when restoring the Managed Database in YYYY-MM-DD date format. Required for `pitr` type requests. */
                    date?: string;
                    /** @description A user-supplied label for this Managed Database. */
                    label: string;
                    /** @description The [backup time](#operation/get-backup-information) to use when restoring the Managed Database in HH-MM-SS time format (24-hour UTC). Required for `pitr` type requests. */
                    time?: string;
                    /** @description The type of backup restoration to use for this Managed Database.
                     *     * `pitr`: Point-in-time recovery
                     *     * `basebackup`: Latest backup (default if omitted) */
                    type?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        database?: components["schemas"]["database"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-database-usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        usage?: components["schemas"]["database-usage"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-database-users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["dbaas-meta"];
                        users?: components["schemas"]["database-user"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-database-user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The password encryption type for the database user (MySQL engine type only).
                     *     * `caching_sha2_password` (default if omitted)
                     *     * `mysql_native_password` */
                    encryption?: string;
                    /** @description The password for the database user. This can be omitted to auto-generate a secure password. */
                    password?: string;
                    /** @description The username of the database user. */
                    username: string;
                };
            };
        };
        responses: {
            /** @description Created */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user?: components["schemas"]["database-user"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-database-user": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [database user](#operation/list-database-users). */
                username: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user?: components["schemas"]["database-user"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-database-user": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [database user](#operation/list-database-users). */
                username: string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The password for the database user. This can be empty to auto-generate a new secure password. */
                    password: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user?: components["schemas"]["database-user"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-database-user": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [database user](#operation/list-database-users). */
                username: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "set-database-user-acl": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Managed Database ID](#operation/list-databases). */
                "database-id": string;
                /** @description The [database user](#operation/list-database-users). */
                username: string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A list of rules for command categories. */
                    redis_acl_categories?: string[];
                    /** @description A list of publish/subscribe channel patterns. */
                    redis_acl_channels?: string[];
                    /** @description A list of rules for individual commands. */
                    redis_acl_commands?: string[];
                    /** @description A list of key access rules. */
                    redis_acl_keys?: string[];
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user?: components["schemas"]["database-user"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-available-versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A list of available versions greater than the current version of the Managed Database. */
                        available_versions?: string[];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-version-upgrade": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The version number to upgrade the Managed Database to. */
                    version: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A message indicating whether the version upgrade was successfully initialized. */
                        message?: string;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-database-plans": {
        parameters: {
            query?: {
                /** @description Filter by engine type
                 *
                 *     * `mysql`
                 *     * `pg`
                 *     * `redis`. */
                engine?: string;
                /** @description Filter by number of nodes. */
                nodes?: number;
                /** @description Filter by [Region id](#operation/list-regions). */
                region?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        plans?: components["schemas"]["dbaas-plan"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-dns-domains": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500.
                 *      */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        domains?: components["schemas"]["domain"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-dns-domain": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Enable or disable DNSSEC.
                     *
                     *     * enabled
                     *     * disabled (default) */
                    dns_sec?: string;
                    /** @description Your registered DNS Domain name. */
                    domain: string;
                    /** @description The default IP address for your DNS Domain. If omitted an empty domain zone will be created. */
                    ip?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        domain?: components["schemas"]["domain"];
                    };
                };
            };
        };
    };
    "get-dns-domain": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        domain?: components["schemas"]["domain"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-dns-domain": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Enable or disable DNSSEC.
                     *
                     *     * enabled
                     *     * disabled */
                    dns_sec: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-dns-domain": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-dns-domain-dnssec": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        dns_sec?: string[];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-dns-domain-records": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        records?: components["schemas"]["dns-record"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-dns-domain-record": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The DNS data for this record type. */
                    data: string;
                    /** @description The hostname for this DNS record. */
                    name: string;
                    /** @description DNS priority. Does not apply to all record types. (Only required for MX and SRV) */
                    priority?: number;
                    /** @description Time to Live in seconds. */
                    ttl?: number;
                    /** @description The DNS record type.
                     *
                     *     * A
                     *     * AAAA
                     *     * CNAME
                     *     * NS
                     *     * MX
                     *     * SRV
                     *     * TXT
                     *     * CAA
                     *     * SSHFP */
                    type: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        record?: components["schemas"]["dns-record"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-dns-domain-record": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
                /** @description The [DNS Record id](#operation/list-dns-domain-records). */
                "record-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        record?: components["schemas"]["dns-record"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-dns-domain-record": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
                /** @description The [DNS Record id](#operation/list-dns-domain-records). */
                "record-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-dns-domain-record": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
                /** @description The [DNS Record id](#operation/list-dns-domain-records). */
                "record-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The DNS data for this record type. */
                    data?: string;
                    /** @description The hostname for this DNS record. */
                    name?: string;
                    /** @description DNS priority. Does not apply to all record types. */
                    priority?: number;
                    /** @description Time to Live in seconds. */
                    ttl?: number;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-dns-domain-soa": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        dns_soa?: components["schemas"]["dns-soa"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-dns-domain-soa": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [DNS Domain](#operation/list-dns-domains). */
                "dns-domain": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Set the contact email address. */
                    email?: string;
                    /** @description Set the primary nameserver. */
                    nsprimary?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-firewall-groups": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        firewall_groups?: components["schemas"]["firewall-group"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-firewall-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description User-supplied description of this Firewall Group. */
                    description?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        firewall_group?: components["schemas"]["firewall-group"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-firewall-group": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        firewall_group?: components["schemas"]["firewall-group"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-firewall-group": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description User-supplied description of this Firewall Group. */
                    description: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-firewall-group": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-firewall-group-rules": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        firewall_rules?: components["schemas"]["firewall-rule"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "post-firewalls-firewall-group-id-rules": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The type of IP rule.
                     *
                     *     * v4
                     *     * v6 */
                    ip_type: string;
                    /** @description User-supplied notes for this rule. */
                    notes?: string;
                    /** @description TCP/UDP only. This field can be a specific port or a colon separated port range. */
                    port?: string;
                    /** @description The protocol for this rule.
                     *
                     *     * ICMP
                     *     * TCP
                     *     * UDP
                     *     * GRE
                     *     * ESP
                     *     * AH
                     *      */
                    protocol: string;
                    /** @description If the source string is given a value of "cloudflare" subnet and subnet_size will both be ignored.
                     *     Possible values:
                     *
                     *     |   | Value | Description |
                     *     | - | ------ | ------------- |
                     *     |   | "" | Use the value from `subnet` and `subnet_size`. |
                     *     |   | cloudflare | Allow all of Cloudflare's IP space through the firewall |
                     *     |   | [Load Balancer id](#operation/list-load-balancers) | Provide a load balancer ID to use its IPs |
                     *      */
                    source?: string;
                    /** @description IP address representing a subnet. The IP address format must match with the "ip_type" parameter value. */
                    subnet: string;
                    /** @description The number of bits for the netmask in CIDR notation. Example: 32 */
                    subnet_size: number;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        firewall_rule?: components["schemas"]["firewall-rule"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-firewall-group-rule": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
                /** @description The [Firewall Rule id](#operation/list-firewall-group-rules). */
                "firewall-rule-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        firewall_rule?: components["schemas"]["firewall-rule"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-firewall-group-rule": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Firewall Group id](#operation/list-firewall-groups). */
                "firewall-group-id": string;
                /** @description The [Firewall Rule id](#operation/list-firewall-group-rules). */
                "firewall-rule-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-inference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        subscriptions?: components["schemas"]["inference-subscription"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-inference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A user-supplied label for this Serverless Inference subscription. */
                    label: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        subscription?: components["schemas"]["inference-subscription"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-inference": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Inference ID](#operation/list-inference). */
                "inference-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        subscription?: components["schemas"]["inference-subscription"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-inference": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Inference ID](#operation/list-inference). */
                "inference-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-inference": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Inference ID](#operation/list-inference). */
                "inference-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A user-supplied label for this Serverless Inference subscription. */
                    label?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        subscription?: components["schemas"]["inference-subscription"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-inference-usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        usage?: components["schemas"]["inference-usage"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-instances": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Filter by [Firewall group id](#operation/list-firewall-groups). */
                firewall_group_id?: string;
                /** @description Filter by hostname. */
                hostname?: string;
                /** @description Filter by label. */
                label?: string;
                /** @description Filter by main ip address. */
                main_ip?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
                /** @description Filter by [Region id](#operation/list-regions). */
                region?: string;
                /** @description Set to `true` to show pending charges. */
                show_pending_charges?: boolean;
                /**
                 * @deprecated
                 * @description Filter by specific tag.
                 */
                tag?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        instances?: components["schemas"]["instance"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-instance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Notify by email after deployment.
                     *
                     *     * true
                     *     * false (default) */
                    activation_email?: boolean;
                    /** @description The [Application id](#operation/list-applications) to use when deploying this instance. */
                    app_id?: number;
                    /** @description The [app variable inputs](#operation/list-marketplace-app-variables) for configuring the marketplace app (name/value pairs). */
                    app_variables?: Record<string, never>;
                    /**
                     * @deprecated
                     * @description Use `attach_vpc` instead. An array of [Private Network ids](#operation/list-networks) to attach to this Instance. This parameter takes precedence over `enable_private_network`. Please choose one parameter.
                     */
                    attach_private_network?: string[];
                    /** @description An array of [VPC IDs](#operation/list-vpcs) to attach to this Instance. This parameter takes precedence over `enable_vpc`. Please choose one parameter. */
                    attach_vpc?: string[];
                    /** @description An array of [VPC IDs](#operation/list-vpc2) to attach to this Instance. This parameter takes precedence over `enable_vpc2`. Please choose one parameter. */
                    attach_vpc2?: string[];
                    /** @description Enable automatic backups for the instance.
                     *
                     *     * enabled
                     *     * disabled */
                    backups?: string;
                    /** @description Enable DDoS protection (there is an additional charge for this).
                     *
                     *     * true
                     *     * false */
                    ddos_protection?: boolean;
                    /** @description Don't set up a public IPv4 address when IPv6 is enabled. Will not do anything unless `enable_ipv6` is also `true`.
                     *
                     *     * true */
                    disable_public_ipv4?: boolean;
                    /** @description Enable IPv6.
                     *
                     *     * true */
                    enable_ipv6?: boolean;
                    /**
                     * @deprecated
                     * @description Use `enable_vpc` instead.
                     *
                     *     If `true`, private networking support will be added to the new server.
                     *
                     *     This parameter attaches a single network. When no network exists in the region, it will be automatically created.
                     *
                     *     If there are multiple private networks in the instance's region, use `attach_private_network` instead to specify a network.
                     */
                    enable_private_network?: boolean;
                    /** @description If `true`, VPC support will be added to the new server.
                     *
                     *     This parameter attaches a single VPC. When no VPC exists in the region, it will be automatically created.
                     *
                     *     If there are multiple VPCs in the instance's region, use `attach_vpc` instead to specify a network. */
                    enable_vpc?: boolean;
                    /** @description If `true`, VPC 2.0 support will be added to the new server.
                     *
                     *     This parameter attaches a single VPC 2.0 network. When no VPC 2.0 network exists in the region, it will be automatically created.
                     *
                     *     If there are multiple VPC 2.0 networks in the instance's region, use `attach_vpc2` instead to specify a network. */
                    enable_vpc2?: boolean;
                    /** @description The [Firewall Group id](#operation/list-firewall-groups) to attach to this Instance. */
                    firewall_group_id?: string;
                    /** @description The hostname to use when deploying this instance. */
                    hostname?: string;
                    /** @description The [Application image_id](#operation/list-applications) to use when deploying this instance. */
                    image_id?: string;
                    /** @description The URL location of the iPXE chainloader. */
                    ipxe_chain_url?: string;
                    /** @description The [ISO id](#operation/list-isos) to use when deploying this instance. */
                    iso_id?: string;
                    /** @description A user-supplied label for this instance. */
                    label?: string;
                    /** @description The [Operating System id](#operation/list-os) to use when deploying this instance. */
                    os_id?: number;
                    /** @description The [Plan id](#operation/list-plans) to use when deploying this instance. */
                    plan: string;
                    /** @description The [Region id](#operation/list-regions) where the Instance is located. */
                    region: string;
                    /** @description ID of the floating IP to use as the main IP of this server. */
                    reserved_ipv4?: string;
                    /** @description The [Startup Script id](#operation/list-startup-scripts) to use when deploying this instance. */
                    script_id?: string;
                    /** @description The [Snapshot id](#operation/list-snapshots) to use when deploying the instance. */
                    snapshot_id?: string;
                    /** @description The [SSH Key id](#operation/list-ssh-keys) to install on this instance. */
                    sshkey_id?: string[];
                    /**
                     * @deprecated
                     * @description Use `tags` instead. The user-supplied tag.
                     */
                    tag?: string;
                    /** @description Tags to apply to the instance */
                    tags?: string[];
                    /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) to attach to this instance. */
                    user_data?: string;
                    /** @description Linux-only: The user scheme used for logging into this instance. By default, the "root" user is configured. Alternatively, a limited user with sudo permissions can be selected.
                     *
                     *     * root
                     *     * limited */
                    user_scheme?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        instance?: components["schemas"]["instance"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        instance?: components["schemas"]["instance"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Reinstall the instance with this [Application id](#operation/list-applications). */
                    app_id?: number;
                    /**
                     * @deprecated
                     * @description Use `attach_vpc` instead. An array of [Private Network ids](#operation/list-networks) to attach to this Instance. This parameter takes precedence over `enable_private_network`. Please choose one parameter.
                     */
                    attach_private_network?: string[];
                    /** @description An array of [VPC IDs](#operation/list-vpcs) to attach to this Instance. This parameter takes precedence over `enable_vpc`. Please choose one parameter. */
                    attach_vpc?: string[];
                    /** @description An array of [VPC IDs](#operation/list-vpc2) to attach to this Instance. This parameter takes precedence over `enable_vpc2`. Please choose one parameter. */
                    attach_vpc2?: string[];
                    /** @description Enable automatic backups for the instance.
                     *
                     *     * enabled
                     *     * disabled */
                    backups?: string;
                    /** @description Enable DDoS Protection (there is an additional charge for this).
                     *
                     *     * true
                     *     * false */
                    ddos_protection?: boolean;
                    /**
                     * @deprecated
                     * @description Use `detach_vpc` instead. An array of [Private Network ids](#operation/list-networks) to detach from this Instance. This parameter takes precedence over `enable_private_network`.
                     */
                    detach_private_network?: string[];
                    /** @description An array of [VPC IDs](#operation/list-vpcs) to detach from this Instance. This parameter takes precedence over `enable_vpc`. */
                    detach_vpc?: string[];
                    /** @description An array of [VPC IDs](#operation/list-vpc2) to detach from this Instance. This parameter takes precedence over `enable_vpc2`. */
                    detach_vpc2?: string[];
                    /** @description Enable IPv6.
                     *
                     *     * true */
                    enable_ipv6?: boolean;
                    /**
                     * @deprecated
                     * @description Use `enable_vpc` instead.
                     *
                     *     If `true`, private networking support will be added to the new server.
                     *
                     *     This parameter attaches a single network. When no network exists in the region, it will be automatically created.
                     *
                     *     If there are multiple private networks in the instance's region, use `attach_private_network` instead to specify a network.
                     */
                    enable_private_network?: boolean;
                    /** @description If `true`, VPC support will be added to the new server.
                     *
                     *     This parameter attaches a single VPC. When no VPC exists in the region, it will be automatically created.
                     *
                     *     If there are multiple VPCs in the instance's region, use `attach_vpc` instead to specify a VPC. */
                    enable_vpc?: boolean;
                    /** @description If `true`, VPC 2.0 support will be added to the new server.
                     *
                     *     This parameter attaches a single VPC 2.0 netowrk. When no VPC 2.0 network exists in the region, it will be automatically created.
                     *
                     *     If there are multiple VPC 2.0 networks in the instance's region, use `attach_vpc2` instead to specify a VPC 2.0 network. */
                    enable_vpc2?: boolean;
                    /** @description The [Firewall Group id](#operation/list-firewall-groups) to attach to this Instance. */
                    firewall_group_id?: string;
                    /** @description Reinstall the instance with this [Application image_id](#operation/list-applications). */
                    image_id?: string;
                    /** @description The user supplied label. */
                    label?: string;
                    /** @description Reinstall the instance with this [ISO id](#operation/list-isos). */
                    os_id?: string;
                    /** @description Upgrade the instance with this [Plan id](#operation/list-plans). */
                    plan?: string;
                    /**
                     * @deprecated
                     * @description Use `tags` instead. The user-supplied tag.
                     */
                    tag?: string;
                    /** @description Tags to apply to the instance. */
                    tags?: string[];
                    /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) to attach to this instance. */
                    user_data?: string;
                    /** @description Linux-only: The user scheme used for logging into this instance. The instance must be reinstalled for this change to take effect.
                     *
                     *     * root
                     *     * limited */
                    user_scheme?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        instance?: components["schemas"]["instance"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance-backup-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        backup_schedule?: components["schemas"]["backup-schedule"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-instance-backup-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Day of month to run. Use values between 1 and 28. */
                    dom?: number;
                    /** @description Day of week to run.
                     *
                     *     |   | Value | Description |
                     *     | - | ------ | ------------- |
                     *     |   | 1 | Sunday |
                     *     |   | 2 | Monday |
                     *     |   | 3 | Tuesday |
                     *     |   | 4 | Wednesday |
                     *     |   | 5 | Thursday |
                     *     |   | 6 | Friday |
                     *     |   | 7 | Saturday | */
                    dow?: number;
                    /** @description Hour of day to run in UTC. */
                    hour?: number;
                    /** @description Type of backup schedule:
                     *
                     *     |   | Value | Description |
                     *     | - | ------ | ------------- |
                     *     |   | daily | Back up once per day at `hour`. |
                     *     |   | weekly | Back up once per week on `dow` at `hour`. |
                     *     |   | monthly | Back up each month at `dom` at `hour`. |
                     *     |   | daily\_alt\_even | Back up on even dates at `hour`. |
                     *     |   | daily\_alt\_odd | Back up on odd dates at `hour`. | */
                    type: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance-bandwidth": {
        parameters: {
            query?: {
                /** @description The range of days to include, represented as the number of days relative to the current date. Default 30, Minimum 1 and Max 180. */
                date_range?: number;
            };
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description This object will contain objects that represent days in the month (UTC). The date is denoted by the nested objects keys. */
                        bandwidth?: {
                            "2020-10-10"?: components["schemas"]["bandwidth"];
                            "2020-10-11"?: components["schemas"]["bandwidth"];
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "halt-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance-ipv4": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500.
                 *      */
                per_page?: number;
                /** @description If `true`, includes information about the public network adapter (such as MAC address) with the `main_ip` entry. */
                public_network?: boolean;
            };
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ipv4s?: components["schemas"]["baremetal-ipv4"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-instance-ipv4": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Set if the server is rebooted immediately after the IPv4 address is created.
                     *
                     *     * true (default)
                     *     * false */
                    reboot?: boolean;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-instance-ipv4": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
                /** @description The IPv4 address. */
                ipv4: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-instance-reverse-ipv4": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The IPv4 address. */
                    ip: string;
                    /** @description The IPv4 reverse entry. */
                    reverse: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "post-instances-instance-id-ipv4-reverse-default": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    ip: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance-ipv6": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ipv6s?: components["schemas"]["baremetal-ipv6"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-instance-ipv6-reverse": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reverse_ipv6s?: {
                            /** @description The IPv6 address. */
                            ip?: string;
                            /** @description The IPv6 reverse entry. */
                            reverse?: string;
                        }[];
                    };
                };
            };
        };
    };
    "create-instance-reverse-ipv6": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The IPv6 address in full, expanded format. */
                    ip: string;
                    /** @description The IPv6 reverse entry. */
                    reverse: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-instance-reverse-ipv6": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
                /** @description The IPv6 address. */
                ipv6: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance-iso-status": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        iso_status?: {
                            /** @description The [ISO id](#operation/list-isos). */
                            iso_id?: string;
                            /** @description The status of this ISO.
                             *     * ready
                             *     * attached */
                            state?: string;
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-instance-iso": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [ISO id](#operation/list-isos) to attach to this Instance. */
                    iso_id?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        iso_status?: {
                            /** @description The [ISO id](#operation/list-isos) being attached. */
                            iso_id?: string;
                            /** @description State of the ISO
                             *
                             *     * ismounting */
                            state?: string;
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-instance-iso": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        iso_status?: {
                            /** @description State of the ISO
                             *
                             *     * isunmounting */
                            state?: string;
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance-neighbors": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description An array of [Instance ids](#operation/list-instances) in the same location as this Instance. */
                        neighbors?: string[];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-instance-private-networks": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        private_networks?: components["schemas"]["private-networks"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-instance-network": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [Private Network id](#operation/list-networks) to attach to this Instance. */
                    network_id?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-instance-network": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [Private Network id](#operation/list-networks) to detach from this Instance. */
                    network_id?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "reboot-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "reinstall-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The hostname to use when reinstalling this instance. */
                    hostname?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        instance?: components["schemas"]["instance"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "restore-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [Backup id](#operation/list-backups) used to restore this instance. */
                    backup_id?: string;
                    /** @description The [Snapshot id](#operation/list-snapshots) used to restore this instance. */
                    snapshot_id?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status?: {
                            restore_id?: string;
                            restore_type?: string;
                            status?: string;
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance-upgrades": {
        parameters: {
            query?: {
                /** @description Filter upgrade by type:
                 *
                 *     - all (applications, os, plans)
                 *     - applications
                 *     - os
                 *     - plans */
                type?: string;
            };
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        upgrades?: {
                            applications?: unknown[];
                            os?: unknown[];
                            plans?: unknown[];
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-instance-userdata": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user_data?: {
                            /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) attached to this instance. */
                            data?: string;
                        };
                    };
                };
            };
        };
    };
    "list-instance-vpc2": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        vpcs?: components["schemas"]["instance-vpc2"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-instance-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The IP address to use for this instance on the attached VPC 2.0 network.   */
                    ip_address?: string;
                    /** @description The [VPC ID](#operation/list-vpc2) to attach to this Instance. */
                    vpc_id: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-instance-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [VPC ID](#operation/list-vpc2) to detach from this Instance. */
                    vpc_id: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-instance-vpcs": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        vpcs?: components["schemas"]["instance-vpc"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-instance-vpc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [VPC ID](#operation/list-vpcs) to attach to this Instance. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-instance-vpc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "instance-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [VPC ID](#operation/list-vpcs) to detach from this Instance. */
                    vpc_id?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "halt-instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [Instance IDs](#operation/list-instances) to halt. */
                    instance_ids?: string[];
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "reboot-instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [Instance IDs](#operation/list-instances) to reboot. */
                    instance_ids?: string[];
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [Instance IDs](#operation/list-instances) to start. */
                    instance_ids?: string[];
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-isos": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        isos?: components["schemas"]["iso"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-iso": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Public URL location of the ISO image to download. Example: https://example.com/my-iso.iso */
                    url: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        iso?: components["schemas"]["iso"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-public-isos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        public_isos?: components["schemas"]["iso-public"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "iso-get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [ISO id](#operation/list-isos). */
                "iso-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        iso?: components["schemas"]["iso"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-iso": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [ISO id](#operation/list-isos). */
                "iso-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-kubernetes-clusters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vke_clusters?: components["schemas"]["vke-cluster"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-kubernetes-cluster": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Request Body */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Whether a [Firewall Group](#tag/firewall) should be deployed and managed by this cluster
                     *     * true
                     *     * false (default) */
                    enable_firewall?: boolean;
                    /** @description Whether a highly available control planes configuration should be deployed
                     *     * true
                     *     * false (default) */
                    ha_controlplanes?: boolean;
                    /** @description The label for your Kubernetes cluster. */
                    label?: string;
                    node_pools?: {
                        /** @description Option to use the auto scaler with your cluster. Default false. */
                        auto_scaler?: boolean;
                        /** @description Label for this nodepool. You cannot change the label after a nodepool is created. You cannot have duplicate node pool labels in the same cluster. */
                        label: string;
                        /** @description Auto scaler field for maximum nodes you want for your cluster. Default 1. */
                        max_nodes?: number;
                        /** @description Auto scaler field for minimum nodes you want for your cluster. Default 1. */
                        min_nodes?: number;
                        /** @description Number of instances to deploy in this nodepool. Minimum of 1 node required, but at least 3 is recommended. */
                        node_quantity: number;
                        /** @description Plan you want this nodepool to use. Note: minimum plan must be $10 */
                        plan: string;
                        /** @description Tag for node pool */
                        tag?: string;
                    }[];
                    /** @description Region you want to deploy VKE in. See [Regions](#tag/region) for more information. */
                    region: string;
                    /** @description Version of Kubernetes you want to deploy. */
                    version: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vke_cluster?: components["schemas"]["vke-cluster"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-kubernetes-clusters": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vke_cluster?: components["schemas"]["vke-cluster"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-kubernetes-cluster": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /** @description Request Body */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Label for the Kubernetes cluster */
                    label: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-kubernetes-cluster": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-kubernetes-available-upgrades": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Array of available upgrade version strings */
                        available_upgrades?: string[];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-kubernetes-clusters-config": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Base64 encoded KubeConfig */
                        kube_config?: string;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-kubernetes-cluster-vke-id-delete-with-linked-resources": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-nodepools": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        node_pools?: components["schemas"]["nodepools"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-nodepools": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /** @description Request Body */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Option to use the auto scaler with your cluster. Default false. */
                    auto_scaler?: boolean;
                    /** @description Label for the nodepool. You cannot change the label after a nodepool is created. You cannot have duplicate node pool labels in the same cluster. */
                    label: string;
                    /** @description Map of key/value pairs defining labels to automatically apply to all nodes in this nodepool. Labels will be applied to both new and existing nodes. */
                    labels?: Record<string, never>;
                    /** @description Auto scaler field for maximum nodes you want for your cluster. Default 1. */
                    max_nodes?: number;
                    /** @description Auto scaler field for minimum nodes you want for your cluster. Default 1. */
                    min_nodes?: number;
                    /** @description Number of instances in this nodepool */
                    node_quantity: number;
                    /** @description Plan that this nodepool will use */
                    plan: string;
                    /** @description Tag for node pool */
                    tag?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        node_pool?: components["schemas"]["nodepools"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-nodepool": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [NodePool ID](#operation/get-nodepools). */
                "nodepool-id": string;
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        node_pool?: components["schemas"]["nodepools"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-nodepool": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [NodePool ID](#operation/get-nodepools). */
                "nodepool-id": string;
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-nodepool": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [NodePool ID](#operation/get-nodepools). */
                "nodepool-id": string;
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /** @description Request Body */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Option to use the auto scaler for your cluster. Default false. */
                    auto_scaler?: boolean;
                    /** @description Map of key/value pairs defining labels to automatically apply to all nodes in this nodepool. Labels will be applied to both new and existing nodes. */
                    labels?: Record<string, never>;
                    /** @description Auto scaler field for maximum nodes you want for your cluster. Default 1. */
                    max_nodes?: number;
                    /** @description Auto scaler field for minimum nodes you want for your cluster. Default 1. */
                    min_nodes?: number;
                    /** @description Number of instances in the NodePool. Minimum of 1 is required, but at least 3 is recommended. */
                    node_quantity?: number;
                    /** @description Tag for your node pool */
                    tag?: string;
                };
                "application/xml": {
                    /** @description Number of instances in the nodepool. Minimum of 1 is required, but at least 3 is recommended. */
                    node_quantity: number;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        node_pool?: components["schemas"]["nodepools"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-nodepool-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Instance ID](#operation/list-instances). */
                "node-id": string;
                /** @description The [NodePool ID](#operation/get-nodepools). */
                "nodepool-id": string;
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "recycle-nodepool-instance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Node ID */
                "node-id": string;
                /** @description The [NodePool ID](#operation/get-nodepools). */
                "nodepool-id": string;
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-kubernetes-resources": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        resources?: {
                            block_storage?: {
                                /** @description Date the block storage volume was created */
                                date_created?: string;
                                /** @description Unique identifier for the block storage volume */
                                id?: string;
                                /** @description Label given to the block storage volume */
                                label?: string;
                                /** @description Status of the block storage volume */
                                status?: string;
                            }[];
                            load_balancer?: {
                                /** @description Date the load balancer was created */
                                date_created?: string;
                                /** @description Unique identifier for the load balancer */
                                id?: string;
                                /** @description Label given to the load balancer */
                                label?: string;
                                /** @description Status of the load balancer */
                                status?: string;
                            }[];
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-kubernetes-cluster-upgrade": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VKE ID](#operation/list-kubernetes-clusters). */
                "vke-id": string;
            };
            cookie?: never;
        };
        /** @description Request Body */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The version you're upgrading to. */
                    upgrade_version: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-kubernetes-versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        versions?: string[];
                    };
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-load-balancers": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500.
                 *      */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        load_balancers?: components["schemas"]["loadbalancer"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-load-balancer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The Auto SSL configuration. Must be using Vultr DNS for Auto SSL. */
                    auto_ssl?: {
                        /** @description (optional) Subdomain to append to the domain zone. */
                        domain_sub?: string;
                        /** @description The domain zone. (example.com) */
                        domain_zone?: string;
                    };
                    /** @description The balancing algorithm.
                     *
                     *     * roundrobin (default)
                     *     * leastconn */
                    balancing_algorithm?: string;
                    /** @description An array of firewall rule objects. */
                    firewall_rules?: {
                        /** @description The type of IP rule.
                         *
                         *     * v4
                         *     * v6 */
                        ip_type?: string;
                        /** @description Port for this rule. */
                        port?: number;
                        /** @description If the source string is given a value of "cloudflare" then cloudflare IPs will be supplied. Otherwise enter a IP address with subnet size that you wish to permit through the firewall.
                         *
                         *     Possible values:
                         *
                         *     |   | Value | Description |
                         *     | - | ------ | ------------- |
                         *     |   | "192.168.1.1/16" | Ip address with a subnet size. |
                         *     |   | cloudflare | Allow all of Cloudflare's IP space through the firewall | */
                        source?: string;
                    }[];
                    /** @description An array of forwarding rule objects. */
                    forwarding_rules?: {
                        /** @description The port number destination on the backend server. */
                        backend_port?: number;
                        /** @description The protocol destination on the backend server.
                         *
                         *     * HTTP
                         *     * HTTPS
                         *     * TCP */
                        backend_protocol?: string;
                        /** @description The port number on the Load Balancer to forward to the backend. */
                        frontend_port?: number;
                        /** @description The protocol on the Load Balancer to forward to the backend.
                         *
                         *     * HTTP
                         *     * HTTPS
                         *     * TCP */
                        frontend_protocol?: string;
                    }[];
                    /** @description The health check configuration. See [Load Balancer documentation](https://www.vultr.com/docs/vultr-load-balancers/#Load_Balancer_Configuration). */
                    health_check?: {
                        /** @description Interval between health checks. */
                        check_interval?: number;
                        /** @description Number of times a check must succeed before returning to healthy status. */
                        healthy_threshold?: number;
                        /** @description HTTP Path to check. Only applies if protocol is HTTP, or HTTPS. */
                        path?: string;
                        /** @description The port to use for health checks. */
                        port?: number;
                        /** @description The protocol to use for health checks.
                         *
                         *     * HTTPS
                         *     * HTTP
                         *     * TCP */
                        protocol?: string;
                        /** @description Timeout before health check fails. */
                        response_timeout?: number;
                        /** @description Number times a check must fail before becoming unhealthy. */
                        unhealthy_threshold?: number;
                    };
                    /** @description If `true`, this will enable HTTP2 traffic. You must have an HTTPS forwarding rule combo (HTTPS -> HTTPS) to enable this option.
                     *
                     *     * true
                     *     * false */
                    http2?: boolean;
                    /** @description If `true`, this will enable HTTP3/QUIC traffic. You must have HTTP2 enabled.
                     *
                     *     * true
                     *     * false */
                    http3?: boolean;
                    /** @description An array of instances IDs that you want attached to the load balancer. */
                    instances?: string[];
                    /** @description Label for your Load Balancer. */
                    label?: string;
                    /** @description The number of nodes to add to the load balancer (1-99), must be an odd number. This defaults to 1. */
                    nodes?: number;
                    /**
                     * @deprecated
                     * @description Use `vpc` instead. ID of the private network you wish to use. If private_network is omitted it will default to the public network.
                     */
                    private_network?: string;
                    /** @description If `true`, you must configure backend nodes to accept Proxy protocol.
                     *
                     *     * true
                     *     * false (Default) */
                    proxy_protocol?: boolean;
                    /** @description The [Region id](#operation/list-regions) to create this Load Balancer. */
                    region: string;
                    /** @description An SSL certificate to install on the Load Balancer. */
                    ssl?: {
                        /** @description The SSL certificate. */
                        certificate?: string;
                        /** @description The SSL certificate base64 encoded. (Base64 encoded values should not be used alongside with non-Base64 encoded values) */
                        certificate_b64?: string;
                        /** @description The certificate chain. */
                        chain?: string;
                        /** @description The certificate chain base64 encoded. (Base64 encoded values should not be used alongside with non-Base64 encoded values) */
                        chain_b64?: string;
                        /** @description The private key. */
                        private_key?: string;
                        /** @description The private key base64 encoded. (Base64 encoded values should not be used alongside with non-Base64 encoded values) */
                        private_key_b64?: string;
                    };
                    /** @description If `true`, this will redirect all HTTP traffic to HTTPS. You must have an HTTPS rule and SSL certificate installed on the load balancer to enable this option.
                     *
                     *     * true
                     *     * false */
                    ssl_redirect?: boolean;
                    /** @description Enables sticky sessions for your load balancer when a cookie_name is provided. */
                    sticky_session?: {
                        /** @description The cookie name to make sticky. See [Load Balancer documentation](https://www.vultr.com/docs/vultr-load-balancers/#Load_Balancer_Configuration). */
                        cookie_name?: string;
                    };
                    /** @description The maximum time allowed for the connection to remain inactive before timing out in seconds. This defaults to 600. */
                    timeout?: number;
                    /** @description ID of the VPC you wish to use. If a VPC ID is omitted it will default to the public network. */
                    vpc?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        load_balancer?: components["schemas"]["loadbalancer"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-load-balancer": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        load_balancer?: components["schemas"]["loadbalancer"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-load-balancer": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-load-balancer": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The Auto SSL configuration. Must be using Vultr DNS for Auto SSL. */
                    auto_ssl?: {
                        /** @description (optional) Subdomain to append to the domain zone. */
                        domain_sub?: string;
                        /** @description The domain zone. (example.com) */
                        domain_zone?: string;
                    };
                    /** @description The balancing algorithm.
                     *
                     *     * roundrobin (default)
                     *     * leastconn */
                    balancing_algorithm?: string;
                    /** @description An array of firewall rule objects. */
                    firewall_rules?: {
                        /** @description The type of IP rule.
                         *
                         *     * v4
                         *     * v6 */
                        ip_type?: string;
                        /** @description Port for this rule. */
                        port?: number;
                        /** @description If the source string is given a value of "cloudflare" then cloudflare IPs will be supplied. Otherwise enter a IP address with subnet size that you wish to permit through the firewall.
                         *
                         *     Possible values:
                         *
                         *     |   | Value | Description |
                         *     | - | ------ | ------------- |
                         *     |   | "192.168.1.1/16" | Ip address with a subnet size. |
                         *     |   | cloudflare | Allow all of Cloudflare's IP space through the firewall | */
                        source?: string;
                    }[];
                    /** @description An array of forwarding rule objects. */
                    forwarding_rules?: {
                        /** @description The port number destination on the backend server. */
                        backend_port?: number;
                        /** @description The protocol destination on the backend server.
                         *
                         *     * HTTP
                         *     * HTTPS
                         *     * TCP */
                        backend_protocol?: string;
                        /** @description The port number on the Load Balancer to forward to the backend. */
                        frontend_port?: number;
                        /** @description The protocol on the Load Balancer to forward to the backend.
                         *
                         *     * HTTP
                         *     * HTTPS
                         *     * TCP */
                        frontend_protocol?: string;
                    }[];
                    /** @description The health check configuration. [See Load Balancer documentation](https://www.vultr.com/docs/vultr-load-balancers/#Load_Balancer_Configuration). */
                    health_check?: {
                        /** @description Interval between health checks. */
                        check_interval?: string;
                        /** @description Number of times a check must succeed before returning to healthy status. */
                        healthy_threshold?: string;
                        /** @description HTTP Path to check. Only applies if protocol is HTTP, or HTTPS. */
                        path?: string;
                        /** @description The port to use for health checks. */
                        port?: number;
                        /** @description The protocol to use for health checks.
                         *
                         *     * HTTPS
                         *     * HTTP
                         *     * TCP */
                        protocol?: string;
                        /** @description Timeout before health check fails. */
                        response_timeout?: string;
                        /** @description Number times a check must fail before becoming unhealthy. */
                        unhealthy_threshold?: string;
                    };
                    /** @description If `true`, this will enable HTTP2 traffic. You must have an HTTPS forwarding rule combo (HTTPS -> HTTPS) to enable this option.
                     *
                     *     * true
                     *     * false */
                    http2?: boolean;
                    /** @description If `true`, this will enable HTTP3/QUIC traffic. You must have HTTP2 enabled.
                     *
                     *     * true
                     *     * false */
                    http3?: boolean;
                    /** @description Send the complete array of Instances IDs that should be attached to this Load Balancer. Instances will be attached or detached to match your array. For example, if Instances **X**, **Y**, and **Z** are currently attached, and you send [A,B,Z], then Instance **A** and **B** will be attached,  **X** and **Y** will be detached, and **Z** will remain attached. */
                    instances?: string[];
                    /** @description The label for your Load Balancer */
                    label?: string;
                    /** @description The number of nodes to add to the load balancer (1-99), must be an odd number. This defaults to 1. */
                    nodes?: number;
                    /**
                     * @deprecated
                     * @description Use `vpc` instead. ID of the private network you wish to use. If private_network is omitted it will default to the public network.
                     */
                    private_network?: string;
                    /** @description If `true`, you must configure backend nodes to accept Proxy protocol.
                     *
                     *     * true
                     *     * false (Default) */
                    proxy_protocol?: boolean;
                    /** @description An SSL certificate to install on the Load Balancer. */
                    ssl?: {
                        /** @description The SSL certificate. */
                        certificate?: string;
                        /** @description The SSL certificate base64 encoded. (Base64 encoded values should not be used alongside with non-Base64 encoded values) */
                        certificate_b64?: string;
                        /** @description The certificate chain. */
                        chain?: string;
                        /** @description The certificate chain base64 encoded. (Base64 encoded values should not be used alongside with non-Base64 encoded values) */
                        chain_b64?: string;
                        /** @description The private key. */
                        private_key?: string;
                        /** @description The private key base64 encoded. (Base64 encoded values should not be used alongside with non-Base64 encoded values) */
                        private_key_b64?: string;
                    };
                    /** @description If `true`, this will redirect all HTTP traffic to HTTPS. You must have an HTTPS rule and SSL certificate installed on the load balancer to enable this option.
                     *
                     *     * true
                     *     * false */
                    ssl_redirect?: boolean;
                    /** @description Enables sticky sessions for your load balancer when a cookie_name is provided. */
                    sticky_session?: {
                        /** @description The cookie name to make sticky. See [Load Balancer documentation](https://www.vultr.com/docs/vultr-load-balancers/#Load_Balancer_Configuration). */
                        cookie_name?: string;
                    };
                    /** @description The maximum time allowed for the connection to remain inactive before timing out in seconds. This defaults to 600. */
                    timeout?: number;
                    /** @description ID of the VPC you wish to use. If a VPC ID is omitted it will default to the public network. */
                    vpc?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-load-balancer-auto-ssl": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-load-balancer-forwarding-rules": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forwarding_rules?: components["schemas"]["forwarding-rule"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-load-balancer-forwarding-rules": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The port number destination on the backend server. */
                    backend_port: number;
                    /** @description The protocol destination on the backend server.
                     *
                     *     * HTTP
                     *     * HTTPS
                     *     * TCP */
                    backend_protocol: string;
                    /** @description The port number on the Load Balancer to forward to the backend. */
                    frontend_port: number;
                    /** @description The protocol on the Load Balancer to forward to the backend.
                     *
                     *     * HTTP
                     *     * HTTPS
                     *     * TCP */
                    frontend_protocol: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-load-balancer-forwarding-rule": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Forwarding Rule id](#operation/list-load-balancer-forwarding-rules). */
                "forwarding-rule-id": string;
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forwarding_rule?: components["schemas"]["forwarding-rule"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-load-balancer-forwarding-rule": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Forwarding Rule id](#operation/list-load-balancer-forwarding-rules). */
                "forwarding-rule-id": string;
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-load-balancer-ssl": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Load Balancer id](#operation/list-load-balancers). */
                "load-balancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-loadbalancer-firewall-rules": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: string;
            };
            header?: never;
            path: {
                "loadbalancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["loadbalancer-firewall-rule"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-loadbalancer-firewall-rule": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                "firewall-rule-id": string;
                "loadbalancer-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["loadbalancer-firewall-rule"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-marketplace-app-variables": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The application's [Image ID](#operation/list-applications). */
                "image-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        variables?: components["schemas"]["app-variable"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-object-storages": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        object_storages?: components["schemas"]["object-storage"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-object-storage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The [Cluster id](#operation/list-object-storage-clusters) where the Object Storage will be created. */
                    cluster_id: number;
                    /** @description The user-supplied label for this Object Storage. */
                    label?: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        object_storage?: components["schemas"]["object-storage"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-object-storage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Object Storage id](#operation/list-object-storages). */
                "object-storage-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        object_storage?: components["schemas"]["object-storage"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-object-storage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Object Storage id](#operation/list-object-storages). */
                "object-storage-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The user-supplied label for the Object Storage. */
                    label: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-object-storage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Object Storage id](#operation/list-object-storages). */
                "object-storage-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "regenerate-object-storage-keys": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Object Storage id](#operation/list-object-storages). */
                "object-storage-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        s3_credentials?: {
                            /** @description The new Object Storage access key. */
                            s3_access_key?: string;
                            /** @description The [Cluster hostname](#operation/list-object-storage-clusters) for this Object Storage. */
                            s3_hostname?: string;
                            /** @description The new Object Storage secret key. */
                            s3_secret_key?: string;
                        };
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-object-storage-clusters": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        clusters?: components["schemas"]["clusters"][];
                        meta?: components["schemas"]["meta"];
                    };
                };
            };
        };
    };
    "list-os": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500.
                 *      */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        os?: components["schemas"]["os"][];
                    };
                };
            };
        };
    };
    "list-plans": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Filter the results by operating system.
                 *
                 *     |   | Type | Description |
                 *     | - | ------ | ------------- |
                 *     |   | windows | All available plans that support windows | */
                os?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
                /** @description Filter the results by type.
                 *
                 *     | **Type** | **Description** |
                 *     |----------|-----------------|
                 *     | all | All available types |
                 *     | vc2 | Cloud Compute |
                 *     | vdc | Dedicated Cloud |
                 *     | vhf | High Frequency Compute |
                 *     | vhp | High Performance |
                 *     | voc | All Optimized Cloud types |
                 *     | voc-g | General Purpose Optimized Cloud |
                 *     | voc-c | CPU Optimized Cloud |
                 *     | voc-m | Memory Optimized Cloud |
                 *     | voc-s | Storage Optimized Cloud |
                 *     | vcg | Cloud GPU | */
                type?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        plans?: components["schemas"]["plans"][];
                    };
                };
            };
        };
    };
    "list-metal-plans": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        plans?: components["schemas"]["plans-metal"][];
                    };
                };
            };
        };
    };
    "list-networks": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        networks?: components["schemas"]["network"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-network": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A description of the private network. */
                    description?: string;
                    /** @description Create the Private Network in this [Region id](#operation/list-regions). */
                    region: string;
                    /** @description The IPv4 network address. For example: 10.99.0.0 */
                    v4_subnet?: string;
                    /** @description The number of bits for the netmask in CIDR notation. Example: 24 */
                    v4_subnet_mask?: number;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        network?: components["schemas"]["network"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-network": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Network id](#operation/list-networks). */
                "network-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        network?: components["schemas"]["network"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-network": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Network id](#operation/list-networks). */
                "network-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The Private Network description. */
                    description: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-network": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Network id](#operation/list-networks). */
                "network-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-regions": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        regions?: components["schemas"]["region"][];
                    };
                };
            };
        };
    };
    "list-available-plans-region": {
        parameters: {
            query?: {
                /** @description Filter the results by type.
                 *
                 *     | **Type** | **Description** |
                 *     |----------|-----------------|
                 *     | all | All available types |
                 *     | vc2 | Cloud Compute |
                 *     | vdc | Dedicated Cloud |
                 *     | vhf | High Frequency Compute |
                 *     | vhp | High Performance |
                 *     | voc | All Optimized Cloud types |
                 *     | voc-g | General Purpose Optimized Cloud |
                 *     | voc-c | CPU Optimized Cloud |
                 *     | voc-m | Memory Optimized Cloud |
                 *     | voc-s | Storage Optimized Cloud |
                 *     | vbm | Bare Metal |
                 *     | vcg | Cloud GPU |
                 *      */
                type?: string;
            };
            header?: never;
            path: {
                /** @description The [Region id](#operation/list-regions). */
                "region-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description An array of Plans available in this Region. */
                        available_plans?: string[];
                    };
                };
            };
        };
    };
    "list-registries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        registries?: components["schemas"]["registry"][];
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-registry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    name: components["schemas"]["registry"]["properties"]["name"];
                    /** @description The key of the plan you'd like to select which dictates how much storage you're allocated and the monthly cost. Can get list of plans from /plan/list endpoint i.e. start_up */
                    plan: string;
                    public: components["schemas"]["registry"]["properties"]["public"];
                    /** @description The name of the region you'd like to deploy this Registry in. Can get list of regions from /registry/region/list endpoint i.e. sjc */
                    region: string;
                };
            };
        };
        responses: {
            /** @description OK */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["registry"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "read-registry": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["registry"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-registry": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The key of the plan you'd like to upgrade to which dictates how much storage you're allocated and the monthly cost. Can get list of plans from /plan/list endpoint i.e. business */
                    plan?: string;
                    public?: components["schemas"]["registry"]["properties"]["public"];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["registry"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-registry": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content - Successfully Deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-registry-docker-credentials": {
        parameters: {
            query?: {
                /**
                 * @description The seconds until these credentials expire. When set to 0, credentials do not expire. The default value is 0
                 * @default 0
                 */
                expiry_seconds?: components["parameters"]["docker-credentials-expiry-seconds"];
                /**
                 * @description Whether these credentials will have only PULL access or PUSH access as well. If true these credentials can PUSH to repos in this registry. If false, these credentials can only PULL. Default is false.
                 * @default false
                 */
                read_write?: components["parameters"]["docker-credentials-read-write"];
            };
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["registry-docker-credentials"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-registry-kubernetes-docker-credentials": {
        parameters: {
            query?: {
                /**
                 * @description Whether this YAML will be returned in a base64 encoded string for ease of downloading. If true, the response will be a base64 encoded string. Default is false.
                 * @default false
                 */
                base64_encode?: components["parameters"]["kubernetes-docker-credentials-base64-encode"];
                /**
                 * @description The seconds until these credentials expire. When set to 0, credentials do not expire. The default value is 0
                 * @default 0
                 */
                expiry_seconds?: components["parameters"]["docker-credentials-expiry-seconds"];
                /**
                 * @description Whether these credentials will have only PULL access or PUSH access as well. If true these credentials can PUSH to repos in this registry. If false, these credentials can only PULL. Default is false.
                 * @default false
                 */
                read_write?: components["parameters"]["docker-credentials-read-write"];
            };
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/yaml": components["schemas"]["registry-kubernetes-docker-credentials"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-registry-repositories": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        repositories?: components["schemas"]["registry-repository"][];
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "read-registry-repository": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
                /** @description The [Repository Image](#components/schemas/registry-repository/properties/image). Which can be found by [List Repositories](#operation/list-registry-repositories). */
                "repository-image": components["parameters"]["repository-image"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["registry-repository"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-repository": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
                /** @description The [Repository Image](#components/schemas/registry-repository/properties/image). Which can be found by [List Repositories](#operation/list-registry-repositories). */
                "repository-image": components["parameters"]["repository-image"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    description?: components["schemas"]["registry-repository"]["properties"]["description"];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["registry-repository"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-repository": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries). */
                "registry-id": components["parameters"]["registry-id"];
                /** @description The [Repository Image](#components/schemas/registry-repository/properties/image). Which can be found by [List Repositories](#operation/list-registry-repositories). */
                "repository-image": components["parameters"]["repository-image"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content - Successfully Deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-registry-plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        plans?: {
                            business?: components["schemas"]["registry-plan"];
                            enterprise?: components["schemas"]["registry-plan"];
                            premium?: components["schemas"]["registry-plan"];
                            start_up?: components["schemas"]["registry-plan"];
                        };
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-registry-regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        regions?: components["schemas"]["registry-region"][];
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-reserved-ips": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        reserved_ips?: components["schemas"]["reserved-ip"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-reserved-ip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The type of IP address.
                     *
                     *     * v4
                     *     * v6 */
                    ip_type: string;
                    /** @description The user-supplied label. */
                    label?: string;
                    /** @description The [Region id](#operation/list-regions) where the Reserved IP will be created. */
                    region: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reserved_ip?: components["schemas"]["reserved-ip"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-reserved-ip": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Reserved IP id](#operation/list-reserved-ips). */
                "reserved-ip": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reserved_ip?: components["schemas"]["reserved-ip"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-reserved-ip": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Reserved IP id](#operation/list-reserved-ips). */
                "reserved-ip": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "patch-reserved-ips-reserved-ip": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Reserved IP id](#operation/list-reserved-ips). */
                "reserved-ip": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    label: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reserved_ip?: components["schemas"]["reserved-ip"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-reserved-ip": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Reserved IP id](#operation/list-reserved-ips) */
                "reserved-ip": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Attach the Reserved IP to a [Compute Instance id](#operation/list-instances) or a [Bare Metal Instance id](#operation/list-baremetals). */
                    instance_id: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-reserved-ip": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Reserved IP id](#operation/list-reserved-ips) */
                "reserved-ip": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "convert-reserved-ip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The IP address to convert. */
                    ip_address: string;
                    /** @description A user-supplied label for this IP address. */
                    label?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reserved_ip?: components["schemas"]["reserved-ip"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-snapshots": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Filter the list of Snapshots by `description` */
                description?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        snapshots?: components["schemas"]["snapshot"][];
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-snapshot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The user-supplied description of the Snapshot. */
                    description?: string;
                    /** @description Create a Snapshot for this [Instance id](#operation/list-instances). */
                    instance_id: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        snapshot?: components["schemas"]["snapshot"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-snapshot": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Snapshot id](#operation/list-snapshots). */
                "snapshot-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        snapshot?: components["schemas"]["snapshot"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "put-snapshots-snapshot-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Snapshot id](#operation/list-snapshots). */
                "snapshot-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The user-supplied description for the Snapshot. */
                    description: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-snapshot": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Snapshot id](#operation/list-snapshots). */
                "snapshot-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-snapshot-create-from-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The user-supplied description of the Snapshot. */
                    description?: string;
                    /** @description Whether or not the snapshot uses UEFI. */
                    uefi?: string;
                    /** @description The public URL containing a RAW image. */
                    url: string;
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        snapshot?: components["schemas"]["snapshot"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-ssh-keys": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500.
                 *      */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        ssh_keys?: components["schemas"]["ssh"][];
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-ssh-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The user-supplied name for this SSH Key. */
                    name: string;
                    /** @description The SSH Key. */
                    ssh_key: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ssh_key?: components["schemas"]["ssh"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-ssh-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [SSH Key id](#operation/list-ssh-keys). */
                "ssh-key-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ssh_key?: components["schemas"]["ssh"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-ssh-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [SSH Key id](#operation/list-ssh-keys). */
                "ssh-key-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-ssh-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [SSH Key id](#operation/list-ssh-keys). */
                "ssh-key-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The user-supplied name for this SSH Key. */
                    name?: string;
                    /** @description The SSH Key. */
                    ssh_key?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-startup-scripts": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        startup_scripts?: components["schemas"]["startup"][];
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-startup-script": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The name of the Startup Script. */
                    name: string;
                    /** @description The base-64 encoded Startup Script. */
                    script: string;
                    /** @description The Startup Script type.
                     *
                     *     * boot (default)
                     *     * pxe */
                    type?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        startup_script?: components["schemas"]["startup"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-startup-script": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Startup Script id](#operation/list-startup-scripts). */
                "startup-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        startup_script?: components["schemas"]["startup"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-startup-script": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Startup Script id](#operation/list-startup-scripts). */
                "startup-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-startup-script": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [Startup Script id](#operation/list-startup-scripts). */
                "startup-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The name of the Startup Script. */
                    name?: string;
                    /** @description The base-64 encoded Startup Script. */
                    script?: string;
                    /** @description The Startup Script type.
                     *
                     *     boot (default)
                     *     pxe */
                    type?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-subaccounts": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        subaccounts?: components["schemas"]["subaccount"][];
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-subaccount": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Create a new sub-account with this email address. */
                    email: string;
                    /** @description Your ID for this sub-account. */
                    subaccount_id?: string;
                    /** @description Your name for this sub-account. */
                    subaccount_name?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        subaccount?: components["schemas"]["subaccount"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-users": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        users?: components["schemas"]["user"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description An array of permissions granted.
                     *
                     *     * abuse
                     *     * alerts
                     *     * billing
                     *     * dns
                     *     * firewall
                     *     * loadbalancer
                     *     * manage\_users
                     *     * objstore
                     *     * provisioning
                     *     * subscriptions
                     *     * subscriptions\_view
                     *     * support
                     *     * upgrade */
                    acls?: string[];
                    /** @description API access is permitted for this User.
                     *
                     *     * true (default)
                     *     * false */
                    api_enabled?: boolean;
                    /** @description The User's email address. */
                    email: string;
                    /** @description The User's name. */
                    name: string;
                    /** @description The User's password. */
                    password: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["user"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-user": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [User id](#operation/list-users). */
                "user-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["user"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-user": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [User id](#operation/list-users). */
                "user-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-user": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [User id](#operation/list-users). */
                "user-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description An array of permission granted. Valid values:
                     *
                     *     * abuse
                     *     * alerts
                     *     * billing
                     *     * dns
                     *     * firewall
                     *     * loadbalancer
                     *     * manage\_users
                     *     * objstore
                     *     * provisioning
                     *     * subscriptions
                     *     * subscriptions\_view
                     *     * support
                     *     * upgrade */
                    acls?: string[];
                    /** @description API access is permitted for this User.
                     *
                     *     * true (default)
                     *     * false */
                    api_enabled?: boolean;
                    /** @description The User's email address. */
                    email?: string;
                    /** @description The User's name. */
                    name?: string;
                    /** @description The User's password. */
                    password?: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-vpc2": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        vpcs?: components["schemas"]["vpc2"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A description of the VPC. </br> Must be no longer than 255 characters and may include only letters, numbers, spaces, underscores and hyphens. */
                    description?: string;
                    /** @description The VPC subnet IP address. For example: 10.99.0.0<br><span style="color: red">If a prefix_length is specified then ip_block is a required field.</span> */
                    ip_block?: string;
                    /**
                     * @description Accepted values:
                     *     * `v4`
                     * @enum {string}
                     */
                    ip_type?: PathsVpc2PostRequestBodyApplicationJsonIp_type;
                    /** @description The number of bits for the netmask in CIDR notation. Example: 24<br><span style="color: red">If an ip_block is specified then prefix_length is a required field.</span> */
                    prefix_length?: number;
                    /** @description Create the VPC in this [Region id](#operation/list-regions). */
                    region: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vpc?: components["schemas"]["vpc2"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vpc?: components["schemas"]["vpc2"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The VPC description. </br> Must be no longer than 255 characters and may include only letters, numbers, spaces, underscores and hyphens. */
                    description: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-vpc2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-vpc2-nodes": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        nodes?: components["schemas"]["vpc2nodes"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "attach-vpc2-nodes": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description An array of ID strings for [instances](#operation/list-instances) and [Bare Metal servers](#operation/list-baremetals) to attach as nodes to the VPC 2.0 network. A limit of 1000 nodes can be processed in a request */
                    nodes: unknown[];
                };
            };
        };
        responses: {
            /** @description accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "detach-vpc2-nodes": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description An array of ID strings for [nodes](#operation/list-vpc2-nodes) to detach from the VPC 2.0 network. A limit of 1000 nodes can be processed in a request */
                    nodes: unknown[];
                };
            };
        };
        responses: {
            /** @description accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "list-vpcs": {
        parameters: {
            query?: {
                /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
                cursor?: string;
                /** @description Number of items requested per page. Default is 100 and Max is 500. */
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: components["schemas"]["meta"];
                        vpcs?: components["schemas"]["vpc"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-vpc": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A description of the VPC. */
                    description?: string;
                    /** @description Create the VPC in this [Region id](#operation/list-regions). */
                    region: string;
                    /** @description The IPv4 VPC address. For example: 10.99.0.0<br><span style="color: red">If v4_subnet_mask is specified then v4_subnet is a required field.</span> */
                    v4_subnet?: string;
                    /** @description The number of bits for the netmask in CIDR notation. Example: 24<br><span style="color: red">If v4_subnet is specified then v4_subnet_mask is a required field.</span> */
                    v4_subnet_mask?: number;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vpc?: components["schemas"]["vpc"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-vpc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        vpc?: components["schemas"]["vpc"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-vpc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        /** @description Include a JSON object in the request body with a content type of **application/json**. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The VPC description. */
                    description: string;
                };
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-vpc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [VPC ID](#operation/list-vpcs). */
                "vpc-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
export enum PathsCdnsPullZonesPostRequestBodyApplicationJsonOrigin_scheme {
    http = "http",
    https = "https"
}
export enum PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonDefault_toast_compression {
    lz4 = "lz4",
    pglz = "pglz"
}
export enum PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonLog_error_verbosity {
    TERSE = "TERSE",
    DEFAULT = "DEFAULT",
    VERBOSE = "VERBOSE"
}
export enum PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonLog_line_prefix {
    _pid_p_user_u_db_d_app_a_client_h_ = "'pid=%p,user=%u,db=%d,app=%a,client=%h '",
    _t_p_l_1_user_u_db_d_app_a_client_h_ = "'%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '",
    _m_p_q_user_u_db_d_app_a_ = "'%m [%p] %q[user=%u,db=%d,app=%a] '"
}
export enum PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonPg_stat_statementsTrack {
    all = "all",
    top = "top",
    none = "none"
}
export enum PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonTrack_commit_timestamp {
    off = "off",
    on = "on"
}
export enum PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonTrack_functions {
    all = "all",
    pl = "pl",
    none = "none"
}
export enum PathsDatabasesDatabaseIdAdvancedOptionsPutRequestBodyApplicationJsonTrack_io_timing {
    off = "off",
    on = "on"
}
export enum PathsVpc2PostRequestBodyApplicationJsonIp_type {
    v4 = "v4"
}
export enum PullzoneOrigin_scheme {
    http = "http",
    https = "https"
}
