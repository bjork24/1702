set :application, "1702fremont.com"

set :port, 2424
set :ssh_options, { :forward_agent => true }

set :scm, :git
set :repository,  "."
set :deploy_via, :copy

set :user, :deploy
set :deploy_to, "/var/www/#{application}"
set :use_sudo, false

role :web, application
role :app, application

set :current_path, "#{deploy_to}/current"
set :releases_path, "#{deploy_to}/releases/"
set :shared_path, "#{deploy_to}/shared/"

namespace:deploy do
    task :start do ; end
    task :stop do ; end
    task :restart do
      run "cd #{current_path}; rm -rf README; rm -rf Capfile; rm -rf config/;"
    end    
end

after "deploy:restart", "deploy:cleanup"