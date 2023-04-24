
PROJECT := "skribller"

all:
	zip -r "$(PROJECT).zip" css/ images/ js/ manifest.json

clean:
	rm -f "$(PROJECT).zip"
