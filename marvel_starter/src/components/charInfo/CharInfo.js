import {Component} from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';

class CharInfo extends Component{
    state = {
        char: null,
        loading: false,
        error: false,
        toggler: false,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState) { //вызывается когда в компонент приходит либо новый пропс, ли бо когда изменяется state, либо когда происходит принудительное обновление, например, когда пользовател перезагружает страницу
        //Мы мжем внести три аргумента. Первый - предыдущий пропс, второй - предыдущий стейт, а про третий забыли, потому что он настолько редкий
        if (this.props.charId !== prevProps.charId) { //Разумеется если есть аргументы, то мы их должны использовать,  а иначе комп полетит, потому что будет бесконечный цикл запросов. Значит обязательно сравниваем новое значение со старым и если оно равно, то ничего не будет происходить
            this.updateChar();

        }
    }

    componentDidCatch(error, info) { //Как и говоилось есть 4 этап жизненного цикла. когда компонент ловит ошибку. И вообще если это происходит, то сливается весь проект. Но мы можем сделать чтобы слетался только этот компонент и выдавал ошибку
        //Итак, этот метод принимает в себя два аргумента. Первый - ошибка, второе - описание ошибки
        console.log(error, info);
        this.setState({error: true});
    }

    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false});
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    render () {
        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(error || loading || !char) ? <View char={char}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {
    let {comics, name, description, thumbnail, homepage, wiki, toggler} = char;

    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        toggler = 'randomchar__img_not_found';
    } else {
        toggler = 'randomchar__img'
    }
    return (
        <>
        <div className="char__basics">
                    <img src={thumbnail} alt={name} className={toggler}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">{description}</div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {comics.lenght > 0 ? null : 'no comics available'}
                    {
                        comics.map((item, id) => {
                            if (id > 9){
                                // eslint-disable-next-line
                                return;
                            } 
                            return(
                                <li key={id} className="char__comics-item">
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
        </>
    )
}

export default CharInfo;