import React from 'react';

const services = [
  {
    title: "Back Pain Treatment",
    image: "back-pain.jpg",
    description: "Specialized care for chronic and acute back pain conditions including herniated discs, spinal stenosis, and sciatica."
  },
  {
    title: "Slipped Disc Treatment",
    image: "slipped-disc.jpg",
    description: "Advanced therapies for herniated or bulging discs including minimally invasive procedures and rehabilitation."
  },
  {
    title: "Joint Pain Treatment",
    image: "joint-pain.jpg",
    description: "Comprehensive solutions for joint pain and arthritis including injections, physiotherapy, and joint replacement."
  },
  {
    title: "Knee Pain Treatment",
    image: "knee-pain.jpg",
    description: "From conservative care to advanced surgical options including arthroscopy and knee replacement."
  },
  {
    title: "Foot Pain Treatment",
    image: "foot-pain.jpg",
    description: "Specialized care for foot and ankle conditions including plantar fasciitis, bunions, and Achilles tendonitis."
  },
  {
    title: "Neck Pain Treatment",
    image: "neck-pain.jpg",
    description: "Targeted therapies for cervical spine issues including whiplash, degenerative disc disease, and pinched nerves."
  },
  {
    title: "Heel Pain Treatment",
    image: "heel-pain.jpg",
    description: "Effective solutions for plantar fasciitis and heel spurs including shockwave therapy and custom orthotics."
  },
  {
    title: "Sports Injury Treatment",
    image: "sports-injury.jpg",
    description: "Specialized care for athletes and active individuals including ACL tears, rotator cuff injuries, and stress fractures."
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>Pain <span className="highlight">Conditions</span> Treated</h2>
          <p>Comprehensive treatment for various orthopedic conditions using evidence-based approaches</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className={`service-card fade-in-up delay-${Math.floor(index/2)+1}`} key={index}>
              <div className="service-image">
                <img src={require(`../assets/images/${service.image}`)} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;