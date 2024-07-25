import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          offer
        </h2>
        <p className="mt-4 info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sunt
          maiores dolorum minus necessitatibus sed eum quaerat repellat ipsum
          voluptas.
        </p>
        <p className="mt-6 info-text">
          our dedication to detail and excellence ensure your satisfaction
        </p>
        <div className="mt-10 mb-10 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
