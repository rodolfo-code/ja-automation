export interface CaseStudy {
  id: string;
  project: string;
  date: string;
  description: string;
  industry: 'Beverages' | 'Energy' | 'Automotive' | 'Cosmetics';
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'beverage-1',
    project: 'Kaizen in bottling lines (Heineken Haiti)',
    date: 'November 2016 – February 2017',
    description: 'Auditing the line, working in the line deficiencies as operators, maintenance, supply planning. Increase of 20 points in the average efficiency',
    industry: 'Beverages'
  },
  {
    id: 'beverage-2',
    project: 'Cap Feeder for a Zalkin Capper - Campari',
    date: 'June 2014',
    description: 'PLC software modification to fit the new capper in the Krones filler. Simatic Step 7 (Siemens)',
    industry: 'Beverages'
  },
  {
    id: 'beverage-3',
    project: 'Filling line 40k b/h BRANA (Haiti) Heineken',
    date: 'February 2014 – May 2014',
    description: 'Comissioning, Ramp up, efficiency increase, and assisted operation. Sistem Simatic Step 7 (Siemens)',
    industry: 'Beverages'
  },
  {
    id: 'beverage-4',
    project: 'Format Changeover for PET 500ml Ambev Fortaleza',
    date: 'February 2012',
    description: 'Air conveyor software change. Sistem Simatic Step 7 (Siemens)',
    industry: 'Beverages'
  },
  {
    id: 'beverage-5',
    project: 'Blue Spirit ICE Changeover Cervejaria Petrópolis',
    date: 'August 2011',
    description: 'Recipes and software modification to run new bottles in the line. Simatic Step 7 (Siemens)',
    industry: 'Beverages'
  },
  {
    id: 'beverage-6',
    project: 'Filling Line 18000 b/h Campari',
    date: 'September 2010',
    description: 'Assembly, comissioning, and production tests. Sistem Simatic Step 7 (Siemens)',
    industry: 'Beverages'
  },
  {
    id: 'beverage-7',
    project: 'PET Labeller and Infeed Conveyor Coca Cola - Amapá',
    date: 'June 2010',
    description: 'Assembly, comissioning and production tests. Comtroll 15000 b/h. Siemens Step 7',
    industry: 'Beverages'
  },
  {
    id: 'beverage-8',
    project: 'Continuous Formulation Ades Unilever Pouso Alegre',
    date: 'August 2008',
    description: 'Software development, comissioning and production tests. Contrologix and Supervisory Factory Talk (Rockwell)',
    industry: 'Beverages'
  },

  // Energy
  {
    id: 'energy-1',
    project: 'Cleaner and Silo Expansion for Soy Beans (Incobrasa)',
    date: 'February 2019',
    description: 'Automation design for Silo control expansion for soy bean drying process. PLC Rockwell. Supervisory Wonderware InTouch',
    industry: 'Energy'
  },
  {
    id: 'energy-2',
    project: 'Soy Oil Filling line (Automation changes) (Incobrasa)',
    date: 'February 2019 – April 2019',
    description: 'Conveyor changes to fit new production and reliability. Palletizer changes for the new pallet formation. Labeller signal exchange for conveyor. PLC Siemens. HMI Siemens',
    industry: 'Energy'
  },
  {
    id: 'energy-3',
    project: 'Vapor Recovery Unit P-75',
    date: 'May 2016 – July 2016',
    description: 'Vapor recovery unit for an Oil and Gas platform, electrical and automation development. FAT, FMEA and all documentation',
    industry: 'Energy'
  },
  {
    id: 'energy-4',
    project: 'P15 Petrobras Nitrogen Generator',
    date: 'March 2016',
    description: 'Automation development, documentation, comissioning. FAT and FMEA for a Exd Environment. Altus System for PLC. Siemens HMI',
    industry: 'Energy'
  },
  {
    id: 'energy-5',
    project: 'P10 Petrobras Nitrogen Generator',
    date: 'February 2016',
    description: 'Automation development, documentation, comissioning. FAT and FMEA for a Exd Environment. Altus System for PLC. Siemens HMI',
    industry: 'Energy'
  },
  {
    id: 'energy-6',
    project: 'P11 Petrobras Nitrogen Generator',
    date: 'February 2016',
    description: 'Automation development, documentation, comissioning. FAT and FMEA for a Exd Environment. Altus System for PLC. Siemens HMI',
    industry: 'Energy'
  },

  // Automotive
  {
    id: 'automotive-1',
    project: 'Schuler Stamping Press Ford',
    date: 'August 2018 – March 2019',
    description: 'Automation improvement, troubleshooting, comissioning, service',
    industry: 'Automotive'
  },
  {
    id: 'automotive-2',
    project: 'Wire Harness Oven BMW',
    date: 'March 2018 – July 2018',
    description: 'Wire harness oven Extension. Siemens STEP 7 and WinCC Flexible',
    industry: 'Automotive'
  },
  {
    id: 'automotive-3',
    project: 'Marriage Line BMW Spartanburg SC',
    date: 'March 2018 – May 2018',
    description: 'PLC and Robot integration in the marriage line, powertrain and car body',
    industry: 'Automotive'
  },
  {
    id: 'automotive-4',
    project: 'Hatch Lift Assist BMW Manufacturing Company',
    date: 'September 2017 – February 2018',
    description: 'Hatch lift assist on band 19, all positions according with the car body. System: Simatic S7, Festo CPX, Profinet/Profisafe, TIA 13',
    industry: 'Automotive'
  },
  {
    id: 'automotive-5',
    project: 'Diff Oil Filling Poke Durr (BMW USA)',
    date: 'November 2017 – December 2017',
    description: 'Interlock to avoid misplacing the filling nozzle. System: Siemens S7 TIA',
    industry: 'Automotive'
  },
  {
    id: 'automotive-6',
    project: 'NVLD BMW South Carolina',
    date: 'July 2017 – August 2017',
    description: 'Comissioning, interlock improvements, customer acceptance. System: Siemens TIA',
    industry: 'Automotive'
  },
  {
    id: 'automotive-7',
    project: 'Bodyshop Mercedes Benz - Alabama EUA',
    date: 'Date not specified',
    description: 'ABS Tester Rebuild BMW USA: Movidrive comissioning and system startup.',
    industry: 'Automotive'
  },

  // Cosmetics
  {
    id: 'cosmetics-1',
    project: 'Hotfill Line for makeup Avon',
    date: 'April 2015',
    description: 'Hotfill line for makeup products. Machines: Bottle Indexation, Conveyor, Filler (hot fill), Capper, Line integration (Cooling unit, Pick and place Robot, Labeller). Responsibilities: Scope and Diagram development, Automation Development (PLC and HMI), comissioning, FAT and SAT. Rockwell',
    industry: 'Cosmetics'
  },
  {
    id: 'cosmetics-2',
    project: 'Bottle Indexation and Filler Avon',
    date: 'March 2015',
    description: 'Automation Development (PLC and HMI), Tests and comissioning, FAT and SAT. Rockwell',
    industry: 'Cosmetics'
  },
  {
    id: 'cosmetics-3',
    project: 'Puck Conveyor Upgrade Avon',
    date: 'August 2013',
    description: 'Conveyor modification to get a puck buffer in the filler infeed (Avon São Paulo). Simotion (Siemens)',
    industry: 'Cosmetics'
  },
  {
    id: 'cosmetics-4',
    project: 'Cartoner CMF 60 per minute Grupo Boticário - Optima Group Gmbh (Schwäbisch Hall, Germany)',
    date: 'February 2013 – July 2013',
    description: 'Assembly, comissioning, startup, FAT, IQ OQ, and all the documentation from english to portuguese. Simotion (Siemens)',
    industry: 'Cosmetics'
  },
  {
    id: 'cosmetics-5',
    project: 'Bug Protection Filler SC Johnson Manaus-AM',
    date: 'May 2013',
    description: 'Assembly, comissioning, startup and ramp up. Simotion Motion Control, IHM WinCC Flexible (Siemens)',
    industry: 'Cosmetics'
  },
  {
    id: 'cosmetics-6',
    project: 'Cap Pick and Place Avon Mexico',
    date: 'January 2013',
    description: 'Robotic system to feed caps in the line. Comissioning and Startup for Fanuc Robot',
    industry: 'Cosmetics'
  }
];

export const industries = [
  { id: 'all', name: 'Todos', count: caseStudies.length },
  { id: 'Beverages', name: 'Beverages', count: caseStudies.filter(c => c.industry === 'Beverages').length },
  { id: 'Energy', name: 'Energy', count: caseStudies.filter(c => c.industry === 'Energy').length },
  { id: 'Automotive', name: 'Automotive', count: caseStudies.filter(c => c.industry === 'Automotive').length },
  { id: 'Cosmetics', name: 'Cosmetics', count: caseStudies.filter(c => c.industry === 'Cosmetics').length }
];

export const stats = {
  totalProjects: caseStudies.length,
  satisfactionRate: '98%',
  averageROI: '165%',
  responseTime: '24h',
  industries: 4, // Beverages, Energy, Automotive and Cosmetics
  teamMembers: '50+',
  yearsExperience: '15+'
};
