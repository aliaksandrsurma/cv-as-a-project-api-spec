const path = require('path')

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });


fastify.register(require('@fastify/swagger'), {
  mode: 'static',
  specification: {
    path: path.join(__dirname, '../swagger/api-specs.yaml')
  }
});


fastify.register(require('@fastify/swagger-ui'), {
  baseDir: path.join(__dirname),
  routePrefix: '/api-spec'
});


// Run the server!

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const start = async () => {
  try {
    fastify.listen({ port: port, host: host });
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();