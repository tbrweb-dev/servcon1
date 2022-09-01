import axios from "axios";
import { api } from "pages/api/api";
import { createContext, useContext, useEffect, useState } from "react";

export const InformacoesContext = createContext()

function organizarObrigacoesPorEstado(obrigacoesGeral) {
  const espiritoSanto = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 168)
  const matoGrossoDoSul = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 5443)
  const minasGerais = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 169)
  const rioGrandeDoSul = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 155)
  const parana = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 158)
  const rioDeJaneiro = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 153)
  const santaCatarina = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 154)
  const saoPaulo = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 152)

  return {
    espiritoSanto: [ ...espiritoSanto ],
    matoGrossoDoSul: [ ...matoGrossoDoSul ],
    minasGerais: [ ...minasGerais ],
    rioGrandeDoSul: [ ...rioGrandeDoSul ],
    parana: [ ...parana ],
    rioDeJaneiro: [ ...rioDeJaneiro ],
    santaCatarina: [ ...santaCatarina ],
    saoPaulo: [ ...saoPaulo ],

  }
}

export function InformacoesProvider({ children }) {
  const [noticias, setNoticias] = useState([])
  const [obrigacoes, setObrigacoes] = useState([])
  const [agenda, setAgenda] = useState([])
  const [cotacoes, setCotacoes] = useState([])

  useEffect(() => {
    const url1 = api.get('noticias')
    const url2 = api.get('cotacoes')
    const url3 = api.get('obrigacoes')
    const url4 = api.get('agenda')
    axios.all([url1, url2, url3, url4])
      .then(axios.spread((...responses) => {
        setNoticias(responses[0].data)
        setCotacoes(responses[1].data)
        setObrigacoes(organizarObrigacoesPorEstado(responses[2].data))
        setAgenda(responses[3].data)
      }))
  }, [])

  return (
    <InformacoesContext.Provider value={{ noticias, obrigacoes, agenda, cotacoes }}>
      { children }
    </InformacoesContext.Provider>
  )
}

export function useInformacoes() {
  const context = useContext(InformacoesContext)
  return context
}