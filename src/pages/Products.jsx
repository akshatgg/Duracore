import './Products.css'

const Products = () => {
  return (
    <div className="products-page">
      <div className="container">
        {/* Hero Section */}
        <section className="products-hero">
          <h1>Our Products</h1>
          <p className="hero-subtitle">
            Pre-Engineered Buildings, Steel Decking Sheet, Sandwich Insulated Panels, Rockwool Panels, 
            Fire exit doors and Z&C Purlin and supreme range of solutions for insulated roofing and 
            cladding products for Cold chain solutions, Clean rooms, Cold rooms & Prefab shelters
          </p>
        </section>

        {/* Sandwich Insulated Panels Section */}
        <section className="product-category">
          <h2>Sandwich Insulated Panels</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">PU Roof Panels</div>
              </div>
              <div className="product-content">
                <h3>PU Roof Panels</h3>
                <p>
                  Polyurethane (PU) Metal is a revolutionary way of roofing with outstanding thermal efficiency. 
                  It is factory manufactured by bonding CFC-free Rigid Polyurethane (PO) foam between exterior 
                  and interior skin of profiled metal roofing sheets.
                </p>
                <div className="product-specs">
                  <span className="spec">Available Thickness: 20mm, 30mm, 50mm</span>
                </div>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Fire Proof Sandwich Panels</div>
              </div>
              <div className="product-content">
                <h3>Fire Proof Sandwich Panels</h3>
                <p>
                  A thermal insulation sandwich panel is one that is made up of high-quality insulating 
                  materials- PIR, PU, or Mineral Wool.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Rockwool Panels</div>
              </div>
              <div className="product-content">
                <h3>Rockwool Panels</h3>
                <p>
                  Rockwool Sandwich Panel has a metal sheet covering on either side with rockwool filling 
                  in between. They are highly preferred for their thermal conductivity, low combustibility 
                  and high mechanic resistance.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Fire Proof Panels</div>
              </div>
              <div className="product-content">
                <h3>Fire Proof Panels</h3>
                <p>
                  The fire retardant panels offers a linear expansion and low swelling thickness properties, 
                  smooth surface properties for lamination and finishing, ease of machining and low tool wear 
                  and are available in a wide variety of products and sizes.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">EPS Panels</div>
              </div>
              <div className="product-content">
                <h3>EPS Panels</h3>
                <p>
                  EPS Cement Sandwich Panel, also known as Extruded Polystyrene (EPS) Panel is a structural 
                  insulated panel used in the construction industry for creating partitions. It consists of 
                  a rigid Insulating layer sandwiched between two layers of board.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Cam Lock Panels</div>
              </div>
              <div className="product-content">
                <h3>Cam Lock Panels</h3>
                <p>
                  Cam Lock Panels is composed of two galvanized steel sheets and rigid polyurethane foam in 
                  the middle. It has been widely used as the building material of cold storages, cool rooms, 
                  clean rooms, free-dust workshops and exterior walls in cold places.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Sheets Section */}
        <section className="product-category">
          <h2>Roofing Sheets</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Multi Color Roofing Sheets</div>
              </div>
              <div className="product-content">
                <h3>Multi Color Roofing Sheets</h3>
                <p>
                  Multi Color Roofing Sheets are coated with different colours via a chemical process. 
                  This ensures they retain they're colour and shine for a long time. Highly durable.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Metal Doors Section */}
        <section className="product-category">
          <h2>Metal Doors</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Acoustic Door</div>
              </div>
              <div className="product-content">
                <h3>Acoustic Door</h3>
                <p>
                  Acoustic doors are engineered to prevent a specific amount of sound from passing through 
                  a door. They have been common in loud environments such as manufacturing facilities and 
                  music studios for decades, but they have become increasingly popular in office buildings, 
                  hotels, and schools too.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Clean Room Door</div>
              </div>
              <div className="product-content">
                <h3>Clean Room Door</h3>
                <p>
                  The cleanroom doors smooth and seamless construction means there are no ledges where 
                  bacteria can gather. The one piece encapsulation means that these cleanroom doors are 
                  100% waterproof.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Cold Room Door</div>
              </div>
              <div className="product-content">
                <h3>Cold Room Door</h3>
                <p>
                  Cold storage doors are designed for negative temperature controlled environments, down to 
                  minus 40 ° C, as we need in laboratories, clinics, restaurants or food industries. It has 
                  excellent fire performance and great thermal insulation.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">FHC Door</div>
              </div>
              <div className="product-content">
                <h3>FHC Door</h3>
                <p>
                  FHC stands for Fire Hose Cabinet and we manufacture doors specific to this area. Available 
                  with both single and double door features these FHC doors are available in different sizes, 
                  shapes and designs according to the customer's demands.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Fire Proof Door</div>
              </div>
              <div className="product-content">
                <h3>Fire Proof Door</h3>
                <p>
                  A fire door is a door with a fire-resistance rating used as part of a passive fire 
                  protection system to reduce the spread of fire and smoke.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Fire Exit Door</div>
              </div>
              <div className="product-content">
                <h3>Fire Exit Door</h3>
                <p>
                  A fire exit door is a type of door that leads people outside in the event of a fire. 
                  You will typically see these doors on the outsides of buildings since they are almost 
                  always externally fitted. Most commercial and industrial buildings need to have fire 
                  exit doors due to fire regulations.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Powder Coated Metal Door</div>
              </div>
              <div className="product-content">
                <h3>Powder Coated Metal Door</h3>
                <p>
                  Powder coating a steel entry door can be thought of as a dry painting process. Rather 
                  than liquid or aerosol paint products, dry powder paint is sprayed at high velocity 
                  onto a metal surface.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Shaft Door</div>
              </div>
              <div className="product-content">
                <h3>Shaft Door</h3>
                <p>
                  There are many heat resistant systems used to ensure fire safety in buildings. As well 
                  as emergency exit doors and fire escapes, doors that are used to protect electrical and 
                  mechanical installations and to prevent dangers from reflecting out are called shaft doors.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Stainless Steel Door</div>
              </div>
              <div className="product-content">
                <h3>Stainless Steel Door</h3>
                <p>
                  Design professionals generally specify stainless steel doors for their sleek appearance. 
                  Stainless steel is also the optimum door material where rust and corrosion are a concern. 
                  They are also very hygienic.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Decking Sheet Section */}
        <section className="product-category">
          <h2>Decking Sheet - Galvanised</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Decking Sheet</div>
              </div>
              <div className="product-content">
                <h3>Decking Sheet</h3>
                <p>
                  Deck sheets are flat surfaces or platforms capable of supporting flooring and roofing 
                  sheets and these are connected to the outer or inner part of the building structure. 
                  These sheets are very helpful in reducing the concentrated loading effect of roofing 
                  on the building structures by proper distribution of load.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Decking Installation</div>
              </div>
              <div className="product-content">
                <h3>Decking Installation</h3>
                <p>
                  We do Decking sheet installation services.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Purlin Section */}
        <section className="product-category">
          <h2>Purlin</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Z & C Purlin</div>
              </div>
              <div className="product-content">
                <h3>Z & C Purlin</h3>
                <p>
                  C and Z sections are generally used as roof purlins or wall girts, helping to create 
                  the main 'skeleton' of your building that other materials are fixed to. C purlins are 
                  more lightweight and are normally used to support walls and floors. Z purlins are 
                  stronger and used for roofing and walls.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Z & C Purlin Assembly</div>
              </div>
              <div className="product-content">
                <h3>Z & C Purlin Assembly</h3>
                <p>
                  Purlin Assemblies come with a Hex Bolt, nut and 2 washers assembled. Purlins are used 
                  to support roof, framing and wall sheeting in industrial, commercial and rural buildings.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>
          </div>
        </section>

        {/* PVC & Aluminium Covings Section */}
        <section className="product-category">
          <h2>PVC & Aluminium Covings</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Coving & Corner</div>
              </div>
              <div className="product-content">
                <h3>Coving & Corner</h3>
                <p>
                  A coving is a piece of material that has been fitted to cover the seam or transition 
                  between two surfaces, such as the edge between two walls or between a wall and the 
                  ceiling or floor.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">PVC Inner Coving</div>
              </div>
              <div className="product-content">
                <h3>PVC Inner Coving</h3>
                <p>
                  Soft Edge PVC Coving is a co-extruded product. It is made by extrusion of two kind 
                  (Soft and rigid) of materials at one time. The flanges of coving is made in soft 
                  material that sticks to the panels and make smooth and fine finish.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">3D Corner</div>
              </div>
              <div className="product-content">
                <h3>3D Corner</h3>
                <p>
                  Purlin Assemblies come with a Hex Bolt, nut and 2 washers assembled. Purlins are used 
                  to support roof, framing and wall sheeting in industrial, commercial and rural buildings.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Categories */}
        <section className="product-category">
          <h2>Additional Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Flashing</div>
              </div>
              <div className="product-content">
                <h3>Flashing</h3>
                <p>
                  Flashing is a flat and thin material used to prevent water from entering the openings 
                  and cracks of a roof. It is placed underneath the shingles of your roof and it redirects 
                  the water to another location.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Screws & Rivets</div>
              </div>
              <div className="product-content">
                <h3>Screws & Rivets</h3>
                <p>
                  We have the Fixing Accessories like all kind of Screws & Rivets.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Rockwool Slab</div>
              </div>
              <div className="product-content">
                <h3>Rockwool Slab</h3>
                <p>
                  Rockwool slabs are a form of rockwool, a natural growing medium made of spun basalt 
                  and chalk to create a dense fibrous material. To form rockwool slabs, the materials 
                  are spun and melted, first forming a cotton candy-like material that is them formed 
                  into block-shaped slabs.
                </p>
                <a href="/contact" className="product-btn">Explore Service →</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="products-cta">
          <div className="cta-content">
            <h3>Need Custom Solutions?</h3>
            <p>
              Duracore is Supplier & Dealer of Pre-Engineered Building materials. Our qualified and 
              experienced, the innovative team of experts are capable to develop any customized sheet 
              metal product as per customer need within the limited time frame.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Contact Us</a>
              <a href="/quote" className="btn btn-secondary">Get Quote</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Products
