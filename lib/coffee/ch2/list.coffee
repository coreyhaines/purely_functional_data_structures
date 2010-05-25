list: (empty, x) -> {
  isEmpty: () -> not x?
  cons: (x) -> list(false, x)
  head: () -> x
}

exports: {}

exports.empty: list(true)

