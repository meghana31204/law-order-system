import React from "react";

const PublicNoticesAlerts = () => {
  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navbarLogo}>
          <img
            src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-rule-of-law-vector-png-image_11399282.png"
            alt="Logo"
            className="logo"
            style={styles.logo}
          />
          <h2 style={styles.navTitle}>Law & Order System</h2>
        </div>
        <ul style={styles.navList}>
          <li>
            <a href="/report-crime" style={styles.navLink}>Report a Crime</a>
          </li>
          <li>
            <a href="/license-permit" style={styles.navLink}>Apply for Licenses & Permits</a>
          </li>
          <li>
            <a href="/public-notices" style={styles.navLink}>View Public Notices & Alerts</a>
          </li>
        </ul>
      </nav>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Public Notices & Alerts</h1>
        </header>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Crime Alerts</h2>
          <ul style={styles.list}>
            <li>
              <strong>Mumbai:</strong> ₹20 crore bank fraud reported.
              <br />
              Authorities urge citizens to stay cautious about sharing OTPs, as many people are falling prey to scams.
            </li>
            <li>
              <strong>Delhi:</strong> Chain-snatching incidents have increased near Connaught Place.
              <br />
              Police have issued a high alert and are increasing patrols in crowded areas.
            </li>
            <li>
              <strong>Hyderabad:</strong> Fake e-commerce fraud ring busted.
              <br />
              Authorities have warned the public about online fraud, advising to avoid suspicious e-commerce sites.
            </li>
            <li>
              <strong>Kolkata:</strong> Increased pickpocketing activity in busy markets.
              <br />
              Police have urged citizens to stay vigilant while shopping or traveling in crowded locations.
            </li>
            <li>
              <strong>Chennai:</strong> Police are investigating a series of burglaries in residential areas.
              <br />
              Homeowners are advised to install security systems and ensure their homes are locked before leaving.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Missing Persons </h2>
          <ul style={styles.list}>
            <li>
              <strong>Mumbai:</strong> Ravi Sharma, 42, last seen at Mumbai Central Station on March 5th.
              <br />
              Family and police are urging the public to report any sightings or information about his whereabouts.
            </li>
            <li>
              <strong>Bangalore:</strong> 14-year-old Priya Verma has been missing since March 3rd.
              <br />
              Authorities suspect an abduction and have requested anyone with information to come forward.
            </li>
            <li>
              <strong>Chennai:</strong> Rajan Nair, 68, missing near Marina Beach.
              <br />
              The elderly man suffers from memory loss, and the public is urged to contact local authorities if seen.
            </li>
            <li>
              <strong>Delhi:</strong> Rani Mehra, 24, last seen near Rajiv Chowk on March 7th.
              <br />
              Her family is actively searching for her, and police are examining surveillance footage in the area.
            </li>
            <li>
              <strong>Hyderabad:</strong> 10-year-old Arjun Reddy has gone missing since March 4th.
              <br />
              Local police are investigating and have asked for help in locating him. Posters have been put up in the area.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Traffic Updates </h2>
          <ul style={styles.list}>
            <li>
              <strong>Delhi-Gurgaon:</strong> Major traffic congestion due to an overturned truck.
              <br />
              Authorities suggest taking alternate routes and expect the situation to clear up in a few hours.
            </li>
            <li>
              <strong>Bangalore:</strong> Outer Ring Road partially closed due to metro construction.
              <br />
              The closure is expected to last until April 2025, so drivers should plan their routes accordingly.
            </li>
            <li>
              <strong>Chennai:</strong> Road diversions on Mount Road for repairs.
              <br />
              Drivers should avoid this area if possible and take nearby alternative routes.
            </li>
            <li>
              <strong>Hyderabad:</strong> Traffic jams expected near HITEC City due to ongoing flyover construction.
              <br />
              Authorities have recommended using alternate highways or metro services to avoid delays.
            </li>
            <li>
              <strong>Delhi:</strong> Heavy traffic reported on Ring Road due to ongoing maintenance work.
              <br />
              Expect slow-moving traffic in the area, particularly during peak hours.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Weather Warnings</h2>
          <ul style={styles.list}>
            <li>
              <strong>Mumbai & Gujarat:</strong> Cyclone approaching. IMD has issued a red alert.
              <br />
              Citizens are advised to stay indoors and follow emergency evacuation procedures if necessary.
            </li>
            <li>
              <strong>North India:</strong> Unseasonal rains expected in Punjab, Haryana, and Delhi.
              <br />
              These rains could cause minor flooding in low-lying areas. Citizens should be cautious and stay updated on weather alerts.
            </li>
            <li>
              <strong>South India:</strong> Heatwave alert issued for Telangana & Andhra Pradesh.
              <br />
              Temperatures may exceed 45°C, and it is advised to limit outdoor activities during the afternoon heat.
            </li>
            <li>
              <strong>West Bengal:</strong> Thunderstorm warnings in coastal areas.
              <br />
              Fishermen are advised to avoid sea travel, and residents should take precautions during the storms.
            </li>
            <li>
              <strong>Karnataka:</strong> Heavy rainfall expected in coastal districts.
              <br />
              Flood warnings have been issued for vulnerable areas, and citizens should prepare for possible evacuation.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Emergency Notices</h2>
          <ul style={styles.list}>
            <li>
              <strong>Delhi:</strong> Power outage in some areas on March 11th due to maintenance.
              <br />
              Residents are advised to check for power backups and prepare for intermittent electricity cuts.
            </li>
            <li>
              <strong>Pune:</strong> Water supply disruptions due to pipeline repairs.
              <br />
              Local authorities have assured that the issue will be resolved within 48 hours, but water conservation measures are advised.
            </li>
            <li>
              <strong>Mumbai:</strong> Free Covid-19 booster doses available at government centers.
              <br />
              People over the age of 60 or with underlying conditions are encouraged to get vaccinated.
            </li>
            <li>
              <strong>Chennai:</strong> Water conservation measures enforced.
              <br />
              Residents are urged to reduce water usage in the face of a prolonged dry spell. Rainwater harvesting initiatives are encouraged.
            </li>
            <li>
              <strong>Hyderabad:</strong> Fire safety drills scheduled for all public buildings.
              <br />
              Public cooperation is needed as fire drills may cause temporary disruptions in government buildings and offices.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>International Alerts</h2>
          <ul style={styles.list}>
            <li>
              <strong>USA:</strong> Winter storms leading to major flight cancellations.
              <br />
              Travelers are urged to check with airlines for the latest updates on flight schedules.
            </li>
            <li>
              <strong>Japan:</strong> 7.2 magnitude earthquake hits the northern coast.
              <br />
              Tsunami warnings have been issued. Residents in coastal areas should evacuate as directed by local authorities.
            </li>
            <li>
              <strong>Europe:</strong> Banks warn of new phishing scams targeting online transactions.
              <br />
              People are advised not to click on suspicious links or share sensitive financial information online.
            </li>
            <li>
              <strong>Australia:</strong> Severe bushfires in New South Wales.
              <br />
              Evacuations are in progress, and residents are urged to follow all instructions from local emergency services.
            </li>
            <li>
              <strong>South America:</strong> Tropical storm causing significant flooding in Brazil.
              <br />
              The storm has caused widespread damage, and authorities are working on rescue and recovery operations. Stay tuned for updates.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarLogo: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  navTitle: {
    color: "#fff",
    margin: 0,
    fontSize: "20px",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 15px",
    display: "block",
    marginLeft: "15px",
  },
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#dc2626",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    borderRadius: "8px",
  },
  title: {
    margin: 0,
    fontSize: "24px",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    color: "#dc2626",
    fontSize: "20px",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.6",
  },
};

export default PublicNoticesAlerts;
