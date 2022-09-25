class MarvelService {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = 'apikey=015af1cd34cd5db81cd2dc1aec14e0c3';
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        } else {
            return await res.json();
        }

    }
    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }
    getCharacter = async (id) => { //Если кто не помнит, то операторы async и await работают только вместе
        const res = await this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=015af1cd34cd5db81cd2dc1aec14e0c3`)
        return this._transformCharacter(res.data.results[0]);
    }
    // filteredDesc = (char) => {
    //     if (char.description.length === 0) {
    //         return 'There is no description about this character'
    //     } else if (char.description.length > 50){
    //         return 'really big description'
    //     } else {
    //         return char.description;
    //     }
    // }
    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.jpg',
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            toggler: '',
            comics: char.comics.items,
        }
    }
    _nineCharacters = (char) => {
        return {
            thumbnail: char.thumbnail.path + '.jpg',
            name: char.name,
        }
    }
}

export default MarvelService;   