.PHONY: build test

BIN_DIR = ./node_modules/.bin

TAPE  = $(BIN_DIR)/babel-tape-runner
BABEL = $(BIN_DIR)/babel
COLORTAPE  = $(BIN_DIR)/colortape

all: test build

build:
	$(BABEL) src --out-dir dist

test:
	$(TAPE) test/* | $(COLORTAPE)

clean:
	rm -rf ./node_modules
