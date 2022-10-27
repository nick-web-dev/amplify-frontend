export const tableMixin = {
  data() {
    return {
      options: {
        search: null,
      },
      serverItemsLength: 0,
      lastRequest: null,
      items: [],
      storeAction: null,
      loading: true,
      watchOptions: true,
      stopGetting: false,
      showTable: true,
    };
  },
  computed: {
    headers() {
      return this.allHeaders
        .filter((header) => {
          if (!header.permissions) {
            return header.show !== false;
          } else {
            return header.permissions.some((permission) => {
              return this.$can([permission]) && header.show !== false;
            });
          }
        })
        .map((header) => {
          return {
            sortable: header.sortable || false,
            align: "center",
            ...header,
          };
        });
    },
  },
  watch: {
    options: {
      deep: true,
      handler: function (newval) {
        if (this.watchOptions) {
          this.getDataFromApi(newval);
        }
      },
    },
  },
  methods: {
    serverResponse(response) {},
    getDataFromApi(options) {
      if (this.stopGetting) {
        return false;
      }
      this.loading = true;

      if (this.lastRequest) {
        this.lastRequest.cancel("canceld");
      }
      const CancelToken = this.$axios.CancelToken;
      this.lastRequest = CancelToken.source();
      this.$store
        .dispatch(this.storeAction, {
          options,
          lastRequest: this.lastRequest,
        })
        .then((response) => {
          this.serverItemsLength =
            response.data.total !== undefined
              ? response.data.total
              : response.data.meta.total;
          this.items = response.data.data;
          this.serverResponse(response);
          this.$nextTick(() => {
            this.loading = false;
          });
        })
        .catch((error) => {
          this.lastRequest = null;

          this.loading = false;
        });
    },
  },
};
