
        // =========================================================================
        // 1. RIYADH METRO NETWORK (ALL 6 LINES & 55+ ACCURATE STATIONS)
        // =========================================================================
        const METRO_LINES = {
            L1: {
                id: 'L1',
                name: 'Line 1 — Blue Line',
                shortName: 'Blue',
                color: '#0072CE',
                textColor: '#ffffff',
                corridor: 'Olaya – Al Batha (North–South)',
                stations: [
                    { name: 'SAB Bank', lat: 24.7932, lng: 46.6215, lines: ['L1'] },
                    { name: 'Dr. Sulaiman Al Habib', lat: 24.7810, lng: 46.6318, lines: ['L1'] },
                    { name: 'KAFD (Financial District)', lat: 24.7668, lng: 46.6430, lines: ['L1', 'L4', 'L6'], hub: true },
                    { name: 'Al Murooj', lat: 24.7512, lng: 46.6542, lines: ['L1'] },
                    { name: 'King Fahad District', lat: 24.7375, lng: 46.6638, lines: ['L1'] },
                    { name: 'King Fahad District 2', lat: 24.7250, lng: 46.6710, lines: ['L1'] },
                    { name: 'stc (Olaya Interchange)', lat: 24.7118, lng: 46.6744, lines: ['L1', 'L2'], hub: true },
                    { name: 'Al Wurud 2', lat: 24.7002, lng: 46.6788, lines: ['L1'] },
                    { name: 'Al Urubah', lat: 24.6915, lng: 46.6824, lines: ['L1'] },
                    { name: 'Alinma Bank', lat: 24.6812, lng: 46.6865, lines: ['L1'] },
                    { name: 'Bank Albilad', lat: 24.6710, lng: 46.6908, lines: ['L1'] },
                    { name: 'King Fahad Library', lat: 24.6615, lng: 46.6948, lines: ['L1'] },
                    { name: 'Ministry of Interior', lat: 24.6512, lng: 46.6992, lines: ['L1'] },
                    { name: 'Al Muorabba', lat: 24.6435, lng: 46.7055, lines: ['L1'] },
                    { name: 'Passport Department', lat: 24.6458, lng: 46.7092, lines: ['L1'] },
                    { name: 'National Museum', lat: 24.6472, lng: 46.7118, lines: ['L1', 'L5'], hub: true },
                    { name: 'Al Batha', lat: 24.6345, lng: 46.7145, lines: ['L1'] },
                    { name: 'Qasr Al Hokm', lat: 24.6295, lng: 46.7128, lines: ['L1', 'L3'], hub: true },
                    { name: 'Al Owd', lat: 24.6180, lng: 46.7185, lines: ['L1'] },
                    { name: 'Skirinah', lat: 24.6065, lng: 46.7235, lines: ['L1'] },
                    { name: 'Manfouhah', lat: 24.5950, lng: 46.7285, lines: ['L1'] },
                    { name: 'Al Iman Hospital', lat: 24.5835, lng: 46.7335, lines: ['L1'] },
                    { name: 'Transportation Center', lat: 24.5715, lng: 46.7395, lines: ['L1'] },
                    { name: 'Al Aziziah', lat: 24.5585, lng: 46.7460, lines: ['L1'] },
                    { name: 'Ad Dar Al Baida', lat: 24.5440, lng: 46.7535, lines: ['L1'] }
                ]
            },
            L2: {
                id: 'L2',
                name: 'Line 2 — Red Line',
                shortName: 'Red',
                color: '#E4002B',
                textColor: '#ffffff',
                corridor: 'King Abdullah Road (East–West)',
                stations: [
                    { name: 'King Saud University', lat: 24.7238, lng: 46.6185, lines: ['L2'] },
                    { name: 'King Salman Oasis', lat: 24.7188, lng: 46.6380, lines: ['L2'] },
                    { name: 'KACST', lat: 24.7155, lng: 46.6525, lines: ['L2'] },
                    { name: 'At Takhassusi', lat: 24.7135, lng: 46.6645, lines: ['L2'] },
                    { name: 'stc (Olaya Interchange)', lat: 24.7118, lng: 46.6744, lines: ['L1', 'L2'], hub: true },
                    { name: 'Al Wurud', lat: 24.7155, lng: 46.6875, lines: ['L2'] },
                    { name: 'King Abdulaziz Road', lat: 24.7212, lng: 46.6995, lines: ['L2'] },
                    { name: 'Ministry of Education', lat: 24.7275, lng: 46.7125, lines: ['L2', 'L5'], hub: true },
                    { name: 'An Nuzhah', lat: 24.7345, lng: 46.7270, lines: ['L2'] },
                    { name: 'Riyadh Exhibition Center', lat: 24.7425, lng: 46.7425, lines: ['L2'] },
                    { name: 'Khalid Bin Alwaleed Road', lat: 24.7505, lng: 46.7580, lines: ['L2'] },
                    { name: 'Al Hamra', lat: 24.7585, lng: 46.7735, lines: ['L2', 'L6'], hub: true },
                    { name: 'Al Khaleej', lat: 24.7655, lng: 46.7915, lines: ['L2'] },
                    { name: 'Ishbiliyah', lat: 24.7720, lng: 46.8110, lines: ['L2'] },
                    { name: 'King Fahad Sport City', lat: 24.7795, lng: 46.8355, lines: ['L2'] }
                ]
            },
            L3: {
                id: 'L3',
                name: 'Line 3 — Orange Line',
                shortName: 'Orange',
                color: '#FF6B00',
                textColor: '#ffffff',
                corridor: 'Al Madinah Al Munawwarah Rd',
                stations: [
                    { name: 'Jeddah Road', lat: 24.5815, lng: 46.5480, lines: ['L3'] },
                    { name: 'Tuwaiq', lat: 24.5875, lng: 46.5695, lines: ['L3'] },
                    { name: 'Ad Douh', lat: 24.5930, lng: 46.5910, lines: ['L3'] },
                    { name: 'Western Station', lat: 24.5985, lng: 46.6145, lines: ['L3'] },
                    { name: 'Aishah Bint Abi Bakr St', lat: 24.6045, lng: 46.6380, lines: ['L3'] },
                    { name: 'Dhahrat Al Badiah', lat: 24.6110, lng: 46.6620, lines: ['L3'] },
                    { name: 'Sultanah', lat: 24.6185, lng: 46.6855, lines: ['L3'] },
                    { name: 'Al Jarradiyah', lat: 24.6245, lng: 46.7015, lines: ['L3'] },
                    { name: 'Courts Complex', lat: 24.6272, lng: 46.7072, lines: ['L3'] },
                    { name: 'Qasr Al Hokm', lat: 24.6295, lng: 46.7128, lines: ['L1', 'L3'], hub: true },
                    { name: 'Al Hilla', lat: 24.6335, lng: 46.7275, lines: ['L3'] },
                    { name: 'Al Margab', lat: 24.6380, lng: 46.7420, lines: ['L3'] },
                    { name: 'As Salhiyah', lat: 24.6435, lng: 46.7575, lines: ['L3'] },
                    { name: 'First Industrial City', lat: 24.6495, lng: 46.7745, lines: ['L3'] },
                    { name: 'Railway', lat: 24.6565, lng: 46.7915, lines: ['L3'] },
                    { name: 'Al Malaz', lat: 24.6645, lng: 46.8075, lines: ['L3'] },
                    { name: 'Jarir District', lat: 24.6725, lng: 46.8220, lines: ['L3'] },
                    { name: 'Al Rajhi Grand Mosque', lat: 24.6805, lng: 46.8355, lines: ['L3'] },
                    { name: 'Harun Ar Rashid Road', lat: 24.6885, lng: 46.8495, lines: ['L3'] },
                    { name: 'An Naseem', lat: 24.6968, lng: 46.8635, lines: ['L3', 'L6'], hub: true },
                    { name: 'Hassan Bin Thabit St', lat: 24.7035, lng: 46.8795, lines: ['L3'] },
                    { name: 'Khashm Al An', lat: 24.7110, lng: 46.8985, lines: ['L3'] }
                ]
            },
            L4: {
                id: 'L4',
                name: 'Line 4 — Yellow Line',
                shortName: 'Yellow',
                color: '#F5B800',
                textColor: '#0f172a',
                corridor: 'King Khalid Airport – KAFD',
                stations: [
                    { name: 'KAFD (Financial District)', lat: 24.7668, lng: 46.6430, lines: ['L1', 'L4', 'L6'], hub: true },
                    { name: 'Ar Rabi', lat: 24.7785, lng: 46.6625, lines: ['L4', 'L6'], hub: true },
                    { name: 'Uthman Bin Affan Road', lat: 24.7895, lng: 46.6835, lines: ['L4', 'L6'], hub: true },
                    { name: 'SABIC', lat: 24.8015, lng: 46.7055, lines: ['L4', 'L6'], hub: true },
                    { name: 'PNU 1 (Princess Nourah Univ)', lat: 24.8355, lng: 46.7165, lines: ['L4'] },
                    { name: 'PNU 2', lat: 24.8520, lng: 46.7225, lines: ['L4'] },
                    { name: 'Airport T5', lat: 24.9365, lng: 46.7085, lines: ['L4'] },
                    { name: 'Airport T3-T4', lat: 24.9535, lng: 46.7025, lines: ['L4'] },
                    { name: 'Airport T1-T2', lat: 24.9625, lng: 46.6985, lines: ['L4'] }
                ]
            },
            L5: {
                id: 'L5',
                name: 'Line 5 — Green Line',
                shortName: 'Green',
                color: '#009639',
                textColor: '#ffffff',
                corridor: 'King Abdulaziz Road (Ministries Quarter)',
                stations: [
                    { name: 'Ministry of Education', lat: 24.7275, lng: 46.7125, lines: ['L2', 'L5'], hub: true },
                    { name: 'King Salman Park', lat: 24.7198, lng: 46.7145, lines: ['L5'] },
                    { name: 'As Sulimaniyah', lat: 24.7120, lng: 46.7148, lines: ['L5'] },
                    { name: 'Ad Dhabab', lat: 24.7045, lng: 46.7150, lines: ['L5'] },
                    { name: 'Abu Dhabi Square', lat: 24.6970, lng: 46.7152, lines: ['L5'] },
                    { name: 'Officers Club', lat: 24.6898, lng: 46.7150, lines: ['L5'] },
                    { name: 'GOSI', lat: 24.6825, lng: 46.7148, lines: ['L5'] },
                    { name: 'Al Wizarat', lat: 24.6752, lng: 46.7145, lines: ['L5'] },
                    { name: 'Ministry of Defense', lat: 24.6680, lng: 46.7142, lines: ['L5'] },
                    { name: 'King Abdulaziz Hospital', lat: 24.6608, lng: 46.7138, lines: ['L5'] },
                    { name: 'Ministry of Finance', lat: 24.6540, lng: 46.7135, lines: ['L5'] },
                    { name: 'National Museum', lat: 24.6472, lng: 46.7118, lines: ['L1', 'L5'], hub: true }
                ]
            },
            L6: {
                id: 'L6',
                name: 'Line 6 — Purple Line',
                shortName: 'Purple',
                color: '#7B2D8E',
                textColor: '#ffffff',
                corridor: 'Abdulrahman Bin Auf – KAFD',
                stations: [
                    { name: 'KAFD (Financial District)', lat: 24.7668, lng: 46.6430, lines: ['L1', 'L4', 'L6'], hub: true },
                    { name: 'Ar Rabi', lat: 24.7785, lng: 46.6625, lines: ['L4', 'L6'], hub: true },
                    { name: 'Uthman Bin Affan Road', lat: 24.7895, lng: 46.6835, lines: ['L4', 'L6'], hub: true },
                    { name: 'SABIC', lat: 24.8015, lng: 46.7055, lines: ['L4', 'L6'], hub: true },
                    { name: 'Granada', lat: 24.7875, lng: 46.7315, lines: ['L6'] },
                    { name: 'Al Yarmuk', lat: 24.7735, lng: 46.7535, lines: ['L6'] },
                    { name: 'Al Hamra', lat: 24.7585, lng: 46.7735, lines: ['L2', 'L6'], hub: true },
                    { name: 'Al Andalus', lat: 24.7425, lng: 46.7985, lines: ['L6'] },
                    { name: 'Khurais Road', lat: 24.7265, lng: 46.8235, lines: ['L6'] },
                    { name: 'As Salam', lat: 24.7115, lng: 46.8455, lines: ['L6'] },
                    { name: 'An Naseem', lat: 24.6968, lng: 46.8635, lines: ['L3', 'L6'], hub: true }
                ]
            }
        };

        // Official RCRC metro data: surveyed coordinates, exact station order & segment times
        Object.keys(METRO_OFFICIAL).forEach(k => {
            const lineId = 'L' + k;
            if (METRO_LINES[lineId]) {
                METRO_LINES[lineId].stations = METRO_OFFICIAL[k].map(s => ({
                    name: s.n, lat: s.la, lng: s.ln,
                    lines: [lineId],
                    hub: s.h ? true : undefined,
                    t: s.t
                }));
            }
        });

        // =========================================================================
        // 1b. OFFICIAL SURVEYED STATION COORDINATES (RCRC Open Data / Riyadh Metro)
        // =========================================================================
        const METRO_COORDS = {
            'SAB Bank': [24.8294509, 46.6165805],
            'Dr. Sulaiman Al Habib': [24.8114727, 46.6257792],
            'KAFD (Financial District)': [24.7674375, 46.6430625],
            'Al Murooj': [24.7545288, 46.6544534],
            'King Fahad District': [24.7451960, 46.6591427],
            'King Fahad District 2': [24.7365806, 46.6635085],
            'stc (Olaya Interchange)': [24.7267406, 46.6668053],
            'Al Wurud 2': [24.7210533, 46.6713508],
            'Al Urubah': [24.7133582, 46.6752135],
            'Alinma Bank': [24.7029860, 46.6804148],
            'Bank Albilad': [24.6966365, 46.6836577],
            'King Fahad Library': [24.6900745, 46.6870353],
            'Ministry of Interior': [24.6744353, 46.6949136],
            'Al Muorabba': [24.6648026, 46.7022887],
            'Passport Department': [24.6598064, 46.7042201],
            'National Museum': [24.6452738, 46.7131583],
            'Al Batha': [24.6369127, 46.7147124],
            'Qasr Al Hokm': [24.6289022, 46.7162036],
            'Al Owd': [24.6255297, 46.7215127],
            'Skirinah': [24.6178532, 46.7253485],
            'Manfouhah': [24.6105439, 46.7275224],
            'Al Iman Hospital': [24.6005143, 46.7358408],
            'Transportation Center': [24.5982926, 46.7451024],
            'Al Aziziah': [24.5872573, 46.7608230],
            'Ad Dar Al Baida': [24.5599956, 46.7763009],
            'King Saud University': [24.7102491, 46.6284023],
            'King Salman Oasis': [24.7169814, 46.6386072],
            'KACST': [24.7210125, 46.6480934],
            'At Takhassusi': [24.7237623, 46.6546690],
            'Al Wurud': [24.7332599, 46.6770012],
            'King Abdulaziz Road': [24.7367927, 46.6854992],
            'Ministry of Education': [24.7401133, 46.6948417],
            'An Nuzhah': [24.7480677, 46.7122690],
            'Riyadh Exhibition Center': [24.7545206, 46.7271092],
            'Khalid Bin Alwaleed Road': [24.7676049, 46.7588826],
            'Al Hamra': [24.7759490, 46.7766872],
            'Al Khaleej': [24.7818785, 46.7940337],
            'Ishbiliyah': [24.7924073, 46.8111286],
            'King Fahad Sport City': [24.7930679, 46.8365959],
            'Jeddah Road': [24.5914477, 46.5435474],
            'Tuwaiq': [24.5854683, 46.5596991],
            'Ad Douh': [24.5827481, 46.5883285],
            'Western Station': [24.5819475, 46.6144964],
            'Aishah Bint Abi Bakr St': [24.6005633, 46.6437994],
            'Dhahrat Al Badiah': [24.6067380, 46.6537887],
            'Sultanah': [24.6149704, 46.6864245],
            'Al Jarradiyah': [24.6182534, 46.6974109],
            'Courts Complex': [24.6267301, 46.7122960],
            'Al Hilla': [24.6322502, 46.7218810],
            'Al Margab': [24.6344958, 46.7263187],
            'As Salhiyah': [24.6377619, 46.7329123],
            'First Industrial City': [24.6451922, 46.7394161],
            'Railway': [24.6494052, 46.7406288],
            'Al Malaz': [24.6614228, 46.7447701],
            'Jarir District': [24.6729904, 46.7602930],
            'Al Rajhi Grand Mosque': [24.6801982, 46.7794540],
            'Harun Ar Rashid Road': [24.6860343, 46.7959920],
            'An Naseem': [24.7004315, 46.8275319],
            'Hassan Bin Thabit St': [24.7127625, 46.8474565],
            'Khashm Al An': [24.7212165, 46.8603114],
            'Ar Rabi': [24.7862174, 46.6601128],
            'Uthman Bin Affan Road': [24.8013859, 46.6959646],
            'SABIC': [24.8070777, 46.7095202],
            'PNU 1 (Princess Nourah Univ)': [24.8427186, 46.7212257],
            'PNU 2': [24.8576111, 46.7151576],
            'Airport T5': [24.9408001, 46.7102298],
            'Airport T3-T4': [24.9559904, 46.7022528],
            'Airport T1-T2': [24.9609991, 46.6989919],
            'King Salman Park': [24.7281930, 46.7009143],
            'As Sulimaniyah': [24.7127870, 46.7003484],
            'Ad Dhabab': [24.7097595, 46.7075259],
            'Abu Dhabi Square': [24.7060545, 46.7163204],
            'Officers Club': [24.6978852, 46.7179554],
            'GOSI': [24.6862710, 46.7181889],
            'Al Wizarat': [24.6760189, 46.7183955],
            'Ministry of Defense': [24.6679945, 46.7182698],
            'King Abdulaziz Hospital': [24.6596758, 46.7177038],
            'Ministry of Finance': [24.6521076, 46.7163114],
            'Granada': [24.7864457, 46.7292023],
            'Al Andalus': [24.7567803, 46.7903506],
            'Al Yarmuk': [24.7912982, 46.7662398],
            'Khurais Road': [24.7407170, 46.7987229],
            'As Salam': [24.7226689, 46.8112903]
        };
        Object.values(METRO_LINES).forEach(line =>
            line.stations.forEach(st => {
                const c = METRO_COORDS[st.name];
                if (c) { st.lat = c[0]; st.lng = c[1]; }
            })
        );

        // =========================================================================
        // 2. RIYADH BUS NETWORK — OFFICIAL RCRC 2024 OPEN DATA
        //    88 routes with real road geometry + 3,010 scheduled bus stops
        // =========================================================================
        const BUS_ROUTE_BY_NO = {};
        BUS_ROUTES_DATA.forEach(r => { BUS_ROUTE_BY_NO[r.route] = r; });

        const BUS_STOP_COUNTS = {};
        BUS_STOPS_DATA.forEach(s => { if (s.r) BUS_STOP_COUNTS[s.r] = (BUS_STOP_COUNTS[s.r] || 0) + 1; });

        const BUS_CORRIDORS = BUS_ROUTES_DATA.map(r => {
            const g = r.g;
            const lines = g.type === 'MultiLineString' ? g.coordinates : [g.coordinates];
            const flat = [];
            lines.forEach(l => l.forEach(c => flat.push([c[0], c[1]])));
            const kind = r.type; // main | brt | sector | community
            const category = kind === 'community' ? 'COMMUNITY' : kind === 'sector' ? 'SECTOR' : 'MAIN';
            const name = r.name || `${r.from || ''} – ${r.to || ''}`;
            return {
                route: 'BUS ' + r.route,
                no: parseInt(r.route, 10),
                name,
                category,
                kind,
                color: r.color || '#d97706',
                desc: `Riyadh Bus route ${r.route} • ${kind} service • ${r.stops} scheduled stops • ~${r.km} km • SAR 4 flat fare (Darb card)`,
                stopCount: BUS_STOP_COUNTS[r.route] || r.stops || 0,
                coords: flat,
                geom: g
            };
        });

        // Direction-of-travel arrows: first linestring of each route = outbound direction
        const BUS_DIR_GEOJSON = {
            type: 'FeatureCollection',
            features: BUS_CORRIDORS.map(b => {
                const parts = b.geom.type === 'MultiLineString' ? b.geom.coordinates : [b.geom.coordinates];
                return {
                    type: 'Feature',
                    properties: { no: b.no, route: b.route },
                    geometry: { type: 'LineString', coordinates: parts[0] }
                };
            })
        };

        // 3,010 official bus stops (RCRC 2024) — one feature per scheduled stop
        const BUS_STOPS_GEOJSON = {
            type: 'FeatureCollection',
            features: BUS_STOPS_DATA.map(s => {
                const rt = BUS_ROUTE_BY_NO[s.r];
                const kind = rt ? rt.type : '';
                return {
                    type: 'Feature',
                    properties: {
                        n: s.n,
                        r: s.r,
                        shelter: s.s,
                        district: s.d,
                        metro: s.m,
                        op: s.o ? 1 : 0,
                        no: s.r ? parseInt(s.r, 10) : -1,
                        cat: kind === 'community' ? 'COMMUNITY' : kind === 'sector' ? 'SECTOR' : kind ? 'MAIN' : '',
                        color: (rt && rt.color) || '#94a3b8'
                    },
                    geometry: { type: 'Point', coordinates: s.g }
                };
            })
        };

        // =========================================================================
        // 3. 46+ MAJOR RIYADH PLACES, MALLS, LANDMARKS, DISTRICTS & UNIVERSITIES
        // =========================================================================
        const RIYADH_PLACES = [
            // Malls
            { name: 'Kingdom Centre Tower & Mall', lat: 24.7114, lng: 46.6742, cat: 'Mall', icon: '🛍️' },
            { name: 'Al Faisaliah Tower & Mall', lat: 24.6902, lng: 46.6852, cat: 'Mall', icon: '🛍️' },
            { name: 'Riyadh Park Mall', lat: 24.7558, lng: 46.6302, cat: 'Mall', icon: '🛍️' },
            { name: 'Granada Mall', lat: 24.7824, lng: 46.7295, cat: 'Mall', icon: '🛍️' },
            { name: 'Al Nakheel Mall', lat: 24.7684, lng: 46.7155, cat: 'Mall', icon: '🛍️' },
            { name: 'Panorama Mall', lat: 24.6922, lng: 46.6698, cat: 'Mall', icon: '🛍️' },
            { name: 'Hayat Mall', lat: 24.7428, lng: 46.6798, cat: 'Mall', icon: '🛍️' },
            { name: 'Riyadh Gallery Mall', lat: 24.7435, lng: 46.6585, cat: 'Mall', icon: '🛍️' },
            { name: 'Al Othaim Mall (Rabwah)', lat: 24.6915, lng: 46.7745, cat: 'Mall', icon: '🛍️' },
            { name: 'Centria Mall', lat: 24.6978, lng: 46.6845, cat: 'Mall', icon: '🛍️' },
            { name: 'Park Avenue Mall', lat: 24.8355, lng: 46.7275, cat: 'Mall', icon: '🛍️' },
            { name: 'Al Hamra Mall', lat: 24.7742, lng: 46.7775, cat: 'Mall', icon: '🛍️' },
            { name: 'Salam Mall', lat: 24.5775, lng: 46.6255, cat: 'Mall', icon: '🛍️' },
            // Landmarks & Entertainment
            { name: 'KAFD (King Abdullah Financial District)', lat: 24.7668, lng: 46.6430, cat: 'Landmark', icon: '🏢' },
            { name: 'Boulevard City', lat: 24.7685, lng: 46.6038, cat: 'Landmark', icon: '🎡' },
            { name: 'Boulevard World', lat: 24.7745, lng: 46.5975, cat: 'Landmark', icon: '🌍' },
            { name: 'Diriyah / Bujairi Terrace', lat: 24.7358, lng: 46.5745, cat: 'Landmark', icon: '🕌' },
            { name: 'Qasr Al Hokm & Al Masmak', lat: 24.6312, lng: 46.7134, cat: 'Landmark', icon: '🏰' },
            { name: 'National Museum of Saudi Arabia', lat: 24.6472, lng: 46.7118, cat: 'Landmark', icon: '🏛️' },
            { name: 'ROSHN Front / Riyadh Front', lat: 24.8385, lng: 46.7285, cat: 'Landmark', icon: '☕' },
            { name: 'King Khalid International Airport (RUH)', lat: 24.9578, lng: 46.6989, cat: 'Landmark', icon: '✈️' },
            { name: 'King Salman Park', lat: 24.7165, lng: 46.7185, cat: 'Landmark', icon: '🌳' },
            { name: 'Via Riyadh', lat: 24.6732, lng: 46.6365, cat: 'Landmark', icon: '🍽️' },
            { name: 'King Fahad International Stadium', lat: 24.7885, lng: 46.8390, cat: 'Landmark', icon: '🏟️' },
            { name: 'Riyadh Zoo', lat: 24.6768, lng: 46.7375, cat: 'Landmark', icon: '🦁' },
            { name: 'Al Rajhi Grand Mosque', lat: 24.6805, lng: 46.8355, cat: 'Landmark', icon: '🕌' },
            // Universities
            { name: 'King Saud University (KSU)', lat: 24.7238, lng: 46.6185, cat: 'University', icon: '🎓' },
            { name: 'Princess Nourah University (PNU)', lat: 24.8450, lng: 46.7240, cat: 'University', icon: '🎓' },
            { name: 'Imam Mohammad Ibn Saud University', lat: 24.8125, lng: 46.7015, cat: 'University', icon: '🎓' },
            { name: 'Prince Sultan University (PSU)', lat: 24.7365, lng: 46.7015, cat: 'University', icon: '🎓' },
            { name: 'Alfaisal University', lat: 24.6645, lng: 46.6755, cat: 'University', icon: '🎓' },
            // Hospitals
            { name: 'King Faisal Specialist Hospital', lat: 24.6718, lng: 46.6785, cat: 'Hospital', icon: '🏥' },
            { name: 'King Fahad Medical City', lat: 24.6875, lng: 46.7045, cat: 'Hospital', icon: '🏥' },
            { name: 'Dr. Sulaiman Al Habib (Olaya)', lat: 24.7065, lng: 46.6765, cat: 'Hospital', icon: '🏥' },
            { name: 'Dr. Sulaiman Al Habib (Takhassusi)', lat: 24.6965, lng: 46.6665, cat: 'Hospital', icon: '🏥' },
            { name: 'King Saud Medical City', lat: 24.6355, lng: 46.6965, cat: 'Hospital', icon: '🏥' },
            // Districts
            { name: 'Al Olaya District', lat: 24.7025, lng: 46.6780, cat: 'District', icon: '📍' },
            { name: 'Diplomatic Quarter (DQ)', lat: 24.6765, lng: 46.6255, cat: 'District', icon: '🌿' },
            { name: 'Al Malaz District', lat: 24.6685, lng: 46.7355, cat: 'District', icon: '📍' },
            { name: 'Al Batha District', lat: 24.6345, lng: 46.7145, cat: 'District', icon: '📍' },
            { name: 'Al Yasmin District', lat: 24.8245, lng: 46.6355, cat: 'District', icon: '📍' },
            { name: 'Al Narjis District', lat: 24.8485, lng: 46.6655, cat: 'District', icon: '📍' },
            { name: 'Al Rawdah District', lat: 24.7355, lng: 46.7755, cat: 'District', icon: '📍' },
            { name: 'An Naseem District', lat: 24.7155, lng: 46.8455, cat: 'District', icon: '📍' },
            { name: 'Al Suwaidi District', lat: 24.5925, lng: 46.6455, cat: 'District', icon: '📍' },
            { name: 'As Sulimaniyah District', lat: 24.6985, lng: 46.7085, cat: 'District', icon: '📍' },
            // More real Riyadh locations
            { name: 'King Abdullah Park', lat: 24.6415, lng: 46.7205, cat: 'Landmark', icon: '🌳' },
            { name: 'Al Watan Park (Hadikat Al Watan)', lat: 24.6446, lng: 46.7105, cat: 'Landmark', icon: '🌳' },
            { name: 'Wadi Hanifah', lat: 24.7280, lng: 46.7950, cat: 'Landmark', icon: '🏞️' },
            { name: 'Tayba', lat: 24.5280, lng: 46.6850, cat: 'District', icon: '📍' },
            { name: 'Qurtubah', lat: 24.7950, lng: 46.6850, cat: 'District', icon: '📍' },
            { name: 'Al Murabba', lat: 24.6523, lng: 46.7098, cat: 'District', icon: '📍' },
            { name: 'King Fahd Cultural Center', lat: 24.7335, lng: 46.6625, cat: 'Landmark', icon: '🎭' },
            { name: 'An Nahdah', lat: 24.7608, lng: 46.8061, cat: 'District', icon: '📍' }
        ];

        // Collect unique stations & transfer hubs (merge lines served by each station)
        const ALL_STATIONS = [];
        const stByName = new Map();
        Object.values(METRO_LINES).forEach(line => {
            line.stations.forEach(st => {
                const ex = stByName.get(st.name);
                if (ex) {
                    st.lines.forEach(l => { if (!ex.lines.includes(l)) ex.lines.push(l); });
                    if (st.hub) ex.hub = true;
                } else {
                    const copy = { ...st, lines: [...st.lines] };
                    stByName.set(st.name, copy);
                    ALL_STATIONS.push(copy);
                }
            });
        });
        const TRANSFER_HUBS = ALL_STATIONS.filter(s => s.hub === true);

        // Live UI counters (real data-driven counts)
        document.getElementById('chip-all').textContent = `All Places (${RIYADH_PLACES.length})`;
        document.getElementById('station-count-caption').textContent = `${ALL_STATIONS.length} stations • ${TRANSFER_HUBS.length} interchanges`;
        document.getElementById('bus-count-badge').textContent = `${BUS_CORRIDORS.length} Routes • ${BUS_STOPS_DATA.length.toLocaleString()} Stops`;

        // =========================================================================
        // 4. INITIALIZE MAPLIBRE GL JS (100% FREE, ZERO-API-KEY VECTOR TILES)
        // =========================================================================
        const BASEMAP_STYLES = {
            positron: 'https://tiles.openfreemap.org/styles/positron'
        };

        const map = new maplibregl.Map({
            container: 'map',
            style: BASEMAP_STYLES.positron,
            center: [46.6753, 24.7136],
            zoom: 11,
            attributionControl: false
        });

        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-left');

        // App State
        let metroVisible = true;
        let busVisible = false;
        let activeLineFilter = 'ALL'; // 'ALL' or 'L1'..'L6'
        let activeBusFilter = 'ALL';  // 'ALL', 'MAIN', 'SECTOR', 'COMMUNITY', or 'R<no>'
        let activePlaceCat = 'ALL';   // 'ALL', 'Mall', 'Landmark', 'District', 'University', 'Hospital', 'NONE'
        let placeMarkers = [];
        let destinationMarker = null;
        let currentDestination = null;
        let activePopup = null;

        // =========================================================================
        // 5. BUILD GEOJSON SOURCES & VECTOR TRANSIT LAYERS
        // =========================================================================
        function buildMetroLinesGeoJSON() {
            const features = Object.values(METRO_LINES).map(line => ({
                type: 'Feature',
                properties: {
                    id: line.id,
                    name: line.name,
                    color: line.color,
                    corridor: line.corridor
                },
                geometry: {
                    type: 'LineString',
                    coordinates: line.stations.map(s => [s.lng, s.lat])
                }
            }));
            return { type: 'FeatureCollection', features };
        }

        function buildMetroStationsGeoJSON() {
            const features = ALL_STATIONS.map(st => ({
                type: 'Feature',
                properties: {
                    name: st.name,
                    lines: JSON.stringify(st.lines),
                    primaryColor: METRO_LINES[st.lines[0]].color,
                    hub: st.hub ? 1 : 0
                },
                geometry: {
                    type: 'Point',
                    coordinates: [st.lng, st.lat]
                }
            }));
            return { type: 'FeatureCollection', features };
        }

        function buildBusCorridorsGeoJSON() {
            const features = BUS_CORRIDORS.map(b => ({
                type: 'Feature',
                properties: {
                    route: b.route,
                    no: b.no,
                    name: b.name,
                    category: b.category,
                    kind: b.kind,
                    stopCount: b.stopCount,
                    color: b.color,
                    desc: b.desc
                },
                geometry: b.geom
            }));
            return { type: 'FeatureCollection', features };
        }

        function setupTransitMapLayers() {
            // 1. Bus Routes Source & Layer (official road-following geometry)
            if (!map.getSource('bus-routes')) {
                map.addSource('bus-routes', { type: 'geojson', data: buildBusCorridorsGeoJSON() });
                map.addLayer({
                    id: 'bus-lines-layer',
                    type: 'line',
                    source: 'bus-routes',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                        'visibility': busVisible ? 'visible' : 'none'
                    },
                    paint: {
                        'line-color': ['get', 'color'],
                        'line-width': ['case',
                            ['==', ['get', 'kind'], 'brt'], 4.5,
                            ['==', ['get', 'category'], 'COMMUNITY'], 2.2, 3.2],
                        'line-dasharray': ['case',
                            ['==', ['get', 'category'], 'COMMUNITY'], [2, 1.4], [1, 0]],
                        'line-opacity': 0.85
                    }
                });
            }

            // 1b. Official bus stops (3,010 scheduled stops)
            if (!map.getSource('bus-stops')) {
                map.addSource('bus-stops', { type: 'geojson', data: BUS_STOPS_GEOJSON });
                map.addLayer({
                    id: 'bus-stops-layer',
                    type: 'circle',
                    source: 'bus-stops',
                    minzoom: 11.5,
                    layout: {
                        'visibility': busVisible ? 'visible' : 'none'
                    },
                    paint: {
                        'circle-radius': ['interpolate', ['linear'], ['zoom'], 11.5, 1.6, 14, 3, 16, 5],
                        'circle-color': ['case', ['==', ['get', 'op'], 0], '#cbd5e1', ['get', 'color']],
                        'circle-opacity': ['case', ['==', ['get', 'op'], 0], 0.45, 0.95],
                        'circle-stroke-width': 1,
                        'circle-stroke-color': '#ffffff',
                        'circle-stroke-opacity': 0.8
                    }
                });
            }

            // 1c. Direction-of-travel arrows (shown only for the isolated route)
            if (!map.getSource('bus-dir')) {
                map.addSource('bus-dir', { type: 'geojson', data: BUS_DIR_GEOJSON });
                map.addLayer({
                    id: 'bus-dir-arrows',
                    type: 'symbol',
                    source: 'bus-dir',
                    layout: {
                        'symbol-placement': 'line',
                        'symbol-spacing': 160,
                        'text-field': '►',
                        'text-size': 15,
                        'text-allow-overlap': true,
                        'visibility': 'none'
                    },
                    paint: {
                        'text-color': '#ffffff',
                        'text-halo-color': '#ef4444',
                        'text-halo-width': 2
                    }
                });
            }

            // 1d. Planned route overlay (walk dashes + colored ride lines)
            if (!map.getSource('plan-geo')) {
                map.addSource('plan-geo', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
                map.addLayer({
                    id: 'plan-walk-layer',
                    type: 'line',
                    source: 'plan-geo',
                    filter: ['==', ['get', 'kind'], 'walk'],
                    layout: { 'line-join': 'round', 'line-cap': 'round' },
                    paint: {
                        'line-color': '#64748b',
                        'line-width': 3,
                        'line-dasharray': [2, 1.5],
                        'line-opacity': 0.85
                    }
                });
                map.addLayer({
                    id: 'plan-ride-layer',
                    type: 'line',
                    source: 'plan-geo',
                    filter: ['==', ['get', 'kind'], 'ride'],
                    layout: { 'line-join': 'round', 'line-cap': 'round' },
                    paint: {
                        'line-color': ['get', 'color'],
                        'line-width': 6,
                        'line-opacity': 0.95
                    }
                });
            }

            // 2. Metro Lines Source & Casing + Main Colored Line
            if (!map.getSource('metro-lines')) {
                map.addSource('metro-lines', { type: 'geojson', data: buildMetroLinesGeoJSON() });
                map.addLayer({
                    id: 'metro-lines-casing',
                    type: 'line',
                    source: 'metro-lines',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                        'visibility': metroVisible ? 'visible' : 'none'
                    },
                    paint: {
                        'line-color': '#ffffff',
                        'line-width': 7.5,
                        'line-opacity': 0.92
                    }
                });
                map.addLayer({
                    id: 'metro-lines-layer',
                    type: 'line',
                    source: 'metro-lines',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                        'visibility': metroVisible ? 'visible' : 'none'
                    },
                    paint: {
                        'line-color': ['get', 'color'],
                        'line-width': 4.8,
                        'line-opacity': 1
                    }
                });
            }

            // 3. Walking Connector Line Source & Layer
            if (!map.getSource('connector-line')) {
                map.addSource('connector-line', {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] }
                });
                map.addLayer({
                    id: 'connector-line-layer',
                    type: 'line',
                    source: 'connector-line',
                    layout: { 'line-cap': 'round' },
                    paint: {
                        'line-color': '#059669',
                        'line-width': 4,
                        'line-dasharray': [1.5, 1.5]
                    }
                });
            }

            // 4. Metro Stations Circle Layer
            if (!map.getSource('metro-stations')) {
                map.addSource('metro-stations', { type: 'geojson', data: buildMetroStationsGeoJSON() });
                map.addLayer({
                    id: 'metro-stations-layer',
                    type: 'circle',
                    source: 'metro-stations',
                    layout: {
                        'visibility': metroVisible ? 'visible' : 'none'
                    },
                    paint: {
                        'circle-radius': ['case', ['==', ['get', 'hub'], 1], 7, 4.5],
                        'circle-color': ['case', ['==', ['get', 'hub'], 1], '#ffffff', ['get', 'primaryColor']],
                        'circle-stroke-width': ['case', ['==', ['get', 'hub'], 1], 3, 2],
                        'circle-stroke-color': ['case', ['==', ['get', 'hub'], 1], '#0f172a', '#ffffff']
                    }
                });
            }

            applyLayerFilters();
            if (currentDestination) {
                updateConnectorLine(currentDestination.lng, currentDestination.lat, currentDestination.closestStation);
            }
        }

        function applyLayerFilters() {
            if (!map.getLayer('metro-lines-layer')) return;

            const metroVis = metroVisible ? 'visible' : 'none';
            map.setLayoutProperty('metro-lines-casing', 'visibility', metroVis);
            map.setLayoutProperty('metro-lines-layer', 'visibility', metroVis);
            map.setLayoutProperty('metro-stations-layer', 'visibility', metroVis);

            if (activeLineFilter === 'ALL') {
                map.setFilter('metro-lines-casing', null);
                map.setFilter('metro-lines-layer', null);
                map.setFilter('metro-stations-layer', null);
                map.setPaintProperty('metro-lines-layer', 'line-width', 4.8);
                map.setPaintProperty('metro-lines-casing', 'line-width', 7.5);
            } else {
                const lineFilter = ['==', ['get', 'id'], activeLineFilter];
                const stFilter = ['in', `"${activeLineFilter}"`, ['get', 'lines']];
                map.setFilter('metro-lines-casing', lineFilter);
                map.setFilter('metro-lines-layer', lineFilter);
                map.setFilter('metro-stations-layer', stFilter);
                map.setPaintProperty('metro-lines-layer', 'line-width', 6.5);
                map.setPaintProperty('metro-lines-casing', 'line-width', 9.5);
            }

            if (!map.getLayer('bus-stops-layer')) return;
            const busVis = busVisible ? 'visible' : 'none';
            map.setLayoutProperty('bus-lines-layer', 'visibility', busVis);
            map.setLayoutProperty('bus-stops-layer', 'visibility', busVis);
            let busFilter = null, stopFilter = null;
            if (activeBusFilter.startsWith('R')) {
                const n = parseInt(activeBusFilter.slice(1), 10);
                busFilter = ['==', ['get', 'no'], n];
                stopFilter = ['==', ['get', 'no'], n];
            } else if (activeBusFilter !== 'ALL') {
                busFilter = ['==', ['get', 'category'], activeBusFilter];
                stopFilter = ['==', ['get', 'cat'], activeBusFilter];
            }
            map.setFilter('bus-lines-layer', busFilter);
            map.setFilter('bus-stops-layer', stopFilter);
            // single isolated route → thick red highlight so it pops
            const soloRoute = activeBusFilter.startsWith('R');
            map.setPaintProperty('bus-lines-layer', 'line-color', soloRoute ? '#ef4444' : ['get', 'color']);
            map.setPaintProperty('bus-lines-layer', 'line-width', soloRoute ? 6 : ['case',
                ['==', ['get', 'kind'], 'brt'], 4.5,
                ['==', ['get', 'category'], 'COMMUNITY'], 2.2, 3.2]);
            map.setPaintProperty('bus-lines-layer', 'line-opacity', soloRoute ? 1 : 0.85);
            map.setPaintProperty('bus-lines-layer', 'line-dasharray', soloRoute ? [1, 0] : ['case',
                ['==', ['get', 'category'], 'COMMUNITY'], [2, 1.4], [1, 0]]);
            // enlarge stops when a single route is isolated so its path is obvious
            map.setPaintProperty('bus-stops-layer', 'circle-radius', soloRoute
                ? 6
                : ['interpolate', ['linear'], ['zoom'], 11.5, 1.6, 14, 3, 16, 5]);
            // direction arrows only for the isolated route
            if (map.getLayer('bus-dir-arrows')) {
                map.setLayoutProperty('bus-dir-arrows', 'visibility', soloRoute ? 'visible' : 'none');
                map.setFilter('bus-dir-arrows', soloRoute ? ['==', ['get', 'no'], parseInt(activeBusFilter.slice(1), 10)] : null);
            }
        }

        // Make basemap street/place labels earlier, larger and more readable on phones.
        function enhanceBasemapLabels() {
            const streetField = ['coalesce', ['get', 'name_en'], ['get', 'name:latin'], ['get', 'name'], ['get', 'name:nonlatin'], ''];
            const labelPaint = { 'text-halo-color': '#ffffff', 'text-halo-width': 1.4 };

            if (map.getLayer('highway-name-major')) {
                if (map.setLayerZoomRange) map.setLayerZoomRange('highway-name-major', 10, 22);
                map.setLayoutProperty('highway-name-major', 'text-field', streetField);
                map.setLayoutProperty('highway-name-major', 'text-size', ['interpolate', ['linear'], ['zoom'], 10, 10.5, 13, 12.5, 16, 15]);
                map.setPaintProperty('highway-name-major', 'text-color', '#4b5563');
                Object.entries(labelPaint).forEach(([k, v]) => map.setPaintProperty('highway-name-major', k, v));
            }
            if (map.getLayer('highway-name-minor')) {
                if (map.setLayerZoomRange) map.setLayerZoomRange('highway-name-minor', 12.8, 22);
                map.setLayoutProperty('highway-name-minor', 'text-field', streetField);
                map.setLayoutProperty('highway-name-minor', 'text-size', ['interpolate', ['linear'], ['zoom'], 13, 10.5, 16, 13.5]);
                map.setPaintProperty('highway-name-minor', 'text-color', '#6b7280');
                Object.entries(labelPaint).forEach(([k, v]) => map.setPaintProperty('highway-name-minor', k, v));
            }
            if (map.getLayer('highway-name-path')) {
                if (map.setLayerZoomRange) map.setLayerZoomRange('highway-name-path', 14.8, 22);
                map.setLayoutProperty('highway-name-path', 'text-field', streetField);
                map.setLayoutProperty('highway-name-path', 'text-size', ['interpolate', ['linear'], ['zoom'], 15, 10, 18, 12.5]);
                map.setPaintProperty('highway-name-path', 'text-color', '#9ca3af');
                Object.entries(labelPaint).forEach(([k, v]) => map.setPaintProperty('highway-name-path', k, v));
            }
            ['label_city', 'label_town', 'label_village', 'label_other'].forEach(id => {
                if (!map.getLayer(id)) return;
                map.setLayoutProperty(id, 'text-field', streetField);
                map.setPaintProperty(id, 'text-halo-color', '#ffffff');
                map.setPaintProperty(id, 'text-halo-width', 1.2);
            });
        }

        map.on('load', () => {
            setupTransitMapLayers();
            enhanceBasemapLabels();
            renderPlaceMarkers();
        });

        // Re-apply custom vector layers whenever basemap style changes
        map.on('style.load', () => {
            setupTransitMapLayers();
            enhanceBasemapLabels();
        });

        // Station & Line Click Popups
        let suppressMapClick = false; // set by layer clicks so the map tap doesn't drop a pin

        map.on('click', 'metro-stations-layer', (e) => {
            if (planPickTarget || homePickMode) {
                handlePlannerMapPick(e.lngLat.lat, e.lngLat.lng);
                suppressMapClick = true;
                return;
            }
            suppressMapClick = true;
            e.originalEvent.stopPropagation();
            const props = e.features[0].properties;
            const coords = e.features[0].geometry.coordinates.slice();
            const lines = JSON.parse(props.lines);
            const badges = lines.map(code => {
                const l = METRO_LINES[code];
                return `<span class="px-2 py-0.5 rounded-md text-[10px] font-extrabold" style="background:${l.color};color:${l.textColor}">${l.shortName}</span>`;
            }).join(' ');

            if (activePopup) activePopup.remove();
            activePopup = new maplibregl.Popup({ offset: 12 })
                .setLngLat(coords)
                .setHTML(`
                    <div class="space-y-1.5 min-w-[175px]">
                        <span class="text-[10px] font-bold uppercase tracking-wider ${props.hub ? 'text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded' : 'text-slate-400'}">
                            ${props.hub ? 'Multi-Line Transfer Hub' : 'Riyadh Metro Station'}
                        </span>
                        <div class="font-extrabold text-sm text-slate-900">${props.name}</div>
                        <div class="flex flex-wrap gap-1">${badges}</div>
                        <div class="text-[11px] text-slate-500 pt-0.5">Standard 2-hr fare: SAR 4 (Darb)</div>
                    </div>
                `)
                .addTo(map);
        });

        map.on('click', 'bus-lines-layer', (e) => {
            if (planPickTarget || homePickMode) {
                handlePlannerMapPick(e.lngLat.lat, e.lngLat.lng);
                suppressMapClick = true;
                return;
            }
            // if a bus stop dot is under the cursor, let the stop popup handle it
            const under = map.queryRenderedFeatures(e.point, { layers: ['bus-stops-layer'] });
            if (under.length) return;
            suppressMapClick = true;
            e.originalEvent.stopPropagation();
            const props = e.features[0].properties;
            if (activePopup) activePopup.remove();
            activePopup = new maplibregl.Popup({ offset: 10 })
                .setLngLat(e.lngLat)
                .setHTML(`
                    <div class="space-y-1 max-w-[220px]">
                        <div class="flex items-center gap-1.5">
                            <span class="px-2 py-0.5 rounded text-[10px] font-extrabold text-white" style="background:${props.color}">${props.route}</span>
                            <span class="text-[10px] font-bold uppercase text-slate-400">${props.category}</span>
                        </div>
                        <div class="font-bold text-xs text-slate-900">${props.name}</div>
                        <p class="text-[11px] text-slate-600 leading-snug">${props.desc}</p>
                        <button class="bus-solo-btn mt-1 w-full px-2 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold transition" data-no="${props.no}">Show this route + its ${props.stopCount || ''} stops</button>
                    </div>
                `)
                .addTo(map);

            const soloBtn = activePopup.getElement().querySelector('.bus-solo-btn');
            if (soloBtn) {
                soloBtn.addEventListener('click', () => {
                    const route = BUS_CORRIDORS.find(b => b.no === parseInt(soloBtn.dataset.no, 10));
                    setBusFilter('R' + soloBtn.dataset.no);
                    if (activePopup) activePopup.remove();
                    if (route) {
                        const bounds = new maplibregl.LngLatBounds();
                        route.coords.forEach(c => bounds.extend(c));
                        map.fitBounds(bounds, { padding: 80, maxZoom: 13.5 });
                    }
                    showToast(`Showing only ${props.route} + its stops — pick "Show all routes" to reset`);
                });
            }
        });

        // Bus stop click popup
        map.on('click', 'bus-stops-layer', (e) => {
            if (planPickTarget || homePickMode) {
                handlePlannerMapPick(e.lngLat.lat, e.lngLat.lng);
                suppressMapClick = true;
                return;
            }
            suppressMapClick = true;
            e.originalEvent.stopPropagation();
            const p = e.features[0].properties;
            if (activePopup) activePopup.remove();

            const shelterLabel = {
                'brt': 'BRT station', 'ac-large': 'AC shelter (large)', 'ac': 'AC shelter',
                'terminal': 'Bus terminal', 'metro': 'Metro station stop', 'open': 'Open shelter',
                'pole': 'Pole sign', 'pole-standard': 'Pole & standard', 'unknown': 'Bus stop'
            }[p.shelter] || 'Bus stop';

            // nearest metro station within ~1.2 km
            let nearMetro = null, nearDist = Infinity;
            ALL_STATIONS.forEach(st => {
                const d = haversineKm(e.lngLat.lat, e.lngLat.lng, st.lat, st.lng);
                if (d < nearDist) { nearDist = d; nearMetro = st; }
            });
            const metroHtml = (nearMetro && nearDist <= 1.2)
                ? `<div class="text-[11px] text-slate-500 pt-0.5">${nearMetro.name} • ${nearDist.toFixed(1)} km</div>`
                : '';

            activePopup = new maplibregl.Popup({ offset: 8 })
                .setLngLat(e.lngLat)
                .setHTML(`
                    <div class="space-y-1 max-w-[220px]">
                        <div class="font-extrabold text-xs text-slate-900">${p.n || 'Bus stop'}</div>
                        <div class="flex items-center gap-1.5">
                            ${p.r ? `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold text-white" style="background:${p.color}">BUS ${p.r}</span>` : ''}
                            <span class="text-[10px] font-semibold text-slate-400">${shelterLabel}</span>
                        </div>
                        ${p.district ? `<div class="text-[11px] text-slate-500">${p.district}</div>` : ''}
                        ${p.op ? '' : '<div class="text-[10px] font-bold text-slate-400">Planned — not yet operating</div>'}
                        ${metroHtml}
                        ${p.r ? `<button class="bus-stop-isolate mt-1 w-full px-2 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold transition" data-no="${p.no}">Show BUS ${p.r} + its stops</button>` : ''}
                    </div>
                `)
                .addTo(map);

            const isoBtn = activePopup.getElement().querySelector('.bus-stop-isolate');
            if (isoBtn) {
                isoBtn.addEventListener('click', () => {
                    const route = BUS_CORRIDORS.find(b => b.no === parseInt(isoBtn.dataset.no, 10));
                    setBusFilter('R' + isoBtn.dataset.no);
                    if (activePopup) activePopup.remove();
                    if (route) {
                        const bounds = new maplibregl.LngLatBounds();
                        route.coords.forEach(c => bounds.extend(c));
                        map.fitBounds(bounds, { padding: 80, maxZoom: 13.5 });
                    }
                    showToast(`Showing only BUS ${isoBtn.dataset.no} + its stops`);
                });
            }
        });

        map.on('mouseenter', 'metro-stations-layer', () => map.getCanvas().style.cursor = 'pointer');
        map.on('mouseleave', 'metro-stations-layer', () => map.getCanvas().style.cursor = '');
        map.on('mouseenter', 'bus-lines-layer', () => map.getCanvas().style.cursor = 'pointer');
        map.on('mouseleave', 'bus-lines-layer', () => map.getCanvas().style.cursor = '');
        map.on('mouseenter', 'bus-stops-layer', () => map.getCanvas().style.cursor = 'pointer');
        map.on('mouseleave', 'bus-stops-layer', () => map.getCanvas().style.cursor = '');

        // =========================================================================
        // 6. PLACE PINS RENDERING
        // =========================================================================
        function renderPlaceMarkers() {
            placeMarkers.forEach(m => m.remove());
            placeMarkers = [];

            if (activePlaceCat === 'NONE') return;

            const filtered = activePlaceCat === 'ALL'
                ? RIYADH_PLACES
                : RIYADH_PLACES.filter(p => p.cat === activePlaceCat);

            filtered.forEach(place => {
                const el = document.createElement('div');
                el.className = 'place-marker';
                el.title = `${place.name} (${place.cat})`;
                el.innerHTML = `<span class="text-[10px] font-black leading-none text-slate-700">${(place.cat || 'P')[0]}</span>`;

                el.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    selectDestination(place.name, place.lat, place.lng, place.cat);
                });

                const marker = new maplibregl.Marker({ element: el })
                    .setLngLat([place.lng, place.lat])
                    .addTo(map);
                placeMarkers.push(marker);
            });
        }

        // =========================================================================
        // 7. CLOSEST METRO, INTERCHANGE & NEARBY BUS PLANNER
        // =========================================================================
        function haversineKm(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);
            return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        }

        function updateConnectorLine(lng, lat, station) {
            const src = map.getSource('connector-line');
            if (!src) return;
            src.setData({
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates: [[lng, lat], [station.lng, station.lat]]
                    }
                }]
            });
        }

        function selectDestination(name, lat, lng, category = 'Selected Spot') {
            if (activePopup) activePopup.remove();

            // Find closest station (respecting isolated line if user isolated 1 color, or all stations)
            const candidateStations = activeLineFilter === 'ALL'
                ? ALL_STATIONS
                : METRO_LINES[activeLineFilter].stations;

            let closest = candidateStations[0];
            let minDist = Infinity;
            candidateStations.forEach(st => {
                const d = haversineKm(lat, lng, st.lat, st.lng);
                if (d < minDist) {
                    minDist = d;
                    closest = st;
                }
            });

            // Closest Transfer Hub
            let closestHub = TRANSFER_HUBS[0];
            let minHubDist = Infinity;
            TRANSFER_HUBS.forEach(hub => {
                const d = haversineKm(lat, lng, hub.lat, hub.lng);
                if (d < minHubDist) {
                    minHubDist = d;
                    closestHub = hub;
                }
            });

            // Nearby Bus Corridors
            const nearbyBuses = BUS_CORRIDORS
                .map(b => {
                    let best = Infinity;
                    b.coords.forEach(c => {
                        const d = haversineKm(lat, lng, c[1], c[0]);
                        if (d < best) best = d;
                    });
                    return { route: b.route, dist: best };
                })
                .filter(item => item.dist <= 3.5)
                .sort((a, b) => a.dist - b.dist)
                .slice(0, 3)
                .map(b => b.route);

            currentDestination = { name, lat, lng, category, closestStation: closest };

            // Drop pulsing destination marker
            if (destinationMarker) destinationMarker.remove();
            const pinEl = document.createElement('div');
            pinEl.className = 'dest-pin-wrap';
            pinEl.innerHTML = `<div class="dest-pin-pulse"></div><div class="dest-pin-core"></div>`;
            destinationMarker = new maplibregl.Marker({ element: pinEl })
                .setLngLat([lng, lat])
                .addTo(map);

            // Ensure Metro Lines are visible
            if (!metroVisible) setMetroState(true);

            updateConnectorLine(lng, lat, closest);

            // Fit bounds cleanly around destination + nearest Metro station
            const bounds = new maplibregl.LngLatBounds();
            bounds.extend([lng, lat]);
            bounds.extend([closest.lng, closest.lat]);
            map.fitBounds(bounds, { padding: { top: 130, bottom: 290, left: 60, right: 60 }, maxZoom: 14.5 });

            // Populate Slide-Up Route Sheet
            document.getElementById('sheet-cat-badge').textContent = category;
            document.getElementById('sheet-place-title').textContent = name;

            const lineBadges = closest.lines.map(code => {
                const l = METRO_LINES[code];
                return `<span class="px-2 py-0.5 rounded-md text-[10px] font-extrabold" style="background:${l.color};color:${l.textColor}">${l.shortName}</span>`;
            }).join(' ');

            const walkMins = Math.max(2, Math.round((minDist * 1.25) / 0.08));
            const taxiMins = Math.max(2, Math.round((minDist * 1.3) / 0.65));
            const distSummary = minDist < 0.35
                ? `<span class="text-emerald-700 font-bold">Right at station (~3 min walk)</span>`
                : `<strong>${minDist.toFixed(1)} km</strong> • Walk ~${walkMins} min • Taxi ~${taxiMins} min`;

            const busBadges = nearbyBuses.length > 0
                ? nearbyBuses.map(r => `<span class="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">${r}</span>`).join(' ')
                : `<span class="text-slate-500">Check Darb app for local feeder</span>`;

            document.getElementById('sheet-body').innerHTML = `
                <div class="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-3 space-y-1">
                    <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">Closest Metro Station</span>
                        <div class="flex gap-1">${lineBadges}</div>
                    </div>
                    <div class="font-extrabold text-slate-900 text-sm">${closest.name}</div>
                    <div class="text-xs text-slate-700">${distSummary}</div>
                </div>
                <div class="grid grid-cols-2 gap-2 text-[11px]">
                    <div class="bg-slate-50 rounded-xl p-2 border border-slate-200/70">
                        <div class="text-[10px] font-bold uppercase text-slate-400">Nearest Hub</div>
                        <div class="font-bold text-slate-800 truncate mt-0.5">${closestHub.name}</div>
                        <div class="text-slate-500">${minHubDist.toFixed(1)} km away</div>
                    </div>
                    <div class="bg-slate-50 rounded-xl p-2 border border-slate-200/70">
                        <div class="text-[10px] font-bold uppercase text-slate-400 mb-1">Nearby Buses</div>
                        <div class="flex flex-wrap gap-1">${busBadges}</div>
                    </div>
                </div>
            `;

            document.getElementById('route-sheet').classList.remove('hidden');
        }

        // Tap anywhere on Riyadh map to drop a destination pin & find closest Metro
        map.on('click', (e) => {
            // Defer one tick so layer clicks (station/bus popups) can suppress this
            setTimeout(() => {
                if (suppressMapClick) {
                    suppressMapClick = false;
                    if (!planPickTarget && !homePickMode) return;
                }
                if (planPickTarget || homePickMode) {
                    handlePlannerMapPick(e.lngLat.lat, e.lngLat.lng);
                    return;
                }
                selectDestination('Pinned Map Spot', e.lngLat.lat, e.lngLat.lng, 'Custom Pin');
            }, 0);
        });

        document.getElementById('sheet-close-btn').addEventListener('click', () => {
            document.getElementById('route-sheet').classList.add('hidden');
            if (destinationMarker) destinationMarker.remove();
            destinationMarker = null;
            currentDestination = null;
            const src = map.getSource('connector-line');
            if (src) src.setData({ type: 'FeatureCollection', features: [] });
        });

        document.getElementById('sheet-center-btn').addEventListener('click', () => {
            if (!currentDestination) return;
            const bounds = new maplibregl.LngLatBounds();
            bounds.extend([currentDestination.lng, currentDestination.lat]);
            bounds.extend([currentDestination.closestStation.lng, currentDestination.closestStation.lat]);
            map.fitBounds(bounds, { padding: { top: 130, bottom: 290, left: 60, right: 60 }, maxZoom: 15 });
        });

        // =========================================================================
        // 8. LIVE SEARCH BAR & CATEGORY CHIPS
        // =========================================================================
        const searchInput = document.getElementById('search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');
        const dropdown = document.getElementById('search-results-dropdown');

        searchInput.addEventListener('input', () => {
            const q = searchInput.value.trim().toLowerCase();
            clearSearchBtn.classList.toggle('hidden', q.length === 0);

            if (q.length === 0) {
                dropdown.classList.add('hidden');
                return;
            }

            const qn = normTxt(q);
            const matchedPlaces = RIYADH_PLACES.filter(p =>
                normTxt(p.name).includes(qn) || normTxt(p.cat).includes(qn)
            ).slice(0, 7);

            const matchedStations = ALL_STATIONS.filter(s =>
                normTxt(s.name).includes(qn)
            ).slice(0, 5);

            const qDigits = q.replace(/\D/g, '');
            const matchedBuses = BUS_CORRIDORS.filter(b =>
                normTxt(b.name).includes(qn) ||
                b.route.toLowerCase().includes(q) ||
                (qDigits.length >= 2 && b.route.replace(/\D/g, '') === qDigits)
            ).slice(0, 5);

            const matchedStops = BUS_STOPS_DATA.filter(s =>
                s.n && normTxt(s.n).includes(qn)
            ).slice(0, 4);

            if (matchedPlaces.length === 0 && matchedStations.length === 0 && matchedBuses.length === 0 && matchedStops.length === 0) {
                dropdown.innerHTML = `<div class="p-3 text-xs text-slate-500 text-center">No matching Riyadh place or station — tap anywhere on the map!</div>`;
                dropdown.classList.remove('hidden');
                return;
            }

            let html = '';
            matchedPlaces.forEach(p => {
                html += `
                    <button class="search-item w-full text-left px-3.5 py-2.5 hover:bg-emerald-50 flex items-center justify-between gap-2 transition"
                        data-type="place" data-name="${p.name}" data-lat="${p.lat}" data-lng="${p.lng}" data-cat="${p.cat}">
                        <span class="flex items-center gap-2 min-w-0">
                            <span class="font-bold text-xs text-slate-900 truncate">${p.name}</span>
                        </span>
                        <span class="text-[10px] font-semibold text-slate-400 shrink-0">${p.cat}</span>
                    </button>
                `;
            });
            matchedStations.forEach(s => {
                const badges = s.lines.map(c => `<span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${METRO_LINES[c].color}"></span>`).join('');
                html += `
                    <button class="search-item w-full text-left px-3.5 py-2.5 hover:bg-blue-50 flex items-center justify-between gap-2 transition"
                        data-type="station" data-name="${s.name}" data-lat="${s.lat}" data-lng="${s.lng}">
                        <span class="flex items-center gap-2 min-w-0">
                            <span class="font-bold text-xs text-blue-950 truncate">${s.name}</span>
                        </span>
                        <span class="flex items-center gap-1 shrink-0">${badges}</span>
                    </button>
                `;
            });
            matchedBuses.forEach(b => {
                html += `
                    <button class="search-item w-full text-left px-3.5 py-2.5 hover:bg-amber-50 flex items-center justify-between gap-2 transition"
                        data-type="bus" data-route="${b.route}">
                        <span class="flex items-center gap-2 min-w-0">
                            <span class="font-bold text-xs text-amber-950 truncate">${b.route} — ${b.name}</span>
                        </span>
                        <span class="text-[10px] font-semibold text-amber-700 shrink-0">${{ MAIN: 'Main', SECTOR: 'Sector', COMMUNITY: 'Community' }[b.category] || b.category}</span>
                    </button>
                `;
            });
            matchedStops.forEach(s => {
                html += `
                    <button class="search-item w-full text-left px-3.5 py-2.5 hover:bg-amber-50 flex items-center justify-between gap-2 transition"
                        data-type="stop" data-name="${s.n}" data-lat="${s.g[1]}" data-lng="${s.g[0]}" data-route="${s.r}">
                        <span class="flex items-center gap-2 min-w-0">
                            <span class="font-bold text-xs text-amber-950 truncate">${s.n}</span>
                        </span>
                        <span class="text-[10px] font-semibold text-amber-700 shrink-0">${s.r ? 'BUS ' + s.r : 'Stop'}</span>
                    </button>
                `;
            });
            dropdown.innerHTML = html;
            dropdown.classList.remove('hidden');

            dropdown.querySelectorAll('.search-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    const name = btn.dataset.name;
                    const lat = parseFloat(btn.dataset.lat);
                    const lng = parseFloat(btn.dataset.lng);
                    dropdown.classList.add('hidden');
                    searchInput.value = name;
                    if (btn.dataset.type === 'station') {
                        if (!metroVisible) setMetroState(true);
                        map.flyTo({ center: [lng, lat], zoom: 14.5 });
                        showToast(`Centered on ${name} Metro Station`);
                    } else if (btn.dataset.type === 'bus') {
                        const route = BUS_CORRIDORS.find(b => b.route === btn.dataset.route);
                        if (!route) return;
                        if (!busVisible) setBusState(true);
                        setBusFilter('R' + route.no);
                        const bounds = new maplibregl.LngLatBounds();
                        route.coords.forEach(c => bounds.extend(c));
                        map.fitBounds(bounds, { padding: 80, maxZoom: 13 });
                        searchInput.value = route.route;
                        showToast(`${route.route}: ${route.name}`);
                    } else if (btn.dataset.type === 'stop') {
                        if (!busVisible) setBusState(true);
                        map.flyTo({ center: [lng, lat], zoom: 16 });
                        searchInput.value = name;
                        showToast(`${name}${btn.dataset.route ? ' — BUS ' + btn.dataset.route : ''}`);
                    } else {
                        selectDestination(name, lat, lng, btn.dataset.cat);
                    }
                });
            });
        });

        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearSearchBtn.classList.add('hidden');
            dropdown.classList.add('hidden');
        });

        // Category Filter Chips
        document.querySelectorAll('.cat-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                activePlaceCat = chip.dataset.cat;
                document.querySelectorAll('.cat-chip').forEach(c => {
                    c.className = 'cat-chip shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/95 text-slate-700 border border-slate-200/80 shadow-sm hover:bg-slate-50 transition';
                });
                chip.className = 'cat-chip shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold bg-slate-900 text-white shadow-sm transition';
                renderPlaceMarkers();
            });
        });

        // GPS Locate Me Button
        document.getElementById('gps-btn').addEventListener('click', () => {
            if (!navigator.geolocation) {
                showToast('GPS not supported on this browser');
                return;
            }
            showToast('Finding your GPS location in Riyadh...');
            navigator.geolocation.getCurrentPosition(
                pos => selectDestination('My Current Location', pos.coords.latitude, pos.coords.longitude, 'GPS Location'),
                () => showToast('Location access blocked — tap any place or map spot instead')
            );
        });

        // =========================================================================
        // 9. TWO MAIN TOGGLES & SINGLE-COLOR METRO LINE ISOLATION
        // =========================================================================
        const btnToggleMetro = document.getElementById('btn-toggle-metro');
        const btnToggleBus = document.getElementById('btn-toggle-bus');

        function setMetroState(state) {
            metroVisible = state;
            const pill = document.getElementById('metro-switch-pill');
            const colorDock = document.getElementById('metro-color-dock');
            if (metroVisible) {
                btnToggleMetro.className = 'flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-sm transition-all';
                pill.textContent = 'ON';
                pill.className = 'px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-white';
                colorDock.classList.remove('hidden');
            } else {
                btnToggleMetro.className = 'flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200/80 transition-all';
                pill.textContent = 'OFF';
                pill.className = 'px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-300 text-slate-700';
                colorDock.classList.add('hidden');
            }
            applyLayerFilters();
        }

        function setBusState(state) {
            busVisible = state;
            const pill = document.getElementById('bus-switch-pill');
            const busDock = document.getElementById('bus-filter-dock');
            if (busVisible) {
                btnToggleBus.className = 'flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all';
                pill.textContent = 'ON';
                pill.className = 'px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white text-amber-800';
                busDock.classList.remove('hidden');
            } else {
                btnToggleBus.className = 'flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200/80 transition-all';
                pill.textContent = 'OFF';
                pill.className = 'px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-300 text-slate-700';
                busDock.classList.add('hidden');
            }
            applyLayerFilters();
        }

        btnToggleMetro.addEventListener('click', () => setMetroState(!metroVisible));
        btnToggleBus.addEventListener('click', () => setBusState(!busVisible));

        // Single-Color Metro Line Isolation Buttons
        document.querySelectorAll('.line-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                const chosen = pill.dataset.line;
                // Clicking the already-isolated line toggles back to ALL
                activeLineFilter = (activeLineFilter === chosen && chosen !== 'ALL') ? 'ALL' : chosen;

                document.querySelectorAll('.line-pill').forEach(p => {
                    p.classList.remove('ring-2', 'ring-slate-900', 'ring-offset-1', 'scale-105', 'opacity-45');
                    if (activeLineFilter !== 'ALL' && p.dataset.line !== activeLineFilter) {
                        p.classList.add('opacity-45');
                    }
                });

                const activeBtn = document.querySelector(`.line-pill[data-line="${activeLineFilter}"]`);
                if (activeBtn) {
                    activeBtn.classList.add('ring-2', 'ring-slate-900', 'ring-offset-1', 'scale-105');
                }

                const caption = document.getElementById('active-line-caption');
                if (activeLineFilter === 'ALL') {
                    caption.textContent = 'Showing all 6 Metro lines • Tap any color to isolate';
                    map.flyTo({ center: [46.6753, 24.7136], zoom: 11 });
                } else {
                    const lineObj = METRO_LINES[activeLineFilter];
                    caption.textContent = `${lineObj.name} (${lineObj.corridor})`;
                    const bounds = new maplibregl.LngLatBounds();
                    lineObj.stations.forEach(s => bounds.extend([s.lng, s.lat]));
                    map.fitBounds(bounds, { padding: { top: 120, bottom: 210, left: 50, right: 50 } });
                }

                applyLayerFilters();
            });
        });

        function setBusFilter(filter) {
            activeBusFilter = filter;
            document.querySelectorAll('.bus-pill').forEach(p => {
                const isActive = filter === 'ALL' ? p.dataset.bus === 'ALL' : filter === p.dataset.bus;
                p.className = 'bus-pill px-2.5 py-1 rounded-lg text-[11px] font-bold transition ' +
                    (isActive ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200');
            });
            const sel = document.getElementById('bus-route-select');
            if (sel) sel.value = filter.startsWith('R') ? filter.slice(1) : filter;
            applyLayerFilters();
        }

        // Bus Filter Pills + single-route isolator
        document.querySelectorAll('.bus-pill').forEach(pill => {
            pill.addEventListener('click', () => setBusFilter(pill.dataset.bus));
        });

        const busRouteSelect = document.getElementById('bus-route-select');
        BUS_CORRIDORS.forEach(b => {
            const opt = document.createElement('option');
            opt.value = String(b.no);
            opt.textContent = `${b.route} — ${b.name}`;
            busRouteSelect.appendChild(opt);
        });
        busRouteSelect.addEventListener('change', () => {
            setBusFilter(busRouteSelect.value === 'ALL' ? 'ALL' : 'R' + busRouteSelect.value);
            if (busRouteSelect.value !== 'ALL') {
                const b = BUS_CORRIDORS.find(x => String(x.no) === busRouteSelect.value);
                if (b) {
                    const bounds = new maplibregl.LngLatBounds();
                    b.coords.forEach(c => bounds.extend(c));
                    map.fitBounds(bounds, { padding: 80, maxZoom: 13 });
                }
            }
        });
        setBusFilter('ALL');

        // iPhone compact mode: filters are hidden until the user opens them
        const dockDetailsBtn = document.getElementById('dock-details-btn');
        const dockDetails = document.getElementById('transit-dock-details');
        dockDetailsBtn.addEventListener('click', () => {
            const isHidden = dockDetails.classList.toggle('hidden');
            dockDetailsBtn.textContent = isHidden ? 'Filters' : 'Hide';
        });
        document.getElementById('dock-hide-btn').addEventListener('click', () => {
            document.getElementById('transit-dock').classList.add('dock-hidden');
            document.getElementById('dock-show-btn').classList.remove('hidden');
        });
        document.getElementById('dock-show-btn').addEventListener('click', () => {
            document.getElementById('transit-dock').classList.remove('dock-hidden');
            document.getElementById('dock-show-btn').classList.add('hidden');
        });

        // =========================================================================
        // 10. TRIP PLANNER — From/To search, fastest+least-walking router, PDF
        // =========================================================================
        let planFromData = null, planToData = null;
        let lastPlan = null;

        function openPlanner() {
            document.getElementById('planner-panel').classList.remove('hidden');
        }
        function closePlanner() {
            planPickTarget = null;
            homePickMode = false;
            document.body.classList.remove('map-picking');
            document.getElementById('planner-panel').classList.add('hidden');
        }

        let planPickTarget = null; // 'from' | 'to'
        let homePickMode = false;
        let homeLocation = null;
        let firebaseUser = null;
        let firebaseReady = false;
        const planPickMarkers = {};
        const HOME_LS_KEY = 'riyadhTransitHome';

        function firebaseConfigReady() {
            const cfg = window.RIYADH_FIREBASE_CONFIG || {};
            const missing = v => !v || String(v).includes('PASTE');
            return typeof firebase !== 'undefined' &&
                typeof firebase.auth === 'function' &&
                typeof firebase.database === 'function' &&
                !missing(cfg.apiKey) && !missing(cfg.databaseURL) && !missing(cfg.projectId);
        }

        function readLocalHome() {
            try {
                return normalizeHome(JSON.parse(localStorage.getItem(HOME_LS_KEY) || 'null'));
            } catch (e) {
                return null;
            }
        }

        function writeLocalHome(home) {
            try {
                localStorage.setItem(HOME_LS_KEY, JSON.stringify(home));
            } catch (e) { /* storage unavailable */ }
        }

        function normalizeHome(value) {
            if (!value || typeof value !== 'object') return null;
            const lat = Number(value.lat), lng = Number(value.lng);
            if (!isFinite(lat) || !isFinite(lng)) return null;
            return {
                name: value.name || 'Home',
                lat,
                lng,
                updatedAt: Number(value.updatedAt) || Date.now()
            };
        }

        function renderHomeStatus() {
            const el = document.getElementById('plan-home-status');
            if (!el) return;
            if (!homeLocation) {
                el.textContent = firebaseReady ? 'Not set • Firebase on' : 'Not set • local only';
                return;
            }
            el.textContent = `${homeLocation.lat.toFixed(4)}, ${homeLocation.lng.toFixed(4)} • ${firebaseReady ? 'synced' : 'local'}`;
        }

        async function saveHomeToFirebase(home) {
            if (!firebaseReady || !firebaseUser) return false;
            await firebase.database().ref(`users/${firebaseUser.uid}/home`).set({
                name: home.name || 'Home',
                lat: home.lat,
                lng: home.lng,
                updatedAt: Date.now()
            });
            return true;
        }

        async function persistHome(home) {
            homeLocation = normalizeHome(home);
            if (!homeLocation) return;
            writeLocalHome(homeLocation);
            renderHomeStatus();
            let synced = false;
            if (firebaseReady && firebaseUser) {
                try {
                    synced = await saveHomeToFirebase(homeLocation);
                } catch (e) {
                    console.warn('Firebase home save failed:', e);
                }
            }
            renderHomeStatus();
            showToast(synced ? 'Home saved to Firebase' : 'Home saved on this device');
        }

        async function initHome() {
            homeLocation = readLocalHome();
            renderHomeStatus();
            if (!firebaseConfigReady()) return;
            try {
                if (!firebase.apps.length) firebase.initializeApp(window.RIYADH_FIREBASE_CONFIG);
                const credential = await firebase.auth().signInAnonymously();
                firebaseUser = credential.user;
                firebaseReady = true;
                const snapshot = await firebase.database().ref(`users/${firebaseUser.uid}/home`).once('value');
                const remoteHome = normalizeHome(snapshot.val());
                if (remoteHome && (!homeLocation || remoteHome.updatedAt >= homeLocation.updatedAt)) {
                    homeLocation = remoteHome;
                    writeLocalHome(homeLocation);
                } else if (homeLocation && !remoteHome) {
                    try { await saveHomeToFirebase(homeLocation); } catch (e) { /* keep local copy */ }
                }
                renderHomeStatus();
            } catch (e) {
                console.warn('Firebase home sync unavailable:', e);
                renderHomeStatus();
            }
        }

        function homeEndpoint() {
            if (!homeLocation) return null;
            return { name: 'Home', lat: homeLocation.lat, lng: homeLocation.lng, kind: 'home' };
        }

        function placePlanMarker(key, lat, lng, color, label) {
            if (planPickMarkers[key]) planPickMarkers[key].remove();
            const el = document.createElement('div');
            el.className = 'plan-pick-marker';
            el.style.borderColor = color;
            el.textContent = label;
            planPickMarkers[key] = new maplibregl.Marker({ element: el, anchor: 'center' })
                .setLngLat([lng, lat])
                .addTo(map);
        }

        function setPlanPickTarget(which) {
            if (planPickTarget === which) {
                planPickTarget = null;
                homePickMode = false;
                document.body.classList.remove('map-picking');
                showToast('Map picking cancelled');
                return;
            }
            planPickTarget = which;
            homePickMode = false;
            document.body.classList.add('map-picking');
            document.getElementById('route-sheet').classList.add('hidden');
            openPlanner();
            showToast(`Tap the map to choose ${which === 'from' ? 'From' : 'To'}`);
        }

        function setHomePickMode() {
            if (homePickMode) {
                homePickMode = false;
                document.body.classList.remove('map-picking');
                showToast('Map picking cancelled');
                return;
            }
            homePickMode = true;
            planPickTarget = null;
            document.body.classList.add('map-picking');
            document.getElementById('route-sheet').classList.add('hidden');
            openPlanner();
            showToast('Tap your home location on the map');
        }

        function handlePlannerMapPick(lat, lng) {
            document.body.classList.remove('map-picking');
            if (homePickMode) {
                homePickMode = false;
                placePlanMarker('home', lat, lng, '#f59e0b', 'H');
                persistHome({ name: 'Home', lat, lng });
                return;
            }
            const which = planPickTarget;
            planPickTarget = null;
            if (which !== 'from' && which !== 'to') return;
            const label = which === 'from' ? 'From' : 'To';
            const color = which === 'from' ? '#059669' : '#0284c7';
            const markerLabel = which === 'from' ? 'F' : 'T';
            const data = {
                name: `Map point — ${label} (${lat.toFixed(4)}, ${lng.toFixed(4)})`,
                lat,
                lng,
                kind: 'map'
            };
            document.getElementById(`plan-${which}-input`).value = data.name;
            if (which === 'from') planFromData = data; else planToData = data;
            placePlanMarker(which, lat, lng, color, markerLabel);
            showToast(`${label} location selected`);
        }

        function useHomeAs(which) {
            const endpoint = homeEndpoint();
            if (!endpoint) {
                showToast('Set Home on the map first');
                return;
            }
            document.getElementById(`plan-${which}-input`).value = 'Home';
            if (which === 'from') planFromData = endpoint; else planToData = endpoint;
            placePlanMarker('home-use', endpoint.lat, endpoint.lng, '#f59e0b', 'H');
            openPlanner();
            showToast(`Home selected as ${which === 'from' ? 'From' : 'To'}`);
        }

        // ---- endpoint suggestions (places, metro stations, bus stops)
        // fuzzy text matching that ignores apostrophes/spaces (e.g. "Al Batha" ↔ "Al Bat'ha")
        const normTxt = s => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

        function collectSuggestions(q) {
            const qn = normTxt(q);
            const hit = s => normTxt(s).includes(qn);
            const items = [];
            const home = homeEndpoint();
            if (home && hit(home.name)) items.push({ label: home.name, sub: 'Saved Home', data: home });
            RIYADH_PLACES.forEach(p => {
                if (hit(p.name) || hit(p.cat)) items.push({ label: p.name, sub: p.cat, data: { name: p.name, lat: p.lat, lng: p.lng, kind: 'place' } });
            });
            ALL_STATIONS.forEach(s => {
                if (hit(s.name)) items.push({ label: s.name, sub: 'Metro Station', data: { name: s.name, lat: s.lat, lng: s.lng, kind: 'station' } });
            });
            BUS_STOPS_DATA.forEach(s => {
                if (s.n && hit(s.n)) items.push({ label: s.n, sub: 'Bus Stop' + (s.r ? ' • BUS ' + s.r : ''), data: { name: s.n, lat: s.g[1], lng: s.g[0], kind: 'stop' } });
            });
            const seen = new Set();
            return items.filter(it => {
                const k = it.label.toLowerCase();
                if (seen.has(k)) return false;
                seen.add(k);
                return true;
            }).slice(0, 40);
        }

        function attachSuggest(inputId, ddId, onPick) {
            const input = document.getElementById(inputId);
            const dd = document.getElementById(ddId);
            input.addEventListener('input', () => {
                const q = input.value.trim().toLowerCase();
                if (q.length < 2) { dd.classList.add('hidden'); return; }
                const items = collectSuggestions(q);
                if (!items.length) { dd.classList.add('hidden'); return; }
                dd.innerHTML = items.map((it, i) => `
                    <button class="sug-item w-full text-left px-3 py-2 hover:bg-sky-50 flex items-center gap-2 transition" data-i="${i}">
                        <span class="min-w-0 flex-1">
                            <span class="block font-bold text-xs text-slate-900 truncate">${it.label}</span>
                            <span class="block text-[10px] text-slate-400 truncate">${it.sub}</span>
                        </span>
                    </button>
                `).join('');
                dd.classList.remove('hidden');
                dd.querySelectorAll('.sug-item').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const it = items[parseInt(btn.dataset.i, 10)];
                        input.value = it.label;
                        dd.classList.add('hidden');
                        onPick(it.data);
                    });
                });
            });
            input.addEventListener('blur', () => setTimeout(() => dd.classList.add('hidden'), 150));
        }

        attachSuggest('plan-from-input', 'plan-from-dd', d => {
            planFromData = d;
            if (planPickMarkers.from) { planPickMarkers.from.remove(); delete planPickMarkers.from; }
        });
        attachSuggest('plan-to-input', 'plan-to-dd', d => {
            planToData = d;
            if (planPickMarkers.to) { planPickMarkers.to.remove(); delete planPickMarkers.to; }
        });

        function resolveEndpoint(text, data) {
            if (data && data.name === text.trim()) return data;
            const q = text.trim().toLowerCase();
            if (!q) return null;
            const items = collectSuggestions(q);
            const qn = normTxt(q);
            const exact = items.find(i => normTxt(i.label) === qn);
            if (exact) return exact.data;
            const starts = items.find(i => normTxt(i.label).startsWith(qn));
            return starts ? starts.data : (items.length ? items[0].data : null);
        }

        // ---- routing engine
        const WALK_KMH = 5, METRO_KMH = 40, BUS_KMH = 20;
        const sec = (km, kmh, extra = 0) => (km / kmh) * 3600 + extra;

        // Metro adjacency with official segment times (t = seconds from previous station)
        const stIndex = {};
        ALL_STATIONS.forEach((s, i) => { stIndex[s.name] = i; });
        const metroAdj = ALL_STATIONS.map(() => []);
        Object.values(METRO_LINES).forEach(line => {
            const seq = line.stations;
            for (let i = 0; i < seq.length - 1; i++) {
                const a = stIndex[seq[i].name], b = stIndex[seq[i + 1].name];
                if (a === undefined || b === undefined) continue;
                const d = haversineKm(seq[i].lat, seq[i].lng, seq[i + 1].lat, seq[i + 1].lng);
                const t = (seq[i + 1].t && seq[i + 1].t > 0) ? seq[i + 1].t : sec(d, METRO_KMH, 25);
                metroAdj[a].push({ to: b, line: line.id, dist: d, time: t });
                metroAdj[b].push({ to: a, line: line.id, dist: d, time: t });
            }
        });
        // walk links between nearby stations (<900 m)
        for (let i = 0; i < ALL_STATIONS.length; i++) {
            for (let j = i + 1; j < ALL_STATIONS.length; j++) {
                const d = haversineKm(ALL_STATIONS[i].lat, ALL_STATIONS[i].lng, ALL_STATIONS[j].lat, ALL_STATIONS[j].lng);
                if (d < 0.9) {
                    const w = sec(d, WALK_KMH);
                    metroAdj[i].push({ to: j, line: null, dist: d, time: w, walk: true });
                    metroAdj[j].push({ to: i, line: null, dist: d, time: w, walk: true });
                }
            }
        }

        function metroPlan(from, to) {
            // Access = best way to reach each station (walk or bus feeder).
            // Egress = best way to leave each station toward the destination.
            const access = computeEndpointOptions(from);
            const egress = reverseOptions(computeEndpointOptions(to));

            const N = ALL_STATIONS.length;
            const dist = new Array(N).fill(Infinity);
            const prev = new Array(N).fill(null);
            const pq = [];
            ALL_STATIONS.forEach((s, i) => {
                dist[i] = access[i].time;
                pq.push([access[i].time, i]);
            });
            const push = (d, i) => { pq.push([d, i]); pq.sort((a, b) => a[0] - b[0]); };
            while (pq.length) {
                pq.sort((a, b) => a[0] - b[0]);
                const [d, u] = pq.shift();
                if (d > dist[u]) continue;
                for (const e of metroAdj[u]) {
                    const nd = d + e.time;
                    if (nd < dist[e.to]) {
                        dist[e.to] = nd;
                        prev[e.to] = { from: u, edge: e };
                        push(nd, e.to);
                    }
                }
            }
            // best exit station = metro arrival + best egress to destination
            let best = -1, bestT = Infinity;
            ALL_STATIONS.forEach((s, i) => {
                const t = dist[i] + egress[i].time;
                if (t < bestT) { bestT = t; best = i; }
            });
            if (best < 0 || !isFinite(bestT)) return null;
            // reconstruct node path
            const path = [];
            for (let cur = best; cur !== null && cur !== undefined; ) {
                path.push(cur);
                cur = prev[cur] ? prev[cur].from : null;
            }
            path.reverse();
            if (path.length < 2) return null; // no actual metro ride

            const entryIdx = path[0];
            const exitIdx = path[path.length - 1];
            const firstSt = ALL_STATIONS[entryIdx];
            const lastSt = ALL_STATIONS[exitIdx];

            // legs = access legs + metro edges + egress legs
            const legs = access[entryIdx].legs.slice();
            for (let k = 0; k < path.length - 1; k++) {
                const u = path[k], v = path[k + 1];
                const edge = metroAdj[u].find(e => e.to === v);
                if (!edge) continue;
                if (edge.walk) {
                    legs.push({ type: 'walk', from: ALL_STATIONS[u].name, to: ALL_STATIONS[v].name, km: edge.dist });
                } else {
                    const last = legs[legs.length - 1];
                    if (last && last.type === 'ride' && last.line === edge.line) {
                        last.to = ALL_STATIONS[v].name;
                        last.stops++;
                        last.km += edge.dist;
                        last.time += edge.time;
                    } else {
                        legs.push({ type: 'ride', line: edge.line, from: ALL_STATIONS[u].name, to: ALL_STATIONS[v].name, stops: 1, km: edge.dist, time: edge.time });
                    }
                }
            }
            legs.push(...egress[exitIdx].legs);

            const hasRide = legs.some(l => l.type === 'ride');
            const hasBus = legs.some(l => l.type === 'bus');
            if (!hasRide) return null;

            // transfer penalty: metro line changes only
            let transfers = 0, prevLine = null;
            legs.forEach(l => {
                if (l.type === 'ride') {
                    if (prevLine && prevLine !== l.line) transfers++;
                    prevLine = l.line;
                }
            });
            const totalTime = bestT + transfers * 240;
            const totalKm = legs.reduce((a, l) => a + l.km, 0);
            const walkKm = legs.filter(l => l.type === 'walk').reduce((a, l) => a + l.km, 0);
            const usedLines = [...new Set(legs.filter(l => l.type === 'ride').map(l => l.line))];
            return {
                mode: hasBus ? 'mixed' : 'metro', legs, timeSec: totalTime, km: totalKm, walkKm, transfers,
                board: firstSt, alight: lastSt, lines: usedLines,
                accessMode: access[entryIdx].mode, egressMode: egress[exitIdx].mode
            };
        }

        // Bus stops indexed by route number
        const BUS_STOPS_BY_ROUTE = {};
        BUS_STOPS_GEOJSON.features.forEach(f => {
            const p = f.properties;
            if (p.no > 0 && p.op) {
                (BUS_STOPS_BY_ROUTE[p.no] = BUS_STOPS_BY_ROUTE[p.no] || []).push({
                    lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0], name: p.n || ('BUS ' + p.no + ' stop')
                });
            }
        });

        // ---- multimodal access/egress helpers (bus -> metro and metro -> bus)
        const BUS_CORRIDOR_BY_NO = {};
        BUS_CORRIDORS.forEach(b => { BUS_CORRIDOR_BY_NO[b.no] = b; });

        const ALL_BUS_STOPS = BUS_STOPS_GEOJSON.features
            .filter(f => f.properties.no > 0 && f.properties.op)
            .map(f => ({
                no: f.properties.no,
                name: f.properties.n || ('BUS ' + f.properties.no + ' stop'),
                lat: f.geometry.coordinates[1],
                lng: f.geometry.coordinates[0],
                color: f.properties.color || '#d97706'
            }));

        // For every bus stop, remember the closest metro station it can feed (<=850 m).
        const ROUTE_STATION_STOPS = {};
        ALL_BUS_STOPS.forEach(stop => {
            let best = -1, bd = Infinity;
            ALL_STATIONS.forEach((s, i) => {
                const d = haversineKm(stop.lat, stop.lng, s.lat, s.lng);
                if (d < bd) { bd = d; best = i; }
            });
            if (best >= 0 && bd <= 0.85) {
                (ROUTE_STATION_STOPS[stop.no] = ROUTE_STATION_STOPS[stop.no] || []).push({
                    stop, stationIdx: best, stationDist: bd
                });
            }
        });

        function nearBusStops(point, maxKm = 1.2) {
            const out = [];
            ALL_BUS_STOPS.forEach(s => {
                const d = haversineKm(point.lat, point.lng, s.lat, s.lng);
                if (d <= maxKm) out.push({ ...s, dist: d });
            });
            return out.sort((a, b) => a.dist - b.dist);
        }

        function busLegGeometry(routeNo, a, b) {
            const route = BUS_CORRIDOR_BY_NO[routeNo];
            if (!route) return null;
            const parts = route.geom.type === 'MultiLineString' ? route.geom.coordinates : [route.geom.coordinates];
            let best = null;
            parts.forEach(line => {
                if (!line || line.length < 2) return;
                const i1 = nearestIdxOnLine(line, a.lat, a.lng);
                const i2 = nearestIdxOnLine(line, b.lat, b.lng);
                if (i1.idx === i2.idx) return;
                const lo = Math.min(i1.idx, i2.idx), hi = Math.max(i1.idx, i2.idx);
                let km = 0;
                for (let i = lo; i < hi; i++) {
                    km += haversineKm(line[i][1], line[i][0], line[i + 1][1], line[i + 1][0]);
                }
                const time = sec(km, BUS_KMH, 300);
                if (!best || time < best.time) best = { km, time, geo: line.slice(lo, hi + 1) };
            });
            return best;
        }

        // Best way to reach every metro station from `point`: walk, or bus to a
        // stop that feeds that station. Returns one option per station index.
        function computeEndpointOptions(point) {
            const opts = ALL_STATIONS.map((s, i) => {
                const d = haversineKm(point.lat, point.lng, s.lat, s.lng);
                const t = sec(d, WALK_KMH);
                return {
                    time: t,
                    km: d,
                    walkKm: d,
                    mode: 'walk',
                    legs: d > 0.15 ? [{ type: 'walk', from: point.name, to: s.name, km: d, fromPt: { lat: point.lat, lng: point.lng }, toPt: { lat: s.lat, lng: s.lng } }] : []
                };
            });

            const pStops = nearBusStops(point, 1.2).slice(0, 60);
            pStops.forEach(ps => {
                const stationStops = ROUTE_STATION_STOPS[ps.no] || [];
                stationStops.forEach(ts => {
                    if (ts.stop === ps) return;
                    const ride = busLegGeometry(ps.no, ps, ts.stop);
                    if (!ride) return;
                    const walkIn = sec(ps.dist, WALK_KMH);
                    const walkOut = sec(ts.stationDist, WALK_KMH);
                    const total = walkIn + ride.time + walkOut;
                    const i = ts.stationIdx;
                    if (total >= opts[i].time - 1) return;
                    const corr = BUS_CORRIDOR_BY_NO[ps.no];
                    const legs = [];
                    if (ps.dist > 0.12) legs.push({ type: 'walk', from: point.name, to: ps.name, km: ps.dist, fromPt: { lat: point.lat, lng: point.lng }, toPt: { lat: ps.lat, lng: ps.lng } });
                    legs.push({
                        type: 'bus', route: ps.no,
                        routeName: corr ? corr.name : ('BUS ' + ps.no),
                        color: ps.color || (corr && corr.color) || '#d97706',
                        from: ps.name, to: ts.stop.name,
                        km: ride.km, time: ride.time, geo: ride.geo
                    });
                    if (ts.stationDist > 0.12) legs.push({ type: 'walk', from: ts.stop.name, to: ALL_STATIONS[i].name, km: ts.stationDist, fromPt: { lat: ts.stop.lat, lng: ts.stop.lng }, toPt: { lat: ALL_STATIONS[i].lat, lng: ALL_STATIONS[i].lng } });
                    opts[i] = { time: total, km: ps.dist + ride.km + ts.stationDist, walkKm: ps.dist + ts.stationDist, mode: 'bus', legs };
                });
            });
            return opts;
        }

        function reverseLegs(legs) {
            return legs.slice().reverse().map(l => {
                if (l.type === 'walk') return { type: 'walk', from: l.to, to: l.from, km: l.km, fromPt: l.toPt, toPt: l.fromPt };
                if (l.type === 'bus') return { type: 'bus', route: l.route, routeName: l.routeName, color: l.color, from: l.to, to: l.from, km: l.km, time: l.time, geo: l.geo ? l.geo.slice().reverse() : undefined };
                return l;
            });
        }
        function reverseOptions(opts) {
            return opts.map(o => ({ ...o, legs: reverseLegs(o.legs) }));
        }

        function nearestIdxOnLine(coords, lat, lng) {
            // coords: [[lng,lat],...]; returns index of nearest vertex
            let bi = 0, bd = Infinity;
            for (let i = 0; i < coords.length; i++) {
                const d = haversineKm(lat, lng, coords[i][1], coords[i][0]);
                if (d < bd) { bd = d; bi = i; }
            }
            return { idx: bi, dist: bd };
        }

        function busPlan(from, to) {
            let best = null;
            for (const b of BUS_CORRIDORS) {
                const stops = BUS_STOPS_BY_ROUTE[b.no];
                if (!stops || !stops.length) continue;
                let board = null, bd1 = Infinity;
                stops.forEach(s => { const d = haversineKm(from.lat, from.lng, s.lat, s.lng); if (d < bd1) { bd1 = d; board = s; } });
                let alight = null, bd2 = Infinity;
                stops.forEach(s => { const d = haversineKm(to.lat, to.lng, s.lat, s.lng); if (d < bd2) { bd2 = d; alight = s; } });
                if (!board || !alight || board === alight) continue;
                if (bd1 > 3 || bd2 > 3) continue; // too far from any stop
                // ride distance along route geometry (part 0)
                const parts = b.geom.type === 'MultiLineString' ? b.geom.coordinates : [b.geom.coordinates];
                const line = parts[0];
                const i1 = nearestIdxOnLine(line, board.lat, board.lng);
                const i2 = nearestIdxOnLine(line, alight.lat, alight.lng);
                const lo = Math.min(i1.idx, i2.idx), hi = Math.max(i1.idx, i2.idx);
                let rideKm = 0;
                for (let i = lo; i < hi; i++) {
                    rideKm += haversineKm(line[i][1], line[i][0], line[i + 1][1], line[i + 1][0]);
                }
                const walkIn = sec(bd1, WALK_KMH), walkOut = sec(bd2, WALK_KMH);
                const rideT = sec(rideKm, BUS_KMH, 360); // +6 min wait/board
                const total = walkIn + rideT + walkOut;
                if (!best || total < best.timeSec) {
                    best = {
                        mode: 'bus',
                        legs: [
                            { type: 'walk', from: from.name, to: board.name, km: bd1 },
                            { type: 'bus', route: b.no, routeName: b.name, color: b.color, from: board.name, to: alight.name, km: rideKm, time: rideT, geo: line.slice(lo, hi + 1) },
                            { type: 'walk', from: alight.name, to: to.name, km: bd2 }
                        ],
                        timeSec: total,
                        km: bd1 + rideKm + bd2,
                        walkKm: bd1 + bd2,
                        board, alight
                    };
                }
            }
            return best;
        }

        function walkPlan(from, to) {
            const km = haversineKm(from.lat, from.lng, to.lat, to.lng);
            return { mode: 'walk', legs: [{ type: 'walk', from: from.name, to: to.name, km }], timeSec: sec(km, WALK_KMH), km, walkKm: km };
        }

        function fmtTime(secTotal) {
            const m = Math.round(secTotal / 60);
            if (m < 60) return m + ' min';
            return Math.floor(m / 60) + 'h ' + (m % 60) + 'm';
        }
        function fmtKm(km) { return km < 10 ? km.toFixed(1) : Math.round(km) + ''; }
        function fmtDist(km) { return km < 1 ? Math.max(50, Math.round(km * 1000)) + ' m' : fmtKm(km) + ' km'; }

        function nearestStationTo(point) {
            let best = null, bestKm = Infinity;
            ALL_STATIONS.forEach(s => {
                const d = haversineKm(point.lat, point.lng, s.lat, s.lng);
                if (d < bestKm) { bestKm = d; best = s; }
            });
            return best ? { station: best, km: bestKm } : null;
        }

        function computeBestPlan(from, to) {
            const options = [walkPlan(from, to)];
            const metro = metroPlan(from, to);
            if (metro) options.push(metro);
            const bus = busPlan(from, to);
            if (bus) options.push(bus);
            // fastest wins; tie-break = less walking
            options.sort((a, b) => (a.timeSec - b.timeSec) || (a.walkKm - b.walkKm));
            return { best: options[0], options };
        }

        // ---- draw plan on map
        function drawPlan(plan) {
            const feats = [];
            if (plan) {
                plan.best.legs.forEach(l => {
                    if (l.type === 'walk') {
                        // straight dashed connector between leg endpoints — prefer explicit leg points
                        const a = l.fromPt || resolveLegPoint(l.from, plan);
                        const b = l.toPt || resolveLegPoint(l.to, plan);
                        if (a && b) feats.push({ type: 'Feature', properties: { kind: 'walk', color: '#64748b' }, geometry: { type: 'LineString', coordinates: [[a.lng, a.lat], [b.lng, b.lat]] } });
                    } else if (l.type === 'ride') {
                        const lineObj = METRO_LINES[l.line];
                        const i1 = lineObj.stations.findIndex(s => s.name === l.from);
                        const i2 = lineObj.stations.findIndex(s => s.name === l.to);
                        if (i1 >= 0 && i2 >= 0) {
                            const lo = Math.min(i1, i2), hi = Math.max(i1, i2);
                            const coords = lineObj.stations.slice(lo, hi + 1).map(s => [s.lng, s.lat]);
                            feats.push({ type: 'Feature', properties: { kind: 'ride', color: lineObj.color }, geometry: { type: 'LineString', coordinates: coords } });
                        }
                    } else if (l.type === 'bus' && l.geo) {
                        feats.push({ type: 'Feature', properties: { kind: 'ride', color: l.color || '#f59e0b' }, geometry: { type: 'LineString', coordinates: l.geo } });
                    }
                });
            }
            const src = map.getSource('plan-geo');
            if (src) src.setData({ type: 'FeatureCollection', features: feats });
        }

        function resolveLegPoint(name, plan) {
            // find coords for a leg endpoint name: could be origin/dest names or station/stop names
            if (plan._from && plan._from.name === name) return plan._from;
            if (plan._to && plan._to.name === name) return plan._to;
            const st = ALL_STATIONS.find(s => s.name === name);
            if (st) return st;
            const stop = BUS_STOPS_DATA.find(s => s.n === name);
            if (stop) return { lat: stop.g[1], lng: stop.g[0] };
            return null;
        }

        // ---- results UI
        function legText(l) {
            if (l.type === 'walk') return `Walk to ${l.to} — ${fmtKm(l.km)} km (~${fmtTime(sec(l.km, WALK_KMH))})`;
            if (l.type === 'ride') {
                const ln = METRO_LINES[l.line];
                return `Take ${ln.name} from ${l.from} to ${l.to} — ${l.stops} stop${l.stops > 1 ? 's' : ''} (~${fmtTime(l.time)})`;
            }
            if (l.type === 'bus') return `Take BUS ${l.route} from ${l.from} to ${l.to} (~${fmtTime(l.time)})`;
            return '';
        }

        function renderPlan(plan) {
            const res = document.getElementById('plan-results');
            const b = plan.best;
            const modeLabel = { metro: 'Metro', mixed: 'Metro + Bus', bus: 'Bus', walk: 'Walk' }[b.mode] || 'Route';

            let boardText = 'Walking only — no metro or bus ride needed';
            if ((b.mode === 'metro' || b.mode === 'mixed') && b.board && b.alight && b.lines && b.lines.length) {
                const lineNames = (b.lines || []).map(id => METRO_LINES[id].shortName).join(' → ');
                boardText = `Board at <b>${b.board.name}</b> • ${lineNames} • Get off at <b>${b.alight.name}</b>`;
            } else if (b.mode === 'bus' && b.board && b.alight) {
                const busLeg = b.legs.find(l => l.type === 'bus');
                const route = busLeg ? `BUS ${busLeg.route}` : 'bus';
                boardText = `Board ${route} at <b>${b.board.name}</b> • Get off at <b>${b.alight.name}</b>`;
            }

            const fromMetro = nearestStationTo(plan._from);
            const toMetro = nearestStationTo(plan._to);
            let html = '';
            if (fromMetro && toMetro) {
                html += `
                    <div class="rounded-xl bg-sky-50 border border-sky-200 p-2.5 space-y-1">
                        <div class="text-[10px] font-extrabold uppercase tracking-wide text-sky-800">Closest metro</div>
                        <div class="text-[11px] text-slate-700"><span class="font-extrabold text-slate-500">From area:</span> ${fromMetro.station.name} • ${fmtDist(fromMetro.km)}</div>
                        <div class="text-[11px] text-slate-700"><span class="font-extrabold text-slate-500">To area:</span> ${toMetro.station.name} • ${fmtDist(toMetro.km)}</div>
                    </div>
                `;
            }

            html += `
                <div class="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 space-y-1.5">
                    <div class="flex items-center justify-between">
                        <span class="text-[11px] font-extrabold text-emerald-800">${modeLabel} • ${fmtTime(b.timeSec)}</span>
                        <span class="text-[10px] text-emerald-600 font-semibold">${fmtKm(b.km)} km • ${fmtKm(b.walkKm)} km walking</span>
                    </div>
                    <div class="text-[11px] font-bold text-slate-800">${boardText}</div>
                    <ol class="space-y-1">
            `;
            b.legs.forEach((l, i) => {
                html += `<li class="flex gap-1.5 text-[11px] text-slate-700"><span class="font-extrabold text-slate-400 shrink-0">${i + 1}.</span><span>${legText(l)}</span></li>`;
            });
            html += `</ol></div>`;
            const alts = plan.options.slice(1);
            if (alts.length) {
                html += `<div class="text-[10px] font-bold text-slate-400 uppercase tracking-wide pt-1">Slower / other options</div>`;
                alts.forEach(o => {
                    const lbl = { metro: 'Metro', mixed: 'Metro + Bus', bus: 'Bus', walk: 'Walk' }[o.mode] || o.mode;
                    html += `<div class="flex justify-between text-[11px] text-slate-600 px-1"><span>${lbl}${o.walkKm > 0.3 ? ` • ${fmtKm(o.walkKm)} km walk` : ''}</span><span class="font-semibold">${fmtTime(o.timeSec)} • ${fmtKm(o.km)} km</span></div>`;
                });
            }
            res.innerHTML = html;
            res.classList.remove('hidden');
            document.getElementById('plan-pdf-btn').classList.remove('hidden');
        }

        // ---- PDF export (hand-built, no dependencies — works offline)
        function pdfEscape(s) {
            return String(s).replace(/[–—]/g, '-').replace(/[^\x20-\x7E]/g, '?')
                .replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
        }
        function wrapPdf(text, maxChars = 95) {
            const words = String(text).split(' ');
            const lines = [];
            let cur = '';
            words.forEach(w => {
                if ((cur + ' ' + w).trim().length > maxChars) { lines.push(cur.trim()); cur = w; }
                else cur += ' ' + w;
            });
            if (cur.trim()) lines.push(cur.trim());
            return lines.length ? lines : [''];
        }
        function makePdfBlob(pages) {
            const enc = pdfEscape;
            const kids = pages.map((_, i) => `${4 + i * 2} 0 R`).join(' ');
            const chunks = ['%PDF-1.4\n'];
            const offsets = {};
            const obj = (id, body) => { offsets[id] = chunks.join('').length; chunks.push(`${id} 0 obj\n${body}\nendobj\n`); };
            obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
            obj(2, `<< /Type /Pages /Kids [${kids}] /Count ${pages.length} >>`);
            obj(3, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
            pages.forEach((lines, pi) => {
                const pid = 4 + pi * 2, cid = pid + 1;
                let stream = `BT /F1 16 Tf 56 770 Td (${enc(lines.title || 'RIYADH TRANSIT DIRECTIONS')}) Tj ET\n`;
                stream += 'BT /F1 10 Tf 56 742 Td 15 TL\n';
                lines.body.forEach(l => { stream += `(${enc(l)}) Tj T*\n`; });
                stream += 'ET\n';
                obj(pid, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R >> >> /Contents ${cid} 0 R >>`);
                obj(cid, `<< /Length ${stream.length} >>\nstream\n${stream}endstream`);
            });
            const total = chunks.join('').length;
            const maxId = 3 + pages.length * 2;
            let xref = `xref\n0 ${maxId + 1}\n0000000000 65535 f \n`;
            for (let i = 1; i <= maxId; i++) xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
            chunks.push(xref + `trailer\n<< /Size ${maxId + 1} /Root 1 0 R >>\nstartxref\n${total}\n%%EOF`);
            return new Blob([chunks.join('')], { type: 'application/pdf' });
        }
        function downloadPlanPdf() {
            if (!lastPlan) return;
            const plan = lastPlan;
            const f = plan._from, t = plan._to;
            const b = plan.best;
            const body = [];
            body.push(`From: ${f.name}`);
            body.push(`To:   ${t.name}`);
            body.push(`Date: ${new Date().toLocaleString()}`);
            const fromMetroPdf = nearestStationTo(f);
            const toMetroPdf = nearestStationTo(t);
            if (fromMetroPdf && toMetroPdf) {
                body.push(`Closest metro from: ${fromMetroPdf.station.name} (${fmtDist(fromMetroPdf.km)})`);
                body.push(`Closest metro to:   ${toMetroPdf.station.name} (${fmtDist(toMetroPdf.km)})`);
            }
            body.push('');
            body.push(`RECOMMENDED ROUTE — ${fmtTime(b.timeSec)} total, ${fmtKm(b.km)} km (${fmtKm(b.walkKm)} km walking)`);
            if (b.board && b.alight) {
                body.push(`Board at: ${b.board.name}`);
                body.push(`Get off at: ${b.alight.name}`);
            }
            body.push('');
            b.legs.forEach((l, i) => {
                wrapPdf(`${i + 1}. ${legText(l)}`, 95).forEach(w => body.push('   ' + w));
            });
            body.push('');
            const alts = plan.options.slice(1);
            if (alts.length) {
                body.push('OTHER OPTIONS');
                alts.forEach(o => {
                    const lbl = { metro: 'Metro', bus: 'Bus', walk: 'Walking only' }[o.mode];
                    body.push(`- ${lbl}: ${fmtTime(o.timeSec)} • ${fmtKm(o.km)} km`);
                });
                body.push('');
            }
            body.push('Notes: times are estimates based on distance and average speeds.');
            body.push('Metro fare SAR 4 (Darb card, 2h). Bus fare SAR 4 flat.');
            // paginate ~48 lines per page
            const pages = [];
            for (let i = 0; i < body.length; i += 48) {
                pages.push({ title: i === 0 ? 'RIYADH TRANSIT DIRECTIONS' : 'RIYADH TRANSIT DIRECTIONS (cont.)', body: body.slice(i, i + 48) });
            }
            const blob = makePdfBlob(pages);
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `riyadh-route-${f.name.replace(/[^a-z0-9]+/gi, '-')}-to-${t.name.replace(/[^a-z0-9]+/gi, '-')}.pdf`;
            a.click();
            setTimeout(() => URL.revokeObjectURL(a.href), 5000);
            showToast('PDF downloaded');
        }

        // ---- wire planner UI
        document.getElementById('btn-plan-trip').addEventListener('click', () => {
            const p = document.getElementById('planner-panel');
            p.classList.contains('hidden') ? openPlanner() : closePlanner();
        });
        document.getElementById('plan-close-btn').addEventListener('click', closePlanner);
        document.getElementById('plan-from-map-btn').addEventListener('click', () => setPlanPickTarget('from'));
        document.getElementById('plan-to-map-btn').addEventListener('click', () => setPlanPickTarget('to'));
        document.getElementById('plan-set-home-btn').addEventListener('click', setHomePickMode);
        document.getElementById('plan-home-from-btn').addEventListener('click', () => useHomeAs('from'));
        document.getElementById('plan-home-to-btn').addEventListener('click', () => useHomeAs('to'));
        document.getElementById('plan-swap-btn').addEventListener('click', () => {
            const fi = document.getElementById('plan-from-input'), ti = document.getElementById('plan-to-input');
            [fi.value, ti.value] = [ti.value, fi.value];
            [planFromData, planToData] = [planToData, planFromData];
            ['from', 'to'].forEach(k => {
                if (planPickMarkers[k]) { planPickMarkers[k].remove(); delete planPickMarkers[k]; }
            });
        });
        document.getElementById('plan-go-btn').addEventListener('click', () => {
            lastPlan = null;
            document.getElementById('plan-results').classList.add('hidden');
            document.getElementById('plan-pdf-btn').classList.add('hidden');
            const f = resolveEndpoint(document.getElementById('plan-from-input').value, planFromData);
            const t = resolveEndpoint(document.getElementById('plan-to-input').value, planToData);
            if (!f || !t) { showToast('Pick From and To from the suggestions'); return; }
            if (Math.abs(f.lat - t.lat) < 0.0005 && Math.abs(f.lng - t.lng) < 0.0005) { showToast('From and To are the same place'); return; }
            const plan = computeBestPlan(f, t);
            plan._from = f; plan._to = t;
            lastPlan = plan;
            drawPlan(plan);
            renderPlan(plan);
            // zoom to route
            const all = [];
            plan.best.legs.forEach(l => {
                if (l.type === 'walk') { const a = resolveLegPoint(l.from, plan), b = resolveLegPoint(l.to, plan); if (a) all.push([a.lng, a.lat]); if (b) all.push([b.lng, b.lat]); }
                else if (l.type === 'ride') { const lo = METRO_LINES[l.line]; if (lo) lo.stations.forEach(s => all.push([s.lng, s.lat])); }
                else if (l.type === 'bus' && l.geo) l.geo.forEach(c => all.push(c));
            });
            if (all.length) {
                const bds = new maplibregl.LngLatBounds();
                all.forEach(c => bds.extend(c));
                map.fitBounds(bds, { padding: 70, maxZoom: 13, duration: 800 });
            }
        });
        document.getElementById('plan-pdf-btn').addEventListener('click', downloadPlanPdf);
        initHome();



        // =========================================================================
        // 12. TOAST HELPER
        // =========================================================================
        let toastTimeout = null;
        function showToast(msg) {
            const el = document.getElementById('toast');
            el.textContent = msg;
            el.classList.remove('hidden');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => el.classList.add('hidden'), 2600);
        }

        // =========================================================================
        // 11b. APP UPDATE PROMPT — checks version.json published by CI/releases
        // =========================================================================
        const APP_VERSION_KEY = 'riyadhTransitAppVersion';
        const UPDATE_DISMISS_KEY = 'riyadhTransitUpdateDismissed';
        const updateBanner = document.getElementById('update-banner');
        let pendingAppVersion = null;
        let swRegistration = null;
        let swUpdatePending = false;

        function showUpdateBanner(version) {
            if (version) pendingAppVersion = version;
            updateBanner.classList.remove('hidden');
        }

        async function checkAppVersion() {
            try {
                const reg = swRegistration || await navigator.serviceWorker.getRegistration();
                if (reg) await reg.update();
            } catch (e) { /* service worker update check is best-effort */ }
            try {
                const res = await fetch('version.json?_=' + Date.now(), { cache: 'no-store' });
                if (!res.ok) return;
                const data = await res.json();
                const latest = String(data.version || '').trim();
                if (!latest) return;
                const current = localStorage.getItem(APP_VERSION_KEY);
                if (!current) {
                    localStorage.setItem(APP_VERSION_KEY, latest);
                    return;
                }
                if (latest === current) return;
                if (sessionStorage.getItem(UPDATE_DISMISS_KEY) === latest) return;
                showUpdateBanner(latest);
            } catch (e) { /* offline or version file missing */ }
        }

        document.getElementById('update-later-btn').addEventListener('click', () => {
            if (pendingAppVersion) sessionStorage.setItem(UPDATE_DISMISS_KEY, pendingAppVersion);
            swUpdatePending = false;
            updateBanner.classList.add('hidden');
        });

        document.getElementById('update-now-btn').addEventListener('click', async () => {
            if (pendingAppVersion) {
                localStorage.setItem(APP_VERSION_KEY, pendingAppVersion);
                pendingAppVersion = null;
            }
            if (swUpdatePending && swRegistration && swRegistration.waiting) {
                swUpdatePending = false;
                await new Promise(resolve => {
                    navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true });
                    swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
                    setTimeout(resolve, 2500);
                });
            } else {
                try {
                    const reg = swRegistration || await navigator.serviceWorker.getRegistration();
                    if (reg) await reg.update();
                } catch (e) { /* reload still works */ }
            }
            location.reload();
        });

        checkAppVersion();
        setInterval(checkAppVersion, 60000);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') checkAppVersion();
        });

        // =========================================================================
        // 11. OFFLINE SUPPORT — register service worker (needs HTTPS or localhost)
        // =========================================================================
        if ('serviceWorker' in navigator &&
            (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js').then(reg => {
                    swRegistration = reg;
                    reg.addEventListener('updatefound', () => {
                        const worker = reg.installing;
                        if (!worker) return;
                        worker.addEventListener('statechange', () => {
                            if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                                swUpdatePending = true;
                                showUpdateBanner();
                            }
                        });
                    });
                }).catch(() => {});
            });
        }
    