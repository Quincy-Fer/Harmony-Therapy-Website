import { close } from "../assets/icons";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-3xl max-w-md w-full">
        <div className="flex justify-between content-center mb-6 ">
          <h2 className="text-3xl font-bold font-quicksand text-green-950 ">
            Book Consultation 
          </h2>
          <button onClick={closeModal}>
            <img src={close} alt="close button" className=" w-5" />
          </button>
        </div>

        <form>
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-base font-bold mb-2 font-nunito"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
               leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-bold mb-2 font-nunito"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3
               text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-nunito font-bold mb-2 text-base"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
               focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-bold mb-2 font-nunito"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline resize-none"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-4 text-red-500 text-lg font-extrabold hover:underline font-quicksand
               "
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-green-700 hover:bg-green-500 text-lg text-white font-bold py-1  font-quicksand
               px-5 rounded-3xl "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
