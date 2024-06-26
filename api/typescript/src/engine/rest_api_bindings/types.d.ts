/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/engine/info": {
    /** Get engine info */
    get: {
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["EngineInfo"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves": {
    /** List enclaves */
    get: {
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": {
              [key: string]: components["schemas"]["EnclaveInfo"];
            };
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
    /** Create enclave */
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["CreateEnclave"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["EnclaveInfo"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
    /**
     * Delete enclaves
     * @description Delete stopped enclaves. TO delete all the enclaves use the query parameter `remove_all`
     */
    delete: {
      parameters: {
        query?: {
          remove_all?: components["parameters"]["remove_all"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["DeletionSummary"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/history": {
    /** List all enclave identifiers */
    get: {
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["EnclaveIdentifiers"][];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}": {
    /** Get enclave detailed info */
    get: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["EnclaveInfo"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
    /** Destroy enclave */
    delete: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/status": {
    /** Get enclave status */
    get: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["EnclaveStatus"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
    /** Set enclave status */
    post: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["EnclaveTargetStatus"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/starlark": {
    /** Get last Starlark run */
    get: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["StarlarkDescription"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/starlark/packages": {
    /**
     * Uploads a Starlark package
     * @description Uploads a Starlark package. This step is required before the package can be executed with RunStarlarkPackage
     */
    post: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      requestBody: components["requestBodies"]["fileUploadBody"];
      responses: {
        /** @description Success */
        200: {
          content: never;
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/starlark/packages/{package_id}": {
    /**
     * Executes a Starlark package on the user's behalf
     * @description The endpoint will trigger the execution and deployment of a Starlark package. By default, it'll
     * return an async logs resource using `starlark_execution_uuid` that can be used to retrieve the logs
     * via streaming. It's also possible to block the call and wait for the execution to complete using the
     * query parameter `retrieve_logs_async`.
     */
    post: {
      parameters: {
        query?: {
          retrieve_logs_async?: components["parameters"]["retrieve_logs_async"];
        };
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
          package_id: components["parameters"]["package_id"];
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["RunStarlarkPackage"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["StarlarkRunResponse"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/starlark/scripts": {
    /**
     * Executes a Starlark script on the user's behalf
     * @description The endpoint will trigger the execution and deployment of a Starlark file. By default, it'll
     * return an async logs resource using `starlark_execution_uuid` that can be used to retrieve the logs
     * via streaming. It's also possible to block the call and wait for the execution to complete using the
     * query parameter `retrieve_logs_async`.
     */
    post: {
      parameters: {
        query?: {
          retrieve_logs_async?: components["parameters"]["retrieve_logs_async"];
        };
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["RunStarlarkScript"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["StarlarkRunResponse"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/services/{service_identifier}": {
    /** Returns detailed information about a specific service */
    get: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
          service_identifier: components["parameters"]["service_identifier"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["ServiceInfo"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/services/history": {
    /** Returns information about all existing & historical services */
    get: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["ServiceIdentifiers"][];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/services": {
    /** Returns detailed information about alls services within the enclave */
    get: {
      parameters: {
        query?: {
          /** @description Select services to get information */
          services?: string[];
        };
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": {
              [key: string]: components["schemas"]["ServiceInfo"];
            };
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/services/{service_identifier}/command": {
    /** Executes the given command inside a running service's container */
    post: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
          service_identifier: components["parameters"]["service_identifier"];
        };
      };
      /** @description Exec Command */
      requestBody: {
        content: {
          "application/json": components["schemas"]["ExecCommand"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["ExecCommandResult"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/services/{service_identifier}/endpoints/{port_number}/availability": {
    /**
     * Check for service availability
     * @description Block until the given HTTP endpoint returns available, calling it through a HTTP request
     */
    get: {
      parameters: {
        query?: {
          http_method?: components["parameters"]["http_method"];
          path?: components["parameters"]["path"];
          initial_delay_milliseconds?: components["parameters"]["initial_delay_milliseconds"];
          retries?: components["parameters"]["retries"];
          retries_delay_milliseconds?: components["parameters"]["retries_delay_milliseconds"];
          expected_response?: components["parameters"]["expected_response"];
          request_body?: components["parameters"]["request_body"];
        };
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
          service_identifier: components["parameters"]["service_identifier"];
          port_number: components["parameters"]["port_number"];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: never;
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/artifacts": {
    /** List all files artifacts */
    get: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["FileArtifactReference"][];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/artifacts/{artifact_identifier}": {
    /** Inspect the content of a file artifact */
    get: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
          artifact_identifier: components["parameters"]["artifact_identifier"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["FileArtifactDescription"][];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/artifacts/{artifact_identifier}/download": {
    /** Downloads a files artifact from the Kurtosis File System */
    get: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
          artifact_identifier: components["parameters"]["artifact_identifier"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/octet-stream": string;
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/artifacts/local-file": {
    /** Uploads local file artifact to the Kurtosis File System */
    post: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      requestBody: components["requestBodies"]["fileUploadBody"];
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": {
              [key: string]: components["schemas"]["FileArtifactUploadResult"];
            };
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/artifacts/remote-file": {
    /**
     * Add remote file to Kurtosis File System
     * @description Tells the API container to download a files artifact from the web to the Kurtosis File System
     */
    post: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      /** @description Store Web Files Artifact */
      requestBody: {
        content: {
          "application/json": components["schemas"]["StoreWebFilesArtifact"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["FileArtifactReference"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/artifacts/services/{service_identifier}": {
    /**
     * Add service's file to Kurtosis File System
     * @description Tells the API container to copy a files artifact from a service to the Kurtosis File System
     */
    post: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
          service_identifier: components["parameters"]["service_identifier"];
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["StoreFilesArtifactFromService"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["FileArtifactReference"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/services/connection": {
    /** User services port forwarding */
    post: {
      parameters: {
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["Connect"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: never;
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/logs": {
    /**
     * Get enclave's services logs
     * @description Get multiple enclave services logs concurrently. This endpoint can stream the logs by either starting
     * a Websocket connection (recommended) or legacy HTTP streaming.
     */
    get: {
      parameters: {
        query: {
          service_uuid_set: components["parameters"]["service_uuid_set"];
          follow_logs?: components["parameters"]["follow_logs"];
          conjunctive_filters?: components["parameters"]["conjunctive_filters"];
          return_all_logs?: components["parameters"]["return_all_logs"];
          num_log_lines?: components["parameters"]["num_log_lines"];
        };
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["ServiceLogs"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/enclaves/{enclave_identifier}/services/{service_identifier}/logs": {
    /**
     * Get service logs
     * @description Get service logs. This endpoint can stream the logs by either starting
     * a Websocket connection (recommended) or legacy HTTP streaming.
     */
    get: {
      parameters: {
        query?: {
          follow_logs?: components["parameters"]["follow_logs"];
          conjunctive_filters?: components["parameters"]["conjunctive_filters"];
          return_all_logs?: components["parameters"]["return_all_logs"];
          num_log_lines?: components["parameters"]["num_log_lines"];
        };
        path: {
          enclave_identifier: components["parameters"]["enclave_identifier"];
          service_identifier: components["parameters"]["service_identifier"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["ServiceLogs"];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
  "/starlark/executions/{starlark_execution_uuid}/logs": {
    /**
     * Get Starlark execution logs
     * @description Stream the logs of an Starlark execution that were initiated using `retrieve_logs_async`.
     * The async logs can be consumed only once and expire after consumption or 2 hours after creation.
     * This endpoint can stream the logs by either starting a Websocket connection (recommended) or
     * legacy HTTP streaming.
     */
    get: {
      parameters: {
        path: {
          starlark_execution_uuid: components["parameters"]["starlark_execution_uuid"];
        };
      };
      responses: {
        /** @description Successful request */
        200: {
          content: {
            "application/json": components["schemas"]["StarlarkRunResponseLine"][];
          };
        };
        default: components["responses"]["NotOk"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @enum {string} */
    ResponseType: "ERROR" | "INFO" | "WARNING";
    ResponseInfo: {
      type: components["schemas"]["ResponseType"];
      message: string;
      /** Format: uint32 */
      code: number;
    };
    EngineInfo: {
      engine_version: string;
    };
    CreateEnclave: {
      enclave_name: string;
      api_container_version_tag: string;
      /** @description Enclave log level, defaults to INFO */
      api_container_log_level?: string;
      /** @description Enclave mode, defaults to TEST */
      mode?: components["schemas"]["EnclaveMode"];
      /** @description Whether the APIC's container should run with the debug server to receive a remote debug connection */
      should_apic_run_in_debug_mode?: components["schemas"]["ApiContainerDebugMode"];
    };
    /** @enum {string} */
    EnclaveMode: "TEST" | "PRODUCTION";
    /** @enum {string} */
    EnclaveStatus: "RUNNING" | "STOPPED" | "EMPTY";
    /** @enum {string} */
    EnclaveTargetStatus: "STOP";
    /** @enum {string} */
    ApiContainerStatus: "RUNNING" | "STOPPED" | "NON_EXISTENT";
    /**
     * @default false
     * @enum {boolean}
     */
    ApiContainerDebugMode: false | true;
    EnclaveInfo: {
      enclave_uuid: string;
      name: string;
      shortened_uuid: string;
      containers_status: components["schemas"]["EnclaveStatus"];
      api_container_status: components["schemas"]["ApiContainerStatus"];
      api_container_info?: components["schemas"]["EnclaveAPIContainerInfo"];
      api_container_host_machine_info?: components["schemas"]["EnclaveAPIContainerHostMachineInfo"];
      creation_time: components["schemas"]["Timestamp"];
      mode: components["schemas"]["EnclaveMode"];
    };
    EnclaveAPIContainerInfo: {
      container_id: string;
      ip_inside_enclave: string;
      grpc_port_inside_enclave: number;
      bridge_ip_address: string;
    };
    EnclaveAPIContainerHostMachineInfo: {
      ip_on_host_machine: string;
      grpc_port_on_host_machine: number;
    };
    EnclaveIdentifiers: {
      enclave_uuid: string;
      name: string;
      shortened_uuid: string;
    };
    EnclaveNameAndUuid: {
      name: string;
      uuid: string;
    };
    DeletionSummary: {
      removed_enclave_name_and_uuids?: components["schemas"]["EnclaveNameAndUuid"][];
    };
    /** Format: date-time */
    Timestamp: string;
    /** @description Shared Objects (Used By Multiple Endpoints) */
    Port: {
      /** Format: int32 */
      number: number;
      transport_protocol: components["schemas"]["TransportProtocol"];
      application_protocol?: string;
      /** @description The wait timeout duration in string */
      wait_timeout?: string;
    };
    /** @enum {string} */
    HttpMethodAvailability: "GET" | "POST";
    Container: {
      status: components["schemas"]["ContainerStatus"];
      image_name: string;
      entrypoint_args: string[];
      cmd_args: string[];
      env_vars: {
        [key: string]: string;
      };
    };
    /**
     * @description 0 - STOPPED
     * 1 - RUNNING
     * 2 - UNKNOWN
     * @enum {string}
     */
    ServiceStatus: "STOPPED" | "RUNNING" | "UNKNOWN";
    /**
     * @description 0 - ALWAYS
     * 1 - MISSING
     * @enum {string}
     */
    ImageDownloadMode: "ALWAYS" | "MISSING";
    ServiceInfo: {
      /** @description UUID of the service */
      service_uuid: string;
      /** @description The IP address of the service inside the enclave */
      private_ip_addr: string;
      private_ports: {
        [key: string]: components["schemas"]["Port"];
      };
      /**
       * @description Public IP address *outside* the enclave where the service is reachable
       * NOTE: Will be empty if the service isn't running, the service didn't define any ports, or the backend doesn't support reporting public service info
       */
      public_ip_addr?: string;
      public_ports?: {
        [key: string]: components["schemas"]["Port"];
      };
      /** @description Name of the service */
      name: string;
      /** @description Shortened uuid of the service */
      shortened_uuid: string;
      service_status: components["schemas"]["ServiceStatus"];
      container: components["schemas"]["Container"];
    };
    /**
     * @description 0 - CONNECT // Best effort port forwarding
     * 1 - NO_CONNECT // Port forwarding disabled
     * @enum {string}
     */
    Connect: "CONNECT" | "NO_CONNECT";
    RunStarlarkScript: {
      serialized_script: string;
      /** @description Parameters data for the Starlark package main function */
      params?: {
        [key: string]: unknown;
      };
      /** @description Defaults to false */
      dry_run?: boolean;
      /**
       * Format: int32
       * @description Defaults to 4
       */
      parallelism?: number;
      /** @description The name of the main function, the default value is "run" */
      main_function_name?: string;
      experimental_features?: components["schemas"]["KurtosisFeatureFlag"][];
      /** @description Defaults to empty */
      cloud_instance_id?: string;
      /** @description Defaults to empty */
      cloud_user_id?: string;
      image_download_mode?: components["schemas"]["ImageDownloadMode"];
      /** @description Defaults to false */
      non_blocking_mode?: boolean;
    };
    RunStarlarkPackage: {
      /** @description Parameters data for the Starlark package main function */
      params?: {
        [key: string]: unknown;
      };
      /** @description Defaults to false */
      dry_run?: boolean;
      /**
       * Format: int32
       * @description Defaults to 4
       */
      parallelism?: number;
      /**
       * @description Whether the package should be cloned or not.
       * If false, then the package will be pulled from the APIC local package store. If it's a local package then is must
       * have been uploaded using UploadStarlarkPackage prior to calling RunStarlarkPackage.
       * If true, then the package will be cloned from GitHub before execution starts
       */
      clone_package?: boolean;
      /** @description The relative main file filepath, the default value is the "main.star" file in the root of a package */
      relative_path_to_main_file?: string;
      /** @description The name of the main function, the default value is "run" */
      main_function_name?: string;
      experimental_features?: components["schemas"]["KurtosisFeatureFlag"][];
      /** @description Defaults to empty */
      cloud_instance_id?: string;
      /** @description Defaults to empty */
      cloud_user_id?: string;
      image_download_mode?: components["schemas"]["ImageDownloadMode"];
      /** @description Defaults to false */
      non_blocking_mode?: boolean;
      /** @description Defaults to empty */
      github_auth_token?: string;
    };
    /**
     * @description 0 - NO_INSTRUCTIONS_CACHING
     * @enum {string}
     */
    KurtosisFeatureFlag: "NO_INSTRUCTIONS_CACHING";
    /** @description Starlark Execution Logs */
    StarlarkRunLogs: components["schemas"]["StarlarkRunResponseLine"][];
    /** @description Starlark Execution Response */
    StarlarkRunResponseLine: components["schemas"]["StarlarkInstruction"] | components["schemas"]["StarlarkError"] | components["schemas"]["StarlarkRunProgress"] | components["schemas"]["StarlarkInstructionResult"] | components["schemas"]["StarlarkRunFinishedEvent"] | components["schemas"]["StarlarkWarning"] | components["schemas"]["StarlarkInfo"];
    StarlarkInfo: {
      info: {
        instruction: {
          info_message: string;
        };
      };
    };
    StarlarkWarning: {
      warning: {
        warning_message: string;
      };
    };
    StarlarkInstruction: {
      position?: components["schemas"]["StarlarkInstructionPosition"];
      instruction_name: string;
      arguments: components["schemas"]["StarlarkInstructionArgument"][];
      executable_instruction: string;
      is_skipped: boolean;
    };
    StarlarkInstructionResult: {
      instruction_result: {
        serialized_instruction_result: string;
      };
    };
    StarlarkInstructionArgument: {
      serialized_arg_value: string;
      arg_name?: string;
      is_representative: boolean;
    };
    StarlarkInstructionPosition: {
      filename: string;
      /** Format: int32 */
      line: number;
      /** Format: int32 */
      column: number;
    };
    StarlarkError: {
      error: components["schemas"]["StarlarkInterpretationError"] | components["schemas"]["StarlarkValidationError"] | components["schemas"]["StarlarkExecutionError"];
    };
    StarlarkInterpretationError: {
      interpretation_error: {
        error_message: string;
      };
    };
    StarlarkValidationError: {
      validation_error: {
        error_message: string;
      };
    };
    StarlarkExecutionError: {
      execution_error: {
        error_message: string;
      };
    };
    StarlarkRunProgress: {
      progress_info: {
        current_step_info: string[];
        /** Format: int32 */
        total_steps: number;
        /** Format: int32 */
        current_step_number: number;
      };
    };
    StarlarkRunFinishedEvent: {
      run_finished_event: {
        is_run_successful: boolean;
        serialized_output?: string;
      };
    };
    /** @description Use it to asynchronously retrieve the execution logs via Websockets or http streaming */
    AsyncStarlarkExecutionLogs: {
      /** @description Execution UUID to asynchronously retrieve the execution logs */
      async_starlark_execution_logs: {
        starlark_execution_uuid: string;
      };
    };
    StarlarkRunResponse: {
      starlark_execution_logs?: components["schemas"]["AsyncStarlarkExecutionLogs"] | components["schemas"]["StarlarkRunLogs"];
    };
    /** @description An service identifier is a collection of uuid, name and shortened uuid */
    ServiceIdentifiers: {
      /** @description UUID of the service */
      service_uuid: string;
      /** @description Name of the service */
      name: string;
      /** @description The shortened uuid of the service */
      shortened_uuid: string;
    };
    /** @description Exec Command */
    ExecCommand: {
      command_args: string[];
    };
    ExecCommandResult: {
      /** Format: int32 */
      exit_code: number;
      /** @description Assumes UTF-8 encoding */
      log_output: string;
    };
    FileArtifactUploadResult: {
      file_artifact_upload_result?: components["schemas"]["FileArtifactReference"] | components["schemas"]["ResponseInfo"];
    };
    /** @description Files Artifact identifier */
    FileArtifactReference: {
      /** @description UUID of the files artifact, for use when referencing it in the future */
      uuid: string;
      /** @description UUID of the files artifact, for use when referencing it in the future */
      name: string;
    };
    /** @description Store Web Files Artifact */
    StoreWebFilesArtifact: {
      /** @description URL to download the artifact from */
      url: string;
      /** @description The name of the files artifact */
      name: string;
    };
    StoreFilesArtifactFromService: {
      /** @description The absolute source path where the source files will be copied from */
      source_path: string;
      /** @description The name of the files artifact */
      name: string;
    };
    FileArtifactDescription: {
      /** @description Path relative to the file artifact */
      path: string;
      /**
       * Format: int64
       * @description Size of the file, in bytes
       */
      size: number;
      /** @description A bit of text content, if the file allows (similar to UNIX's 'head') */
      text_preview?: string;
    };
    /**
     * @description 0 - NEVER
     * 1 - ALWAYS
     * @enum {string}
     */
    RestartPolicy: "NEVER" | "ALWAYS";
    StarlarkDescription: {
      package_id: string;
      serialized_script: string;
      serialized_params: string;
      /** Format: int32 */
      parallelism: number;
      relative_path_to_main_file: string;
      main_function_name: string;
      experimental_features: components["schemas"]["KurtosisFeatureFlag"][];
      restart_policy: components["schemas"]["RestartPolicy"];
    };
    /**
     * @description 0 - TCP
     * 1 - SCTP
     * 2 - UDP
     * @enum {string}
     */
    TransportProtocol: "TCP" | "SCTP" | "UDP";
    /**
     * @description 0 - STOPPED
     * 1 - RUNNING
     * 2 - UNKNOWN
     * @enum {string}
     */
    ContainerStatus: "STOPPED" | "RUNNING" | "UNKNOWN";
    ServiceLogs: {
      service_logs_by_service_uuid?: {
        [key: string]: components["schemas"]["LogLine"];
      };
      not_found_service_uuid_set?: string[];
    };
    LogLine: {
      line: string[];
      timestamp: components["schemas"]["Timestamp"];
    };
    LogLineFilter: {
      operator: components["schemas"]["LogLineOperator"];
      text_pattern: string;
    };
    /** @enum {string} */
    LogLineOperator: "DOES_CONTAIN_TEXT" | "DOES_NOT_CONTAIN_TEXT" | "DOES_CONTAIN_MATCH_REGEX" | "DOES_NOT_CONTAIN_MATCH_REGEX";
  };
  responses: {
    /** @description Unexpected error */
    NotOk: {
      content: {
        "application/json": components["schemas"]["ResponseInfo"];
      };
    };
  };
  parameters: {
    /** @description UUID, shortened UUID, or name of the enclave */
    enclave_identifier: string;
    /** @description The service identifier of the container that the command should be executed in */
    service_identifier: string;
    /** @description The unique identifier to track the execution of a Starlark script or package */
    starlark_execution_uuid: string;
    service_uuid_set: string[];
    /** @description If false, block http response until all logs are available. Default is true */
    retrieve_logs_async?: boolean;
    /** @description If true, remove all enclaves. Otherwise only remove stopped enclaves. Default is false */
    remove_all?: boolean;
    /** @description The port number to check availability */
    port_number: number;
    /** @description The HTTP method used to check availability. Default is GET. */
    http_method?: components["schemas"]["HttpMethodAvailability"];
    /** @description The path of the service to check. It mustn't start with the first slash. For instance `service/health` */
    path?: string;
    /** @description The number of milliseconds to wait until executing the first HTTP call */
    initial_delay_milliseconds?: number;
    /** @description Max number of HTTP call attempts that this will execute until giving up and returning an error */
    retries?: number;
    /** @description Number of milliseconds to wait between retries */
    retries_delay_milliseconds?: number;
    /** @description If the endpoint returns this value, the service will be marked as available (e.g. Hello World). */
    expected_response?: string;
    /** @description If the http_method is set to POST, this value will be send as the body of the availability request. */
    request_body?: string;
    /** @description The artifact name or uuid */
    artifact_identifier: string;
    /** @description The package identifier that will be executed */
    package_id: string;
    follow_logs?: boolean;
    conjunctive_filters?: components["schemas"]["LogLineFilter"][];
    return_all_logs?: boolean;
    num_log_lines?: number;
  };
  requestBodies: {
    fileUploadBody?: {
      content: {
        "multipart/form-data": string;
      };
    };
  };
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
