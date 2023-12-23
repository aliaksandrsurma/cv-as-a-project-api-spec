const path = require('path')

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false });


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
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();