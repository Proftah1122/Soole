export const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe',
  'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
  'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

// Mock LGA data for demonstration
const lgaData: Record<string, string[]> = {
  Lagos: [
    'Alimosho', 'Ajeromi-Ifelodun', 'Kosofe', 'Mushin', 'Oshodi-Isolo',
    'Ojo', 'Ikorodu', 'Surulere', 'Agege', 'Ifako-Ijaiye', 'Shomolu',
    'Amuwo-Odofin', 'Lagos Mainland', 'Ikeja', 'Eti-Osa', 'Lagos Island',
    'Apapa', 'Badagry', 'Epe', 'Ibeju-Lekki'
  ],
  'FCT': [
    'Abaji', 'Abuja Municipal', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali'
  ],
  // Add more states and their LGAs as needed
};

export const getLGAs = (state: string): string[] => {
  return lgaData[state] || [];
};

export const getMajorCities = (state: string, lga: string): string[] => {
  // Mock function to return major locations within an LGA
  // In a real app, this would come from an API or database
  return [
    `${lga} Central`,
    `${lga} Market Area`,
    `${lga} Bus Terminal`,
    `${lga} Shopping District`,
    `${lga} Residential Area`
  ];
};