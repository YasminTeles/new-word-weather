.PHONY: help setup run test build lint

help: ## Show help.
	@printf "A set of development commands.\n"
	@printf "\nUsage:\n"
	@printf "\t make \033[36m<commands>\033[0m\n"
	@printf "\nThe Commands are:\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\t\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: ## Setup application.
	@yarn

run: ## Run local application.
	@yarn run dev

test: ## Run tests.
	@yarn run test

build: ## Build application.
	@yarn run build

lint: ## Run lint.
	@yarn run lint
