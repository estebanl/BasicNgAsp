using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DirectivesFundamentals.Controllers
{
    [EnableCorsAttribute("*","*","*")]
    public class ValuesController : ApiController
    {

        List<Data> data = new List<Data>()
        {
            new Data {Id = 1,Value = "Cali", Tipo ="Ciudad" },
            new Data {Id = 1,Value = "Bogota", Tipo ="Ciudad" },
            new Data {Id = 1,Value = "Baranquilla", Tipo ="Ciudad" },
            new Data {Id = 1,Value = "Cartagena", Tipo ="Ciudad" },
            new Data {Id = 1,Value = "Bucaramanga", Tipo ="Ciudad" },
            new Data {Id = 1,Value = "Medellin", Tipo ="Ciudad" },

            new Data {Id = 1,Value = "Chapinero", Tipo ="Zona" },
            new Data {Id = 1,Value = "Antonio Nariño", Tipo ="Zona" },
            new Data {Id = 1,Value = "Kenedy", Tipo ="Zona" },
            new Data {Id = 1,Value = "Bla", Tipo ="Zona" },
            new Data {Id = 1,Value = "Bla-Bla", Tipo ="Zona" },
            new Data {Id = 1,Value = "La-la", Tipo ="Zona" },

            new Data {Id = 1,Value = "Ciudad berna", Tipo ="SubZona" },
            new Data {Id = 1,Value = "Ciudad Jardin", Tipo ="SubZona" },
            new Data {Id = 1,Value = "Policarpa", Tipo ="SubZona" },
            new Data {Id = 1,Value = "Santa fe", Tipo ="SubZona" },
            new Data {Id = 1,Value = "Perdomo", Tipo ="SubZona" },
            new Data {Id = 1,Value = "Polo", Tipo ="SubZona" },
        };

        // GET api/values
        public IEnumerable<Data> Get()
        {
            return data;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        public IEnumerable<Data> Get(string tipo)
        {
            return data.ToList().Where(c => c.Tipo == tipo);
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }

    public class Data
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public string Tipo { get; set; }
    }
}
