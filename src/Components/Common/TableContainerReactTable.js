import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
  useRowSelect
} from "react-table";
import { Table, Row, Col, Button, Input, CardBody, InputGroup, InputGroupAddon } from "reactstrap";
import { DefaultColumnFilter } from "./filters";
import './TableContainerReactTable.css'


// Define a default UI for filtering
function GlobalFilter({
  globalFilter,
  setGlobalFilter,
  SearchPlaceholder,
}) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <React.Fragment>
      <CardBody className="p-0">
        <form>
          {/* <Row className="g-3 justify-content-end"> */}

          {/* <div className="search-box mb-2 d-flex align-items-center justify-content-end"> */}
          <div className="position-relative">
  <Input
    onChange={(e) => {
      setValue(e.target.value);
      onChange(e.target.value);
    }}
    id="search-bar-0"
    type="text"
    className="form-control search border-1 p-4 shadow-none rounded-0 pl-4"
    placeholder={SearchPlaceholder}
    value={value || ""}
  />
  <div className="position-absolute top-50 end-0 translate-middle-y px-3">
    <i className="bx bx-search-alt search-icon"></i>
  </div>
</div>
          {/* </div> */}
          {/* </Row> */}
        </form>
      </CardBody>

    </React.Fragment>
  );
}


const TableContainer = ({
  columns,
  data,
  isPagination,
  isGlobalSearch,

  isGlobalFilter,
  isGlobalBranch, // Update the prop name here
  isGlobalStatus,
  isGlobalKyc,
  isGlobalRisk,
  isGlobalPriority,
  isGlobalApprovedBy,
  isGlobalProductType,
  isGlobalVerifiedBy,
  isGlobalFrom,
  isGlobalTo,

  customPageSize,
  tableClass,
  theadClass,
  trClass,
  thClass,
  divClass,

  branchOptions,
  statusOptions,
  kycOptions,
  riskOptions,
  priorityOptions,
  approvedByOptions,
  productTypeOptions,
  verifiedByOptions,

  handleBranchFilterChange,
  handleStatusFilterChange,
  handleKycFilterChange,
  handleRiskFilterChange,
  handlePriorityFilterChange,
  handleApprovedByFilterChange,
  handleProductTypeFilterChange,
  handleVerifiedByFilterChange,





  kycFilterValue,
  riskFilterValue,
  branchFilterValue,
  statusFilterValue,
  priorityFilterValue,
  approvedByFilterValue,
  productTypeFilterValue,
  verifiedByFilterValue,





  SearchPlaceholder,
  styleVariant,
  theadStyle,
  tablestyle,
  branchFilter,

}) => {

  // console.log('styleVariant:', styleVariant);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },


  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0, pageSize: customPageSize, selectedRowIds: 0, sortBy: [
          {
            desc: false,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? <span>&#8593;</span> : <span>&#8595;</span>) : "";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };
  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };


  return (
    <Fragment>
      {(isGlobalBranch || isGlobalFilter|| isGlobalStatus || isGlobalFrom || isGlobalTo || isGlobalKyc || isGlobalRisk  || isGlobalPriority || isGlobalProductType  || isGlobalApprovedBy || isGlobalVerifiedBy ) && (
        <Row className="mb-2  justify-content-end d-flex">

        <Col lg={12} className="justify-content-end d-flex">

{isGlobalRisk && (
                        <Col lg={3} className="ps-2" >

              <Input type="select" name="Risk"  className="rounded-0 text-muted" value={riskFilterValue} onChange={handleRiskFilterChange}>
                <option className="text-muted" value="All">
                  Risk
                </option>
                {riskOptions?.map((risk) => (
                  <option key={risk.value} value={risk.label}>
                    {risk.label}
                  </option>
                ))}
              </Input>
              </Col>
            )}

{isGlobalPriority && (
                        <Col lg={3} className="ps-2" >

              <Input type="select" name="Priority"  className="rounded-0 text-muted" value={priorityFilterValue} onChange={handlePriorityFilterChange}>
                <option className="text-muted" value="All">
                  Priority
                </option>
                {priorityOptions?.map((priority) => (
                  <option key={priority.value} value={priority.label}>
                    {priority.label}
                  </option>
                ))}
              </Input>
              </Col>
            )}



{isGlobalApprovedBy && (
                        <Col lg={3} className="ps-2" >

              <Input type="select" name="ApprovedBy"  className="rounded-0 text-muted" value={approvedByFilterValue} onChange={handleApprovedByFilterChange}>
                <option className="text-muted" value="All">
                  ApprovedBy
                </option>
                {approvedByOptions?.map((approvedBy) => (
                  <option key={approvedBy.value} value={approvedBy.label}>
                    {approvedBy.label}
                  </option>
                ))}
              </Input>
              </Col>
            )}

{isGlobalVerifiedBy && (
                        <Col lg={3} className="ps-2" >

              <Input type="select" name="VerifiedBy"  className="rounded-0 text-muted" value={verifiedByFilterValue} onChange={handleVerifiedByFilterChange}>
                <option className="text-muted" value="All">
                  VerifiedBy
                </option>
                {verifiedByOptions?.map((verifiedBy) => (
                  <option key={verifiedBy.value} value={verifiedBy.label}>
                    {verifiedBy.label}
                  </option>
                ))}
              </Input>
              </Col>
            )}


        </Col>


        <Col lg={12} className="justify-content-end d-flex mt-2">
        {isGlobalBranch && (
                      <Col lg={3} className="ps-2 ">

              <Input type="select" name="Branch"  className="rounded-0 text-muted" value={branchFilterValue} onChange={handleBranchFilterChange}>
                <option className="text-muted" value="All">
                  Branch
                </option>
                {branchOptions?.map((branch) => (
                  <option key={branch.value} value={branch.label}>
                    {branch.label}
                  </option>
                ))}
              </Input>
              </Col>
            )}

            {isGlobalStatus && (
                        <Col lg={3} className="ps-2" >

              <Input type="select" name="Status"  className="rounded-0 text-muted" value={statusFilterValue} onChange={handleStatusFilterChange}>
                <option className="text-muted" value="All">
                  Status
                </option>
                {statusOptions?.map((status) => (
                  <option key={status.value} value={status.label}>
                    {status.label}
                  </option>
                ))}
              </Input>
              </Col>
            )}

{isGlobalKyc && (
                        <Col lg={3} className="ps-2" >

              <Input type="select" name="Kyc"  className="rounded-0 text-muted" value={kycFilterValue} onChange={handleKycFilterChange}>
                <option className="text-muted" value="All">
                  Kyc
                </option>
                {kycOptions?.map((kyc) => (
                  <option key={kyc.value} value={kyc.label}>
                    {kyc.label}
                  </option>
                ))}
              </Input>
              </Col>
            )}
            {isGlobalProductType && (
                        <Col lg={3} className="ps-2" >

              <Input type="select" name="ProductType"  className="rounded-0 text-muted" value={productTypeFilterValue} onChange={handleProductTypeFilterChange}>
                <option className="text-muted" value="All">
                  ProductType
                </option>
                {productTypeOptions?.map((productType) => (
                  <option key={productType.value} value={productType.label}>
                    {productType.label}
                  </option>
                ))}
              </Input>
              </Col>
            )}



        {isGlobalFrom && (
        <Col lg={3} className="ps-2">
          <Input
            type="date"
            name="From"
            className="rounded-0"
            // value={fromFilterValue}
            // onChange={handleFromFilterChange}
          />
        </Col>
      )}

      {isGlobalTo && (
        <Col lg={3} className="ps-2">
          <Input
            type="date"
            name="To"
            className="rounded-0"
            // value={toFilterValue}
            // onChange={handleToFilterChange}
          />
        </Col>
      )}

            {isGlobalFilter && (
              <Col lg={3} className="ps-2">
              <div  >
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                  SearchPlaceholder={SearchPlaceholder}
                />
              </div>
              </Col>
            )}

        </Col>


        </Row>
       )}


      <div className={divClass} style={{ // Add the custom style here
        width: "100%", // Set to 100% to match the card's width
        height: "100%", // Set to 100% to match the card's height
        border: "1px solid #BFBFBF",

      }}>

        <div className={divClass} style={{ ...(styleVariant === 'pending' ? { } : {}), overflow: 'auto' }}>

        <Table hover {...getTableProps()} className={`${tableClass} ${styleVariant === 'pending' ? 'pending' : styleVariant === 'rejected' ? 'rejected' :  (styleVariant === 'approved' ? 'approved' : '')} tablecss`}>

            <thead className={theadClass} 
            style={{ border: "none", ...theadStyle }}
            >
              {headerGroups.map((headerGroup) => (
                <tr className={`${trClass} thcss`} key={headerGroup.id}  {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th key={column.id} className={`${thClass} `} {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                      {/* <Filter column={column} /> */}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <Fragment key={row.getRowProps().key}>
                    <tr className="trcss">
                      {row.cells.map((cell) => {
                        return (
                          <td key={cell.id} className="tdcss" {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>

      {isPagination &&
        <Row className="align-items-center mt-2 g-3 text-center text-sm-start">
          <div className="col-sm">
            <div className="text-muted">Showing<span className="fw-semibold ms-1">{page.length}</span> of <span className="fw-semibold">{data.length}</span> Results
            </div>
          </div>
          <div className="col-sm-auto">
            <ul className="pagination pagination-separated pagination-md justify-content-center justify-content-sm-start mb-0">
              <li className={!canPreviousPage ? "page-item disabled" : "page-item"}>
                <Link to="#" className="page-link" onClick={previousPage}>Previous</Link>
              </li>
              {pageOptions.map((item, key) => (
                <React.Fragment key={key}>
                  <li className="page-item">
                    <Link to="#" className={pageIndex === item ? "page-link active" : "page-link"} onClick={() => gotoPage(item)}>{item + 1}</Link>
                  </li>
                </React.Fragment>
              ))}
              <li className={!canNextPage ? "page-item disabled" : "page-item"}>
                <Link to="#" className="page-link" onClick={nextPage}>Next</Link>
              </li>
            </ul>
          </div>
        </Row>
      }
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;