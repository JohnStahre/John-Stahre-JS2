import axios from 'axios'

export default axios.create({
    // ett konfigueringsobjekt en base url där vi kan sätta standardvärden som headers går att göra mycket bara läsa i dokumentationen
    baseURL:'här inne ska nåt vara från api'
    // för att köra api npm run dev
})