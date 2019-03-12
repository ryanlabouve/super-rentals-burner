import {helper} from '@ember/component/helper';

// const communityPropertyTypes = ['Condo', 'Townhouse', 'Apartment'];

export function rentalPropertyType(/*[propertyType]*/) {
  // if (communityPropertyTypes.includes(propertyType)) {
  //   return 'Community';
  // }

  // return 'Standalone';
  return '';
}

export default helper(rentalPropertyType);
