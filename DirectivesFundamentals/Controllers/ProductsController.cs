﻿using DirectivesFundamentals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.OData;

namespace DirectivesFundamentals.Controllers
{
    public class ProductsController : ApiController
    {
        // GET: api/Products   Odata
        [EnableQuery()]
        public IQueryable<Product> Get()
        {
            var repository = new ProductRepository();
            return repository.Retrieve().AsQueryable();
        }

        public IEnumerable<Product> Get(string search)
        {
            var repository = new ProductRepository();
            return repository.Retrieve().Where(p => p.ProductCode.Contains(search));
        }

        // GET: api/Products/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Products
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
        }
    }
}
