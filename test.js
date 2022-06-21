const chai = require('chai');
chai.use(require('chai-as-promised'));

const expect = chai.expect;
const PROFILES_LIST = [
  {
    name: 'default',
    awsS3Key: 'PROFILE2ID' //#defect#hardcoded_secret_pattern#aws_key_identifiers
  }
];

