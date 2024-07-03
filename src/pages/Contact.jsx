import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold">Get in Touch</h1>
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
    </div>
  );
};

export default Contact;