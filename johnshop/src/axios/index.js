import axios from 'axios'

export default axios.create({
    // ett konfigueringsobjekt en base url där vi kan sätta standardvärden som headers går att göra mycket bara läsa i dokumentationen
    baseURL:'http://localhost:9999/api/'
    // för att köra api npm run dev ovan är adressen till mitt api
})