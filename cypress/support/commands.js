// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('getCampSites', (state) => {
  cy.intercept('GET', `https://developer.nps.gov/api/v1/campgrounds?stateCode=${state}&stateCode=&api_key=kGRSkY3I2AvcvPikhDRpuyEsUnHxuN47p5n912Pj`, {
    body: {
      total: "1",
      limit: "50",
      start: "0",
      data: [
        {
          id: "9607DA82-8507-4D92-A3DB-5FE81E4CD5C8",
          url: "https://www.nps.gov/chic/planyourvisit/campgrounds.htm",
          name: "Buckhorn Campground Loop A",
          parkCode: "chic",
          description: "Buckhorn Campground has four loops. Loop A is open seasonally on a first come, first served basis. There are no hookups for RVs on Loop A. Located next to Lake of the Arbuckles, Buckhorn Campground is also located near the Buckhorn Boat Launch and near the southern trailhead for the Rock Creek Multi-Use Trail.",
          latitude: "34.42948",
          longitude: "-96.98861",
          latLong: "{lat:34.42948, lng:-96.98861}",
          audioDescription: "Buckhorn Campground has four loops. Loop A is open seasonally on a first come, first served basis. There are no hookups for RVs on Loop A. A dump station is located near the campground off of the main park road. Located next to Lake of the Arbuckles, Buckhorn Campground is also located near the Buckhorn Boat Launch and near the southern trailhead for the Rock Creek Multi-Use Trail. Roads within the campground are mostly paved, though some parking at campsites may be gravel. Many of the sites have rock terraces in order to create a flat tent pad. Each loop has its own restroom facility with showers.",
          isPassportStampLocation: "0",
          passportStampLocationDescription: "",
          passportStampImages: [ ],
          reservationInfo: "Loop A is first come, first served only",
          reservationUrl: "",
          regulationsurl: "https://www.nps.gov/chic/learn/management/cg-rules.htm",
          regulationsOverview: "",
          amenities: {
          trashRecyclingCollection: "Yes - seasonal",
          toilets: [
          "Flush Toilets - seasonal"
          ],
          internetConnectivity: "No",
          showers: [
          "Hot - Year Round"
          ],
          cellPhoneReception: "No",
          laundry: "No",
          amphitheater: "Yes - seasonal",
          dumpStation: "Yes - year round",
          campStore: "No",
          staffOrVolunteerHostOnsite: "Yes - seasonal",
          potableWater: [
          "Yes - seasonal"
          ],
          iceAvailableForSale: "No",
          firewoodForSale: "No",
          foodStorageLockers: "No"
          },
          contacts: {
          phoneNumbers: [
          {
          phoneNumber: "580-622-7234",
          description: "",
          extension: "",
          type: "Voice"
          }
          ],
          emailAddresses: [
          {
          description: "",
          emailAddress: "ron_parker@nps.gov"
          }
          ]
          },
          fees: [
          {
          cost: "16.00",
          description: "These site have no hookup. Water and restrooms are located nearby. Price is per night. Sites hold up to eight people.",
          title: "Buckhorn Non-Utility Sites"
          }
          ],
          directionsOverview: "",
          directionsUrl: "",
          operatingHours: [
          {
          exceptions: [
          {
          exceptionHours: {
          wednesday: "Closed",
          monday: "Closed",
          thursday: "Closed",
          sunday: "Closed",
          tuesday: "Closed",
          friday: "Closed",
          saturday: "Closed"
          },
          startDate: "2021-09-17",
          name: "Buckhorn Loop A Winter Closure",
          endDate: "2022-05-01"
          }
          ],
          description: "Loops A and B are first come, first served payable at the fee machine located at the entrance to each loop. They open no later than Memorial Day for the summer season, and close no earlier than Labor Day. Loops C and D are open year round. Loop C is available by reservation only. Loop D is first come, first served.",
          standardHours: {
          wednesday: "All Day",
          monday: "All Day",
          thursday: "All Day",
          sunday: "All Day",
          tuesday: "All Day",
          friday: "All Day",
          saturday: "All Day"
          },
          name: "Buckhorn Campground"
          }
          ],
          addresses: [ ],
          images: [
          {
          credit: "NPS Photo",
          crops: [ ],
          title: "Buckhorn Campground Loop A map",
          altText: "A map of Buckhorn Campground, Loop A, showing locations of campsites, restrooms, water, and more",
          caption: "Loop A is first come, first served and is only open in summer months.",
          url: "https://www.nps.gov/common/uploads/structured_data/A6B04B66-94B3-BD8E-4B9518F8C61C5D40.jpg"
          }
          ],
          weatherOverview: "",
          numberOfSitesReservable: "0",
          numberOfSitesFirstComeFirstServe: "19",
          campsites: {
          totalSites: "19",
          group: "0",
          horse: "0",
          tentOnly: "0",
          electricalHookups: "0",
          rvOnly: "0",
          walkBoatTo: "3",
          other: "0"
          },
          accessibility: {
          wheelchairAccess: "Other campsites vary in their wheelchair accessibility, but may be usable depending on the individual situation.",
          internetInfo: "",
          cellPhoneInfo: "Reception is spotty, depending on carrier and location you may be able to connect.",
          fireStovePolicy: "Fires are permitted only in the provided ring. Stoves and grills may be used within the confines of the campsite. Dead and down wood may be gathered.",
          rvAllowed: "1",
          rvInfo: "Sites in Loop A were constructed primarily with tent camping in mind, but many sites can accommodate small RVs and boat trailers.",
          rvMaxLength: "0",
          additionalInfo: "",
          trailerMaxLength: "0",
          adaInfo: "Campsite 1 is designated as an accessible site, constructed to be fully accessible by people in wheelchairs. It is located across the road from the restroom building, which is also wheelchair accessible.",
          trailerAllowed: "1",
          accessRoads: [
          "Paved Roads - All vehicles OK"
          ],
          classifications: [
          "Developed Campground"
          ]
          },
          lastIndexedDate: ""
          }
      ]
    }
  })
})


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
