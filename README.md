# swisscovery UNIGE VU2

This repository contains the code for the Primo VE **test** view of swisscovery UNIGE interface. This view is [publicly accessible on our production environment](https://slsp-unige.primo.exlibrisgroup.com/discovery/search?vid=41SLSP_UGE:VU2).

This view is based on the [SLSP central-customization-package](https://github.com/Swiss-Library-Service-Platform/central-customization-package).

## Local customizations
The following modules have been customized or developed specifically for UNIGE. 
Refer to the README inside each of them for more documentation on how they work.

* [Display latest library news on Primo landing page](js/unige-bib-news)
* [Autofill blank ILL form using openURL parameters](js/prm-blank-ill-after/unige-ill-open-url)
* [Display linked authority data from the Metagrid service](js/prm-service-details-after/eth-metagrid) (adapted from ETH)
* [Rebuild category browse menu on databases list](js/prm-databases-categorize-after/unige-db-categories) [In test phase, only in VU2]
* [Prevent custom main menu links from opening a new window](js/prm-top-nav-bar-links-after/unige-target-blank-fix)
* [Display open/closed stacks notice in Primo](js/prm-location-holdings-after/usi-location-open-close) (adapted from USI)
* [Modifiy the Rapido form for the Geneva POD](js/prm-service-physical-best-offer-after/unige-local-pod-disable)
* [Off-campus message for subscribed resources](js/slsp-alma-viewit-after/bcu-off-campus) (adapted from ETH and BCU-FR)
* [E-mail feedback prompt for e-resources access issues](js/slsp-alma-viewit-after/bcu-online-feedback) (adapted from ETH and BCU-FR)
* [Display of documents from Avatar lists like collections](js/prm-gallery-items-list-after) [In test phase, only in VU2]

### Contributors
 * Thomas Guignard (thomas@tgconsulting.ca)
 * Pablo Iriarte (pablo.iriarte@unige.ch)
 * Eric Silva Quintana (eric.silvaquintana@unige.ch)
