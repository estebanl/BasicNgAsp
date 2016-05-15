using DirectivesFundamentals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DirectivesFundamentals.Controllers
{
   // [EnableCors("*","*","GET,POST,PUT,DELETE")]
    public class ClientsController : ApiController
    {
        // GET: api/Clients
        public IEnumerable<Client> Get()
        {
            return new List<Client> { new Client { Id = 1, Name = "Uno"}, new Client {Id = 2, Name = "Dos" } };
        }

        // GET: api/Clients/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Clients
        public Client Post([FromBody]Client client)
        {
            return client;
        }

        // PUT: api/Clients/5
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]Client client)
        {
            client.Name = client.Name + " Update";
            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

        // DELETE: api/Clients/5
        [HttpDelete]
        public string Delete(int id)
        {
            return "Delete " + id;
        }

        public HttpResponseMessage Options()
        {
            var response = new HttpResponseMessage
            {
                StatusCode = HttpStatusCode.OK
            };
            return response;
        }
    }
}
