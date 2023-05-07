const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)
        
        const player = $('.player')
        const cd = $('.cd')
        const heading = $('header h2')
        const cdThumb = $('.cd-thumb')
        const audio = $('#audio')
        const playbtn = $('.btn-toggle-play')
        const progress = $('#progress')
        const nextBtn = $('.btn-next')
        const prevBtn = $('.btn-prev')
        const randomBtn = $('.btn-random')
        const repectBtn = $('.btn-repeat')
        const playlist= $('.playlist')
        const time_songs = $('.time-music-end');
        const step_song = $('.time-music-start');
        const body = $('.bodyChange');
        const app ={
          currentIndex: 0,
          isPlaying: false,
          isramdom :false,
          isrepect :false,
          songs: [
                {
                  name:'Chạm chạm',
                  singer:'Cao Minh x Baki',
                  path: './asset/LISTNHAC/chamcham.mp3',
                  image:'./asset/LISTANH/chamcham.png',
                  backgroundcolor: "#c85f48",
                },
                {
                  name:'Chỉ mình anh nhìn thấy',
                  singer:'Thái Đinh',
                  path: './asset/LISTNHAC/chiminhanhnhinthay.mp3',
                  image:'./asset/LISTANH/chiminhanhnhinthay.png',
                  backgroundcolor: "#2a343a",
                },
                {
                  name:'Đoạn kết mới',
                  singer:'Hoàng Dũng',
                  path: './asset/LISTNHAC/doanketmoi.mp3',
                  image:'./asset/LISTANH/doanketmoi.png',
                  backgroundcolor: "#8dc2d5",

                },
                {
                  name:'Làm sao để quên anh',
                  singer:'THE SHEEP',
                  path: './asset/LISTNHAC/lamsaodequenanh.mp3',
                  image:'./asset/LISTANH/lamsaodequenanh.png',
                  backgroundcolor: "#f8d694",

                },
                {
                  name:'Ten j ki`',
                  singer:'XLDRAGON',
                  path: './asset/LISTNHAC/quazoizuiik.mp3',
                  image:'./asset/LISTANH/quazoizuiik.png',
                  backgroundcolor: "#F6EEC7",

                },
                {
                  name:'Đôi mình',
                  singer:'chuotsamset',
                  path: './asset/LISTNHAC/doiminh.mp3',
                  image:'./asset/LISTANH/doiminh.png',
                  backgroundcolor: "#2a67ab",

                },
                {
                  name:'Xin lỗi',
                  singer:'Thắng',
                  path: './asset/LISTNHAC/xinloi.mp3',
                  image:'./asset/LISTANH/xinloi.png',
                  backgroundcolor: "#c85f48",
                },
                {
                  name:'Để tôi ôm em bằng giai điệu này',
                  singer:'GREY D x MIN',
                  path: './asset/LISTNHAC/detoiomembanggiaidieunay.mp3',
                  image:'./asset/LISTANH/song2.png',
                  backgroundcolor: "#6F533E",
                },
                {
                  name:'Đưa em về nhà',
                  singer:'GREY D',
                  path: './asset/LISTNHAC/duaemvenha.mp3',
                  image:'./asset/LISTANH/song3.png',
                  backgroundcolor: "#8dc2d5",

                },
                {
                  name:'Dự báo thời tiết hôm nay mưa',
                  singer:'GREY D',
                  path: './asset/LISTNHAC/dubaothoitiethomnaymua.mp3',
                  image:'./asset/LISTANH/song1.png',
                  backgroundcolor: "#0E5082",

                },
                {
                  name:'Tỉnh thức sau giấc ngủ đông',
                  singer:'GREY D x B RAY',
                  path: './asset/LISTNHAC/tinhthucsaugiacngudong.mp3',
                  image:'./asset/LISTANH/song4.png',
                  backgroundcolor: "#e5e3e4",

                },
                {
                  name:'Vài câu nói có khiến người thay đổi',
                  singer:'GREY D x TLINH',
                  path: './asset/LISTNHAC/vaicaunoicokhiennguoithaydoi.mp3',
                  image:'./asset/LISTANH/song5.png',
                  backgroundcolor: "#9caea8",
                },
                
                

            ],
          render: function(){
              const htmls = this.songs.map((song, index) =>{
                return `
                  <div class="song ${index === this.currentIndex ? 'active' :''}"data-index = "${index}">
                    
                    <div class="body">
                      <h3 class="title">${song.name}</h3>
                      <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                      <i class="fas fa-ellipsis-h"></i>
                    </div>
                  </div>
                  
                `
              })
              
              playlist.innerHTML = htmls.join('');
              body.style.backgroundColor = this.songs[this.currentIndex].backgroundcolor;
            },
          defineProperties:function(){
              Object.defineProperty(this, 'currentSong', {
                get: function(){
                  return this.songs[this.currentIndex];
                }
              })

          },
          handleEvents: function(){
              const _this = this;
              const cdWidth = cd.offsetWidth
              
              // Xử lý quay CD
            //   const cdthumbanimate = cdThumb.animate([
            //     { transform: 'rotate(360deg)' }
            //   ],{
            //     duration: 10000,
            //     interations: Infinity
            //   })
            //   cdthumbanimate.pause()
              //Xử lý cuộn CD
            //   document.onscroll= function(){
            //     const scrollTop = window.scrollY || document.documentElement.scrollTop
            //     const newCdWidth = cdWidth - scrollTop

            //     cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' :0
                
            //   }
              document.body.addEventListener('keydown', function(event) {
                const key = event.code;
                if(key === 'Space'){
                  playbtn.click();
                }
                else if(key === 'ArrowLeft'){
                  prevBtn.click();
                }
                else if(key === 'ArrowRight'){
                  nextBtn.click();
                }
              });
              // Xử lý khi click play
              playbtn.onclick = function() {
                  if(_this.isPlaying){
                      audio.pause()
                  }
                  else{
                      audio.play()
                }
              }

              // Khi song play
              audio.onplay = function(){
                  _this.isPlaying = true
                  player.classList.add('playing')
                  cdthumbanimate.play()
              }
              // Khi song pause
              audio.onpause = function(){
                _this.isPlaying = false
                player.classList.remove('playing')
                cdthumbanimate.pause()
            }
              //Khi tiến độ thay đổi %
              audio.ontimeupdate = function(){
                if(audio.duration){
                  const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
                  progress.value = progressPercent
                  
              }
              // Thay đổi tiến độ bằng time
              audio.ontimeupdate = function(){
                if(audio.duration){
                    progress.value =  Math.floor((audio.currentTime/audio.duration)*100);
                    step_song.textContent = _this.getMinutesSong(progress.value);
                    time_songs.textContent = _this.setMinutesSong();
                }
            }
              
            }
              // Xử lý khi tua
              progress.onchange = function(e){
                  const seekTime = audio.duration / 100 * e.target.value
                  audio.currentTime = seekTime
              }
              //Khi next song
              nextBtn.onclick = function(){
                  if(_this.isramdom){
                      _this.playRamdomSong()
                  }
                  else{
                      _this.nextSong()
                  }
                  
                 audio.play()
                 _this.render( )
                 _this.scrollToActiveSong()
              }
              //Khi prev song
              prevBtn.onclick = function(){
                  if(_this.isramdom){
                    _this.playRamdomSong()
                  }
                  else{
                      _this.prevSong()
              }
                 audio.play()
                 _this.render( )
                 _this.scrollToActiveSong()

              }
              // Random
              randomBtn.onclick =function(e){
                _this.isramdom = !_this.isramdom 
                randomBtn.classList.toggle('active', _this.isramdom)
              }
              //Repect
              repectBtn.onclick = function(){
                _this.isrepect = !_this.isrepect
                repectBtn.classList.toggle('active', _this.isrepect) 
                 
              }
              // Xử lý next song khi hết bài hát
              
              audio.onended = function(){
                if(_this.isrepect){
                  audio.play();
                }
                else{
                  nextBtn.click()
              }
            }
            //Click playlist 
            playlist.onclick = function(e){
              const songNode =e.target.closest('.song:not(.active)')
                if(songNode || e.target.closest('.option'))
                  {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                  }
            
            }
              
          },
          setMinutesSong : function(){
            const time = audio.duration;
            const minutes = Math.floor(time % 3600 / 60).toString().padStart(2,'0');
            const seconds = Math.floor(time % 60).toString().padStart(2,'0');
            return finalTime = minutes + ':' + seconds;
          },
          getMinutesSong : function(){
            const time = audio.currentTime;
            const minutes = Math.floor(time % 3600 / 60).toString().padStart(2,'0');
            const seconds = Math.floor(time % 60).toString().padStart(2,'0');
            return finalTime = minutes + ':' + seconds;
          },
          scrollToActiveSong: function(){
            setTimeout(() => {
                $('.song.active').scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest', 
                }) 
            },300)
          },
          // backgroundChange: function() {
          //   const currentSong = this.currentSong;
          //   if (currentSong.backgroundcolor) {
          //     body.style.backgroundColor = currentSong.backgroundcolor;
          //   } else {
          //     body.style.backgroundColor = '#fff';
          //   }
          // },
          loadCurrentSong: function(){
            heading.textContent = this.currentSong.name
            cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
            audio.src = this.currentSong.path
            // body.style.backgroundColor = this.currentSong.backgroundcolor;
            // this.backgroundChange();
          },
          nextSong: function(){
            this.currentIndex++
            if(this.currentIndex >= this.songs.length){
              this.currentIndex = 0
            }
            this.loadCurrentSong()
          },
          prevSong: function(){
            this.currentIndex--
            if(this.currentIndex < 0){
              this.currentIndex = this.songs.length -1
            }
            this.loadCurrentSong()
          },
          playRamdomSong: function(){
            let newIndex  
            do{
                newIndex = Math.floor(Math.random() * this.songs.length)
              }
              while(newIndex === this.currentIndex)
              this.currentIndex = newIndex
              this.loadCurrentSong()
          },
          
          start: function(){
              this.defineProperties()
              this.render()
              this.handleEvents() 
              this.loadCurrentSong()
              this.scrollToActiveSong()
              
            }
        }
        app.start();
