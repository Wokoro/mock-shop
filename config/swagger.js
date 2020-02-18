/**
 * @author - Wokoro Douye Samuel
 */

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'Mock Shop',
    version: '1.0.0',
    description: 'REST API Documentation for Mock Shop',
  }
};

// options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./docs/**/*.yaml']
};

export default options;
