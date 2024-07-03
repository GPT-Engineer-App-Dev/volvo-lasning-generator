import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[600px]">
        <img src="/placeholder.svg?w=1920&h=600" alt="Volvo Car" className="mx-auto rounded-xl object-cover w-full h-[600px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold">Experience the Future of Driving</h1>
          <p className="mt-4 text-xl">Discover the latest models and innovations from Volvo</p>
          <Button className="mt-6">Explore Models</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">About Volvo</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Volvo has a rich history of innovation and safety. Our commitment to excellence drives us to create vehicles that are not only stylish but also safe and environmentally friendly.</p>
        <img src="/placeholder.svg?w=800&h=400" alt="Volvo Heritage" className="mx-auto rounded-xl object-cover w-full h-[400px] mt-8" />
      </section>

      {/* Models Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Our Models</h2>
        <div className="mt-8">
          {/* Placeholder for carousel */}
          <div className="flex justify-center space-x-4">
            <img src="/placeholder.svg?w=300&h=200" alt="Model 1" className="mx-auto rounded-xl object-cover w-[300px] h-[200px]" />
            <img src="/placeholder.svg?w=300&h=200" alt="Model 2" className="mx-auto rounded-xl object-cover w-[300px] h-[200px]" />
            <img src="/placeholder.svg?w=300&h=200" alt="Model 3" className="mx-auto rounded-xl object-cover w-[300px] h-[200px]" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
        <div className="mt-8">
          <p>Address: 123 Volvo Street, Car City, CC 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@volvo.com</p>
        </div>
      </section>
    </div>
  );
};

export default Index;