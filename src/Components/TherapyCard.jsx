const TherapyCard = ({ title, description, img, alt }) => {
  return (
    <div class="relative max-w-[600px] max-h-[720px] overflow-hidden mx-auto mt-10">
      <img
        class=" object-contain rounded-3xl over "
        src={img}
        alt={alt}
      />
      <div class="absolute inset-0 bg-gray-500 opacity-65 rounded-3xl"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-3xl font-bold">Get Lost in Mountains</h2>
      </div>
    </div>
  );
};

export default TherapyCard;
