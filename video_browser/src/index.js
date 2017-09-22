import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = "AIzaSyDdIS4kyTPuezvGruAk9_dM-CwQuyfsdzU";

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('');
    }


    videoSearch (term) {
        YTSearch({
            key: YOUTUBE_API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render () {
        return (
            <div>
                <SearchBar onSearchBarChange={(term) => {this.videoSearch(term);}} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(selectedVideo) =>
                        this.setState({ selectedVideo })
                    }
                    videos={this.state.videos}
                />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector(".container"));
