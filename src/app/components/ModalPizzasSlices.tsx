import { PizzasSizesProps } from "../page"

const ModalPizzasSlices = (
  { setOpenModalPizzasSlices, setSlicesOfPizza, currentPizza }:
    { setOpenModalPizzasSlices: any, setSlicesOfPizza: any, currentPizza: PizzasSizesProps }) => {
  return (
    <div className="flex justify-center absolute top-8 w-full h-4/5 z-10" >
      <div className="bg-thirdColor text-white w-4/5 flex flex-wrap content-between">
        <table className="w-full">
          <thead className="border-b-[1px] border-white/20" >
            <tr>
              <th className="p-3">Selecione quantos pedaços deseja que corte</th>
            </tr>
          </thead>
          <tbody>
            {currentPizza.slices.map(slice => {
              return (
                <tr
                  key={slice}
                  className="border-b-[1px] border-white/20" >
                  <td className="h-8" >
                    <input
                      onClick={() => setSlicesOfPizza(slice)}
                      type="radio"
                      value={currentPizza.name}
                      id={`${slice}`}
                      name="cortar"
                      className="ml-2"
                    />
                    <label
                      htmlFor={`${slice}`}
                      className="ml-2">{`Cortar em ${slice} pedaços.`}
                    </label>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="flex justify-end w-full border-t-[1px] border-white/20" >
          <button
            onClick={() => setOpenModalPizzasSlices((prev) => !prev)}
            className="w-1/2 p-3 text-lg text-end"
          >Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalPizzasSlices

