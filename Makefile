ARTISAN = php artisan

all: vendor
	@$(ARTISAN) serve

vendor:
	@composer install
	@cp .env.example .env
	@$(ARTISAN) key:generate

db:
	@touch database/database.sqlite
	@$(ARTISAN) migrate

js:	node_modules
	@npm run watch

node_modules:
	@npm install

clean:
	@$(ARTISAN) migrate:fresh --seed
	@$(ARTISAN) optimize
	@$(ARTISAN) debugbar:clear
