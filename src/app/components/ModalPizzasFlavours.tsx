import { PizzasSizesProps } from "./PizzaButtonsOptions"


const ModalPizzasFlavours = ({ setOpenModalPizzasFlavours, setFlavoursOfPizza, currentPizza }:
  { setOpenModalPizzasFlavours: any, setFlavoursOfPizza: any, currentPizza: PizzasSizesProps }) => {
  return (
    <div className="flex justify-center absolute top-8 w-full h-4/5" >
      <div className="bg-thirdColor text-white w-4/5 flex flex-wrap content-between">
        <table className="w-full">
          <thead className="border-b-[1px] border-white/20" >
            <tr>
              <th className="p-3">Selecione quantos sabores a pizza deve ter.</th>
            </tr>
          </thead>
          <tbody>
            {currentPizza.flavours.map(flavour => {
              return (
                <tr
                  key={flavour}
                  className="border-b-[1px] border-white/20" >
                  <td className="h-8">
                    <input
                      onClick={() => setFlavoursOfPizza(flavour)}
                      type="radio"
                      value={currentPizza.name}
                      id={`${flavour}`}
                      name="sabor"
                      className="ml-2"
                    />
                    <label
                      htmlFor={`${flavour}`}
                      className="ml-2">{`${flavour} Sabores.`}
                    </label>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="flex justify-end w-full border-t-[1px] border-white/20" >
          <button
            onClick={() => setOpenModalPizzasFlavours((prev) => !prev)}
            className="w-1/2 p-3 text-lg text-end"
          >Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalPizzasFlavours