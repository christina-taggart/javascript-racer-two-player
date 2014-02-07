require 'debugger'

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/games/new' do
  @game = Game.create
  @game = session[:game]
  @game_id = @game.id
  session[:user1] = User.create(name: params[:player1])
  session[:user2] = User.create(name: params[:player2])
  redirect '/game'
end

get '/games/:id' do
  @winner = Game.find(params[:id]).winner
  erb :single_game
end

post '/games/:id' do
  @game = Game.find(params[:id])
  @game.winner = params[:winner]
  @game.save
  redirect '"/games/#{@game.id}"'
end

get '/game' do
  @gameid = session[:game].id
  @user1 = session[:user1]
  @user2 = session[:user2]
  erb :game
end
