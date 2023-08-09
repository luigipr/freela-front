import { useState } from "react";
import Select from "react-select";
import { useStates } from "../hooks/useStates";
import { useCities } from "../hooks/useCities";

export const SelectEstado = () => {
const { states } = useStates ();
const [selectedState, setSelectedState] = useState<number | null>(null);
const stateOptions = states.map((state) => ({
value: state.id,
label: state.nome
}));

const selectedOptionState = stateOptions.find((e) => e.value === selectedState);

const handleStateUpdate = (event) => { setSelectedState (event.value)};

return (
    <Select
        placeholder="Selecione um State"
        options={stateOptions}
        value={selectedOptionState}
        onChange={handleStateUpdate}
        />
)};


export const SelectCity = ({uf }) => {

const { cities, loading: loadingCities } = useCities({uf});

const cityOptions = cities.map((city) => ({
value: city.codigo_ibge,
label: city.nome
}));
return (

<Select
    isLoading={loadingCities}
    isDisabled={loadingCities || cityOptions.length}
    placeholder="Selecione uma cidade"
    />
)};