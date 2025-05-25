"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import {
  Building2,
  Calculator,
  Users,
  DollarSign,
  Save,
  AlertCircle,
  Percent,
  Clock,
  Briefcase,
  Target,
  Settings,
  RotateCcw,
} from "lucide-react";

export default function BusinessConfiguration() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });

  const [salesTaxRate, setSalesTaxRate] = useState("6");
  const [laborBurdenRate, setLaborBurdenRate] = useState("15");

  const [laborRates, setLaborRates] = useState({
    laborers: "25",
    supervision: "35",
  });

  const [margins, setMargins] = useState({
    equipment: { default: "55", minimum: "30" },
    labor: { default: "55", minimum: "30" },
    hardMaterial: { default: "55", minimum: "30" },
    plantMaterial: { default: "55", minimum: "30" },
    otherJobCosts: { default: "55", minimum: "30" },
    overall: { default: "55", minimum: "45" },
  });

  const [subcontractorMarkup, setSubcontractorMarkup] = useState({
    default: { markup: "30", grossMargin: "" },
    minimum: { markup: "20", grossMargin: "" },
  });

  const [personnel] = useState([
    {
      salesPerson: "Test 1",
      opsManager: "Ops Manager 1",
      estimator: "Estimator 1",
    },
    {
      salesPerson: "Test 2",
      opsManager: "Ops Manager 2",
      estimator: "Estimator 2",
    },
    {
      salesPerson: "Test 3",
      opsManager: "Ops Manager 3",
      estimator: "Estimator 3",
    },
    {
      salesPerson: "Test 4",
      opsManager: "Ops Manager 4",
      estimator: "Estimator 4",
    },
    {
      salesPerson: "Test 5",
      opsManager: "Ops Manager 5",
      estimator: "Estimator 5",
    },
    {
      salesPerson: "Test 6",
      opsManager: "Ops Manager 6",
      estimator: "Estimator 6",
    },
    {
      salesPerson: "Test 7",
      opsManager: "Ops Manager 7",
      estimator: "Estimator 7",
    },
  ]);

  const [reviewThreshold, setReviewThreshold] = useState("10000");

  // Reset functions for each section
  const resetCompanyInfo = () => {
    setCompanyInfo({
      name: "",
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  const resetFinancialSettings = () => {
    setSalesTaxRate("6");
    setLaborBurdenRate("15");
    setLaborRates({
      laborers: "25",
      supervision: "35",
    });
    setReviewThreshold("10000");
  };

  const resetMargins = () => {
    setMargins({
      equipment: { default: "55", minimum: "30" },
      labor: { default: "55", minimum: "30" },
      hardMaterial: { default: "55", minimum: "30" },
      plantMaterial: { default: "55", minimum: "30" },
      otherJobCosts: { default: "55", minimum: "30" },
      overall: { default: "55", minimum: "45" },
    });
  };

  const resetSubcontractorMarkup = () => {
    setSubcontractorMarkup({
      default: { markup: "30", grossMargin: "" },
      minimum: { markup: "20", grossMargin: "" },
    });
  };

  // Save functions
  const saveCompanyInfo = () => {
    console.log("Saving company info:", companyInfo);
  };

  const saveFinancialSettings = () => {
    console.log("Saving financial settings:", {
      salesTaxRate,
      laborBurdenRate,
      laborRates,
      reviewThreshold,
    });
  };

  const saveMargins = () => {
    console.log("Saving margins:", margins);
  };

  const saveSubcontractorMarkup = () => {
    console.log("Saving subcontractor markup:", subcontractorMarkup);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-zinc-900">
                Business Config
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">
            Business Configuration
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Configure your company settings, financial parameters, and
            operational margins in one place.
          </p>
        </div>

        {/* Company Information Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Building2 className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-zinc-900">
                Company Information
              </h2>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="bordered"
                onPress={resetCompanyInfo}
                startContent={<RotateCcw className="w-4 h-4" />}
                className="border-zinc-300 text-zinc-700"
              >
                Reset
              </Button>
              <Button
                color="primary"
                onPress={saveCompanyInfo}
                startContent={<Save className="w-4 h-4" />}
                className="bg-blue-600 text-white"
              >
                Save
              </Button>
            </div>
          </div>

          <Card className="shadow-sm">
            <CardBody className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Input
                    label="Company Name"
                    // placeholder="Enter your company name"
                    value={companyInfo.name}
                    onValueChange={(value) =>
                      setCompanyInfo({ ...companyInfo, name: value })
                    }
                    variant="bordered"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      inputWrapper:
                        "border-zinc-300 focus-within:border-blue-600",
                    }}
                  />
                  <Input
                    label="Street Address"
                    // placeholder="Enter street address"
                    value={companyInfo.streetAddress}
                    onValueChange={(value) =>
                      setCompanyInfo({ ...companyInfo, streetAddress: value })
                    }
                    variant="bordered"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      inputWrapper:
                        "border-zinc-300 focus-within:border-blue-600",
                    }}
                  />
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="City"
                      // placeholder="City"
                      value={companyInfo.city}
                      onValueChange={(value) =>
                        setCompanyInfo({ ...companyInfo, city: value })
                      }
                      variant="bordered"
                      size="lg"
                      classNames={{
                        input: "text-base",
                        inputWrapper:
                          "border-zinc-300 focus-within:border-blue-600",
                      }}
                    />
                    <Input
                      label="State"
                      // placeholder="State"
                      value={companyInfo.state}
                      onValueChange={(value) =>
                        setCompanyInfo({ ...companyInfo, state: value })
                      }
                      variant="bordered"
                      size="lg"
                      classNames={{
                        input: "text-base",
                        inputWrapper:
                          "border-zinc-300 focus-within:border-blue-600",
                      }}
                    />
                  </div>
                  <Input
                    label="ZIP Code"
                    // placeholder="ZIP Code"
                    value={companyInfo.zip}
                    onValueChange={(value) =>
                      setCompanyInfo({ ...companyInfo, zip: value })
                    }
                    variant="bordered"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      inputWrapper:
                        "border-zinc-300 focus-within:border-blue-600",
                    }}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Financial Settings Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Calculator className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-zinc-900">
                Financial Settings
              </h2>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="bordered"
                onPress={resetFinancialSettings}
                startContent={<RotateCcw className="w-4 h-4" />}
                className="border-zinc-300 text-zinc-700"
              >
                Reset
              </Button>
              <Button
                color="primary"
                onPress={saveFinancialSettings}
                startContent={<Save className="w-4 h-4" />}
                className="bg-blue-600 text-white"
              >
                Save
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Sales Tax Rate */}
            <Card className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <Percent className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Sales Tax
                  </h3>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <Input
                  label="Rate (%)"
                  type="number"
                  step="0.1"
                  value={salesTaxRate}
                  onValueChange={setSalesTaxRate}
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
              </CardBody>
            </Card>

            {/* Labor Burden */}
            <Card className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Labor Burden
                  </h3>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <Input
                  label="Rate (%)"
                  type="number"
                  step="0.1"
                  value={laborBurdenRate}
                  onValueChange={setLaborBurdenRate}
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
              </CardBody>
            </Card>

            {/* Laborers Rate */}
            <Card className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Laborers
                  </h3>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <Input
                  label="Rate ($/hour)"
                  type="number"
                  value={laborRates.laborers}
                  onValueChange={(value) =>
                    setLaborRates({ ...laborRates, laborers: value })
                  }
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
              </CardBody>
            </Card>

            {/* Supervision Rate */}
            <Card className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Supervision
                  </h3>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <Input
                  label="Rate ($/hour)"
                  type="number"
                  value={laborRates.supervision}
                  onValueChange={(value) =>
                    setLaborRates({ ...laborRates, supervision: value })
                  }
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
              </CardBody>
            </Card>
          </div>

          {/* Review Threshold */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Manager Review Threshold
                </h3>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="max-w-md">
                <Input
                  label="Estimates requiring manager approval"
                  type="number"
                  value={reviewThreshold}
                  onValueChange={setReviewThreshold}
                  variant="bordered"
                  size="lg"
                  startContent={<span className="text-zinc-500">$</span>}
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Margin Percentages Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Target className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-zinc-900">
                Margin Percentages
              </h2>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="bordered"
                onPress={resetMargins}
                startContent={<RotateCcw className="w-4 h-4" />}
                className="border-zinc-300 text-zinc-700"
              >
                Reset
              </Button>
              <Button
                color="primary"
                onPress={saveMargins}
                startContent={<Save className="w-4 h-4" />}
                className="bg-blue-600 text-white"
              >
                Save
              </Button>
            </div>
          </div>

          <Card className="shadow-sm">
            <CardBody className="p-8">
              <Table
                aria-label="Margin percentages table"
                className="min-w-full"
              >
                <TableHeader>
                  <TableColumn className="text-zinc-900 font-semibold text-base py-4">
                    CATEGORY
                  </TableColumn>
                  <TableColumn className="text-zinc-900 font-semibold text-base py-4 text-center">
                    DEFAULT (%)
                  </TableColumn>
                  <TableColumn className="text-zinc-900 font-semibold text-base py-4 text-center">
                    MINIMUM (%)
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {Object.entries(margins).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium text-zinc-900 py-6 text-base capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </TableCell>
                      <TableCell className="text-center py-2">
                        <Input
                          type="number"
                          value={value.default}
                          onValueChange={(newValue) =>
                            setMargins({
                              ...margins,
                              [key]: { ...value, default: newValue },
                            })
                          }
                          variant="bordered"
                          size="sm"
                          className="w-24 mx-auto"
                          classNames={{
                            input: "text-center text-base",
                            inputWrapper:
                              "border-zinc-300 focus-within:border-blue-600",
                          }}
                        />
                      </TableCell>
                      <TableCell className="text-center py-6">
                        <Input
                          type="number"
                          value={value.minimum}
                          onValueChange={(newValue) =>
                            setMargins({
                              ...margins,
                              [key]: { ...value, minimum: newValue },
                            })
                          }
                          variant="bordered"
                          size="sm"
                          className="w-24 mx-auto"
                          classNames={{
                            input: "text-center text-base",
                            inputWrapper:
                              "border-zinc-300 focus-within:border-blue-600",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        {/* Subcontractor Markup Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-zinc-900">
                Subcontractor Markup
              </h2>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="bordered"
                onPress={resetSubcontractorMarkup}
                startContent={<RotateCcw className="w-4 h-4" />}
                className="border-zinc-300 text-zinc-700"
              >
                Reset
              </Button>
              <Button
                color="primary"
                onPress={saveSubcontractorMarkup}
                startContent={<Save className="w-4 h-4" />}
                className="bg-blue-600 text-white"
              >
                Save
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Default Settings
                </h3>
              </CardHeader>
              <CardBody className="pt-0 space-y-6">
                <Input
                  label="Markup (%)"
                  type="number"
                  value={subcontractorMarkup.default.markup}
                  onValueChange={(value) =>
                    setSubcontractorMarkup({
                      ...subcontractorMarkup,
                      default: {
                        ...subcontractorMarkup.default,
                        markup: value,
                      },
                    })
                  }
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
                <Input
                  label="Gross Margin"
                  // placeholder="Enter gross margin"
                  value={subcontractorMarkup.default.grossMargin}
                  onValueChange={(value) =>
                    setSubcontractorMarkup({
                      ...subcontractorMarkup,
                      default: {
                        ...subcontractorMarkup.default,
                        grossMargin: value,
                      },
                    })
                  }
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
              </CardBody>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Minimum Settings
                </h3>
              </CardHeader>
              <CardBody className="pt-0 space-y-6">
                <Input
                  label="Markup (%)"
                  type="number"
                  value={subcontractorMarkup.minimum.markup}
                  onValueChange={(value) =>
                    setSubcontractorMarkup({
                      ...subcontractorMarkup,
                      minimum: {
                        ...subcontractorMarkup.minimum,
                        markup: value,
                      },
                    })
                  }
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
                <Input
                  label="Gross Margin"
                  // placeholder="Enter gross margin"
                  value={subcontractorMarkup.minimum.grossMargin}
                  onValueChange={(value) =>
                    setSubcontractorMarkup({
                      ...subcontractorMarkup,
                      minimum: {
                        ...subcontractorMarkup.minimum,
                        grossMargin: value,
                      },
                    })
                  }
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "border-zinc-300 focus-within:border-blue-600",
                  }}
                />
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Personnel Directory Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-zinc-900">
                Personnel Directory
              </h2>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="bordered"
                startContent={<RotateCcw className="w-4 h-4" />}
                className="border-zinc-300 text-zinc-700"
              >
                Reset
              </Button>
              <Button
                color="primary"
                startContent={<Save className="w-4 h-4" />}
                className="bg-blue-600 text-white"
              >
                Save
              </Button>
            </div>
          </div>

          <Card className="shadow-sm">
            <CardBody className="p-8">
              <Table
                aria-label="Personnel directory table"
                className="min-w-full"
              >
                <TableHeader>
                  <TableColumn className="text-zinc-900 font-semibold text-base py-4">
                    SALES PERSON
                  </TableColumn>
                  <TableColumn className="text-zinc-900 font-semibold text-base py-4">
                    OPS MANAGER
                  </TableColumn>
                  <TableColumn className="text-zinc-900 font-semibold text-base py-4">
                    ESTIMATOR NAME
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {personnel.map((person, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-zinc-900 py-4 text-base">
                        {person.salesPerson}
                      </TableCell>
                      <TableCell className="text-zinc-700 py-4 text-base">
                        {person.opsManager}
                      </TableCell>
                      <TableCell className="text-zinc-700 py-4 text-base">
                        {person.estimator}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>
      </main>
    </div>
  );
}
