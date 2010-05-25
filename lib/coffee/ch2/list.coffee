list: (x) -> {
  isEmpty: () -> not this.head()?
  cons: (x) -> list(x)
  head: () -> x
  tail: () -> list() if x?
}

exports: {}

exports.empty: list()

